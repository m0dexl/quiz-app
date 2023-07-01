import React from "react";
import "./Modal.css";

const Modal = ({ score, questionsCheckedArr }) => {
  return (
    <div className="modal">
      <div className="modal-title"> Skor: {score}</div>
      <div onClick={() => (window.location = "/")} className="modal-btn">
        Yeniden başla
      </div>
      <div className="modal-resultContainer">
        {questionsCheckedArr.map((r, i) => (
          <div
            key={i}
            className={
              r.trueOrFalse == "true"
                ? "modal-result-true"
                : "modal-result-false"
            }
          >
            {r.questionNo} - {r.trueOrFalse}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
