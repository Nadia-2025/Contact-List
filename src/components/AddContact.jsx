import { createData, updateData } from "../services/api";
import useGlobalReducer from "../context/ContactContext";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddContact = () => {
  const { dispatch, store } = useGlobalReducer();
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (id) {
      const contactToEdit = store.contacts.find(
        (contact) => contact.id === parseInt(id)
      );
      if (contactToEdit) setForm(contactToEdit);
    }
  }, [id, store.contacts]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let result;
    if (id) {
      result = await updateData(id, form);
      dispatch({ type: "UPDATE_CONTACT", payload: result });
    } else {
      result = await createData(form);
      dispatch({ type: "ADD_CONTACT", payload: result });
    }
    navigate("/agendas/agenda_nadia/contacts");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <h1>{id ? "Edit Contact" : "Add Contact"}</h1>
              <div className=" mb-3 text-start">
                <label htmlFor="fullname" className="form-label ">
                  Full Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  id="fullname"
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div className="mb-3 text-start">
                <label htmlFor="emailAdress" className="form-label">
                  Email address
                </label>

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  id="emailAdress"
                  type="text"
                  className="form-control"
                  placeholder="Enter email "
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div className=" mb-3 text-start">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  id="phone"
                  type="text"
                  className="form-control"
                  placeholder="Enter phone"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div className="mb-3 text-start">
                <label htmlFor="address" className="form-label">
                  Address
                </label>

                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  id="address"
                  type="text"
                  className="form-control"
                  placeholder="Enter Adress"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                {id ? "Update" : "Save"}
              </button>
            </form>
            <Link to="/agendas/agenda_nadia/contacts">
              Or get back to contacts
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddContact;
