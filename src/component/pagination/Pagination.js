import React from "react";
import "./PaginationStyle.css";
function Pagination({ userPerPage, TottalUsers, setCurrentPage }) {
  const PageNumbers = [];
  for (let i = 1; i <= Math.ceil(TottalUsers / userPerPage); i++) {
    PageNumbers.push(i);
  }
  return (
    <>
      <ul className="List_Pagination">
        {PageNumbers.map((number, index) => {
          return (
            <li className="pageItem" key={index}>
              <button
                className="PageLink"
                onClick={(e) => {
                  setCurrentPage(number);
                }}
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Pagination;
