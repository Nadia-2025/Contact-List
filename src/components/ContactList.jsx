import { useEffect } from "react";
import useGlobalReducer from "../context/ContactContext";
import { getData } from "../services/api";
import ContactCard from "./ContactCard";
import { Navigate, useNavigate } from "react-router-dom";

const ContactList = () => {
  const { store, dispatch } = useGlobalReducer();
  const Navigate = useNavigate();

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

  const handleOnclick = () => {
    Navigate("/");
  };

  return (
    <>
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
                <ContactCard key={contact.id} contact={contact}></ContactCard>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactList;
