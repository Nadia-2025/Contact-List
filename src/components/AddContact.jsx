import { createData } from "../services/api";
import useGlobalReducer from "../context/ContactContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddContact = () => {
  const { dispatch } = useGlobalReducer();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const createdContact = await createData(form);

    if (!createdContact.error) {
      dispatch({ type: "ADD_CONTACT", payload: createdContact });
      setForm({ name: "", phone: "", email: "", address: "" });
    } else {
      console.error("Error creando contacto:", createdContact.error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <h1>Contact List</h1>
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
                Save
              </button>
            </form>
            <Link to="/agendas/mi_agenda/contacts">
              Or get back to contacts
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddContact;
