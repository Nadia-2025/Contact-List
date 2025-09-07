import { useEffect } from "react";
import useGlobalReducer from "../context/ContactContext";
import { getData, deleteData } from "../services/api";
import ContactCard from "./ContactCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";

const ContactList = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      const data = await getData();

      if (!data.error) {
        dispatch({ type: "GET_CONTACT", payload: data });
      } else {
        console.error("Error loading contacts:", data.error);
      }
    };
    fetchContacts();
  }, [dispatch]);

  const handleOpenModal = (contact) => {
    setContactToDelete(contact);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!contactToDelete) return;
    const deleted = await deleteData(contactToDelete.id);
    if (!deleted.error) {
      dispatch({ type: "DELETE_CONTACT", payload: contactToDelete.id });
    }
    setShowModal(false);
    setContactToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setContactToDelete(null);
  };

  const handleOnclick = () => {
    navigate("/");
  };

  return (
    <>
      {showModal && (
        <Modal
          show={showModal}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        ></Modal>
      )}
      <div className="containe">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-end align-items-center">
              <button
                type="button"
                className="btn btn-success "
                onClick={handleOnclick}
              >
                Add new contact
              </button>
            </div>

            {store.contacts.length == 0 ? (
              <div className="mt-5">
                <h3>Oooops!! No contacts in the agenda</h3>
              </div>
            ) : (
              Array.isArray(store.contacts) &&
              store.contacts.map((contact) => (
                <ContactCard
                  key={contact.id}
                  contact={contact}
                  onDelete={() => handleOpenModal(contact)}
                ></ContactCard>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactList;
