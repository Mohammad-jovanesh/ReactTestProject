import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faTrash } from "@fortawesome/free-solid-svg-icons";
function Card(props) {
  let { id, firstName, lastName, phone, image, deleteItem } = props;
  return (
    <div>
      <div
        className="cardItem w-full  p-2 bg-white relative flex flex-row  items-center justify-between md:flex-col md:text-center rounded-lg mt-4 shadow-md border-gray-500 shadow-gray-300"
        id={id}
      >
        <img
          src={image}
          alt="some image not founded"
          className="w-12 h-12 md:w-24 md:h-24 object-cover rounded-full md:absolute md:-top-[30%] md:left-1/2 md:-translate-x-1/2 object-center border-gray-300 border-2"
        />

        <div className="flex flex-col space-y-1 md:mt-16">
          <h2 className="text-xl md:mb-4" id="userName">
            {firstName} {lastName}
          </h2>

          <p className="text-sm ">
            <FontAwesomeIcon icon={faPhone} />
            <span className="ml-3">{phone}</span>
          </p>
        </div>

        <a className=" remove_btn cursor-pointer md:mt-5 md:mb-2  pr-5 md:pr-0 ">
          <FontAwesomeIcon
            icon={faTrash}
            className="fa-solid fa-trash text-red-600"
            onClick={deleteItem}
          />
        </a>
      </div>
    </div>
  );
}

export default Card;
