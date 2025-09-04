import { useEffect } from "react";
import useGlobalReducer from "../context/ContactContext";
import { getData } from "../services/api";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const { store, dispatch } = useGlobalReducer();

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

  return (
    <>
      <div className="containe">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-end align-items-center">
              <button type="button" className="btn btn-success ">
                Add new contact
              </button>
            </div>

            {store.contacts.length == 0 ? (
              <div className="mt-5">
                <h3>Oooops!! No contacts in the agenda</h3>
              </div>
            ) : (
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
