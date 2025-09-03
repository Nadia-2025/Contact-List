const AddContact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Contact List</h1>
            <div className=" mb-3 text-start">
              <label htmlFor="fullname" className="form-label ">
                Full Name
              </label>
              <input
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
                id="address"
                type="text"
                className="form-control"
                placeholder="Enter Adress"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <button className="btn btn-primary w-100">Save</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddContact;
