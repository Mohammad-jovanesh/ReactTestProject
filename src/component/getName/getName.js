import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./getName.css";
function GetName() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const getValue = (e) => {
    setUserName(e.target.value);
  };
  const SubmitUserName = (e) => {
    e.preventDefault();
    console.log(userName);

    if (userName !== "") {
      // Redirect to the user list page
      e.target.querySelector(".form-g-Name").className = "form-g-Name";
      localStorage.setItem("userName", JSON.stringify(userName));
      navigate(`/usersList`, { state: userName });
    } else {
      e.target.querySelector(".form-g-Name").className =
        "form-g-Name errorName";
    }
  };
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center bg-home">
        <form
          action="./contacts.html"
          className="flex flex-col sm:flex-row sm:space-x-4 sm:items-end w-2/3 sm:w-1/2"
          id="usernameForm"
          onSubmit={SubmitUserName}
        >
          <div className="form-g-Name ">
            <label
              htmlFor="username"
              className=" hidden absolute -top-[80%] text-sm mb-2 pl-2 userlabel text-red-600"
            >
              Please Enter some name
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="py-2 rounded-xl text-xl text-center outline-none"
              onChange={getValue}
            />
          </div>
          <input
            type="submit"
            value="Lets Go"
            className="bg-gray-600 mt-3 px-2 py-2 text-xl font-semibold text-white rounded-lg sm:px-10 sm:mt-0 cursor-pointer"
          ></input>
        </form>
      </div>
    </>
  );
}

export default GetName;
