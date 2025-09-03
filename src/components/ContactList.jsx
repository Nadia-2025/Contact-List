import useGlobalReducer from "../context/ContactContext";

const ContactList = () => {
  const { store, dispatch } = useGlobalReducer();

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

            <div
              className="list-container d-flex justify-content-between align-items-center
            "
            >
              <div className="contact-details d-flex justify-content-start align-content-center">
                <img
                  src="https://www.shutterstock.com/image-photo/portrait-woman-studio-shot-260nw-2514456809.jpg"
                  alt=""
                  className="image"
                />
                <div className="contact ms-5 mt-5">
                  <h5>Nadia Koukouss</h5>

                  <p className="text-start">
                    <i className="fa-solid fa-phone-flip me-3 "></i>
                  </p>

                  <p className="text-start">
                    <i className="fa-solid fa-location-dot  me-3 "></i>
                  </p>

                  <p className="text-start">
                    <i className="fa-solid fa-envelope  me-3"></i>
                  </p>
                </div>
              </div>
              <div className="modification-buttons">
                <i className="fa-solid fa-pencil me-5 fs-5"></i>
                <i className="fa-regular fa-trash-can me-5 ms-5 fs-5"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactList;
