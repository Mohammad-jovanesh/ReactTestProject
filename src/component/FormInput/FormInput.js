import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
function FormInput({
  Type,
  Label,
  placeHolder,
  styleForm,
  setFirstName,
  Status,
  Value,
}) {
  const handleKeyPress = (e) => {
    let key = e.which || e.keycode;

    if (key >= 48 && key <= 57) {
      return;
    } else {
      e.preventDefault();
    }
  };
  return (
    <>
      <div
        className={`${styleForm} ${Status}
        `}
      >
        <label htmlFor={Label}>{Label}</label>
        {Label === "phone" ? (
          <input
            type={Type}
            placeholder={placeHolder}
            id={Label}
            onChange={(e) => setFirstName(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e)}
            value={Value}
          />
        ) : (
          <input
            type={Type}
            placeholder={placeHolder}
            id={Label}
            onChange={(e) => setFirstName(e.target.value)}
            value={Value}
          />
        )}
        <FontAwesomeIcon icon={faCircleCheck} className="icon_success icon" />
        <FontAwesomeIcon
          icon={faCircleExclamation}
          className="icon_error icon"
        />
        <small>{Status === "error" ? `${Label} connot be empty !` : ""}</small>
      </div>
    </>
  );
}

export default FormInput;
