/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const Modal = ({ open, title, url, description, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay text-black">
      <div className="modalContainer">
        <img className="modalImg" src={url} alt={title} />
        <div className="modalText">
          <p onClick={onClose} className="modalClose">
            X
          </p>
          <h2 className="modalTitle">{title}</h2>
          <p className=" cursor-pointer modalDescription">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
