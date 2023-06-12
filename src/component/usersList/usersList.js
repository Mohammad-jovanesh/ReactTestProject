import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./userListStyle.css";
import data from "../../UserData.json";
import Card from "../Card/Card.js";
import SearchBar from "../SearchBar/SearchBar.js";
import AddUser from "../AddUser/AddUser.js";
import Pagination from "../pagination/Pagination.js";
function Users() {
  const userName = useLocation();
  const [Users, setUsers] = useState(() => {
    const GetUser = JSON.parse(localStorage.getItem("Users"));
    return GetUser ? GetUser : data;
  });
  const [paginationList, setPaginationList] = useState([]);
  const [filteredUser, setFilteredUser] = useState(Users);
  const [userPerPage, setUserPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const lastOne = currentPage * userPerPage;
  const firstOne = lastOne - userPerPage;

  useEffect(() => {
    localStorage.setItem("Users", JSON.stringify(Users));
    setFilteredUser(Users.slice(firstOne, lastOne));
    setPaginationList(Users.length);
  }, [Users, currentPage]);
  useEffect(() => {
    setPaginationList(Users.length);
  }, []);
  function deleteItem(e) {
    let FindedID = e.target.closest(".cardItem").id;
    let deletedList = Users.filter((item) => item.id != FindedID);
    setUsers(deletedList);
    setFilteredUser(deletedList);
  }

  const searchList = (text) => {
    let Searched_list = Users.filter((item) => {
      let theName = (item.first_name + item.last_name)
        .replace(/\s/g, "")
        .toUpperCase();
      return theName.includes(text);
    });

    setFilteredUser(Searched_list.slice(firstOne, lastOne));
    setPaginationList(Searched_list.length);
  };

  return (
    <>
      <div className="w-full min-h-screen bg-home pb-20">
        <div className="max-w-6xl mx-auto   pt-5 px-10">
          <header>
            <h2 id="header_name">{userName.state}</h2>
            <SearchBar list={Users} showSearched_list={searchList} />
          </header>

          <div id="ContainerCard">
            {filteredUser.map((elm, index) => (
              <Card
                id={elm.id}
                firstName={elm.first_name}
                lastName={elm.last_name}
                phone={elm.phone}
                image={elm.image}
                deleteItem={deleteItem}
                key={index}
              />
            ))}
          </div>
        </div>
        <AddUser userList={setUsers} />
        <Pagination
          userPerPage={userPerPage}
          TottalUsers={paginationList}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}

export default Users;
