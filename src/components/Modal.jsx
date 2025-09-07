import "./Modal.css";

const Modal = ({ show, onCancel, onConfirm }) => {
  if (!show) return null;
  return (
    <>
      <div className="modal-backdrop">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Are you sure?</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onCancel}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-start">
              <p>There is no way back if you delete this contact...</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onConfirm}
              >
                Confirm
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
