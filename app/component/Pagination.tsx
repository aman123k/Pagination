import React from "react";
import { FaCaretDown } from "react-icons/fa";

function Pagination({
  totalPage,
  setCurrentPage,
  currentPage,
  setLimit,
  limit,
}: {
  totalPage: number;
  setCurrentPage: (arg: number) => void;
  currentPage: number;
  setLimit: (agr: number) => void;
  limit: number;
}) {
  let pageArray = [];
  for (let i = 0; i < totalPage; i++) {
    pageArray.push(i + 1);
  }

  return (
    <>
      <section
        className=" flex items-center absolute bottom-16 ml-[50%]
      translate-x-[-50%] gap-4 px-4 "
      >
        <button
          disabled={currentPage === 1}
          className={` text-sm ${
            currentPage === 1 ? "text-[#919191]" : ""
          } font-sans`}
          onClick={(e) => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        {pageArray.map((page, index) => {
          return (
            <button
              className={`border-[#EAEAEA] border py-1.5 max-[650px]:text-sm px-3 rounded-lg ${
                currentPage === index + 1
                  ? "bg-[#F35217] text-white"
                  : "text-[#919191]"
              } drop-shadow-sm`}
              onClick={() => setCurrentPage(index + 1)}
              key={index}
            >
              {page}
            </button>
          );
        })}
        <button
          disabled={currentPage === totalPage}
          className={` text-sm ${
            currentPage === totalPage ? "text-[#919191]" : ""
          } font-sans`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Next
        </button>

        <div className=" flex items-center gap-4">
          <span className=" text-sm text-[#919191] font-sans">
            Rows per page
          </span>
          <div
            className=" border relative flex items-center rounded-lg
          "
          >
            <select
              id=""
              className=" w-20 cursor-pointer px-3 py-1.5 rounded-lg outline-none appearance-none text-sm"
              onChange={(e) => setLimit(parseInt(e.currentTarget.value, 10))}
            >
              {[, 15, 20, 25, 30].map((value, index) => {
                return (
                  <option key={index} selected={value === limit} value={value}>
                    {value}
                  </option>
                );
              })}
            </select>
            <FaCaretDown className=" mx-2 absolute right-0" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Pagination;
