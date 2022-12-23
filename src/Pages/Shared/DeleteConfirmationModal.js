import React, { useState } from "react";

const DeleteConfirmationModal = ({
  handleDoctorDelete,
  doctor,
  btnNameClass,
  message,
  title,
  setDeletingDoctor,
}) => {
  return (
    <>
      <input
        type="checkbox"
        id="delete-confirmation"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label onClick={() => setDeletingDoctor(null)} className="btn">
              Cancel
            </label>
            <label
              onClick={() => handleDoctorDelete(doctor)}
              htmlFor="delete-confirmation"
              className={`btn ${btnNameClass.class}`}
            >
              {btnNameClass.name}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteConfirmationModal;
