const ContactCard = ({ contact }) => {
  return (
    <>
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
            <h5>{contact.fullName}</h5>

            <p className="text-start">
              <i className="fa-solid fa-phone-flip me-3 "></i>
              {contact.phone}
            </p>

            <p className="text-start">
              <i className="fa-solid fa-location-dot  me-3 "></i>
              {contact.adress}
            </p>

            <p className="text-start">
              <i className="fa-solid fa-envelope  me-3"></i>
              {contact.email}
            </p>
          </div>
        </div>
        <div className="modification-buttons">
          <i className="fa-solid fa-pencil me-5 fs-5"></i>
          <i className="fa-regular fa-trash-can me-5 ms-5 fs-5"></i>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
