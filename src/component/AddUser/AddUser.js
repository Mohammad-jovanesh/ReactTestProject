import React, { useState, useRef } from "react";
import "./AddUser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import FormInput from "../FormInput/FormInput.js";

function AddUser({ userList, filterList }) {
  const [open, setOpen] = useState(false);
  const [f_name, setF_Name] = useState("");
  const [last_name, set_lastName] = useState("");
  const [status, SetStatus] = useState("");
  const [Phone, setPhone] = useState("");
  const [ImageUrl, setImageUrl] = useState(null);
  const ImageFileRef = useRef(null);
  const getImage = (e) => {
    console.log("image");
    const myImage = e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
      //   const imgElm = document.createElement("img");
      //   imgElm.className = "rounded-full w-16 h-16";
      //   imgElm.src = ImageUrl;
      //   btn_image.appendChild(imgElm);
    };
    reader.readAsDataURL(myImage);
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (
      f_name !== "" &&
      last_name !== "" &&
      Phone !== "" &&
      ImageUrl !== null
    ) {
      let newUser = {
        id: Date.now(),
        first_name: f_name,
        last_name: last_name,
        phone: Phone,
        image: ImageUrl,
      };
      userList((prevState) => [newUser, ...prevState]);
      setOpen(false);
      setF_Name("");
      set_lastName("");
      setPhone("");
      setImageUrl("");
    }
  };

  return (
    <div className={`${open ? "Active" : ""}`} id="UserAdd_Container">
      {/* this is inside UserAdd Container for make rigth btn and make animationm */}
      <div className="w-full h-full bg-gray-400 relative">
        {/* this is one the btn with icon */}
        <div
          className="absolute top-4 left-full  p-2 bg-blue-100 rounded-e-lg cursor-pointer"
          id="OpenBtn"
          onClick={() => setOpen((prevState) => !prevState)}
        >
          <FontAwesomeIcon icon={faUserPlus} />
        </div>
        {/* btn animation end  */}
        {/* ==================================================  */}
        {/* Content and
        hearder of the userAdd section start  */}
        <p className="text-center pt-10 capitalize">add new user</p>
        <div className="form-conatiner  p-2">
          <form
            action="#"
            id="form-addUser"
            className=""
            onSubmit={(e) => SubmitHandler(e)}
          >
            {/*input File image*/}

            <div className="flex flex-col justify-center items-center">
              <label htmlFor="imagefile" className="mb-4 mt-4">
                image
              </label>
              <input
                type="file"
                accept="image/*"
                hidden
                id="imagefile"
                onChange={(e) => getImage(e)}
                ref={ImageFileRef}
              />

              <button
                className="image_upload"
                id="btn_image"
                onClick={() => ImageFileRef.current.click()}
              >
                {ImageUrl ? (
                  <img
                    src={ImageUrl}
                    alt="Some image is not Founded"
                    className="rounded-full w-16 h-16"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faPlus}
                    className=" text-gray-500"
                    id="icon_add_image"
                  />
                )}
              </button>
              <small className="imageErr"></small>
            </div>
            {/* Input text for the firstName*/}
            <FormInput
              Type="text"
              Label="FirstName"
              placeHolder="Mohammad"
              styleForm="form-group"
              setFirstName={setF_Name}
              Status={f_name == "" ? "error" : "success"}
              Value={f_name}
            />

            {/* --input for the lastName-- */}
            <FormInput
              Type="text"
              Label="LastName"
              placeHolder="piramun"
              styleForm="form-group"
              setFirstName={set_lastName}
              Status={last_name == "" ? "error" : "success"}
              Value={last_name}
            />

            {/* --phone number input-- */}
            <FormInput
              Type="text"
              Label="phone"
              placeHolder="+123456789"
              styleForm="form-group"
              setFirstName={setPhone}
              Status={Phone == "" ? "error" : "success"}
              Value={Phone}
            />

            <button
              id="submit"
              className="bg-blue-600 w-full py-4   cursor-pointer text-white text-xl font-sans uppercase font-bold rounded-md"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
