import React from "react";

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
      <section className=" flex items-center gap-4 justify-center">
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
              className={`border-[#EAEAEA] border py-1.5 px-3 rounded-lg ${
                currentPage === index + 1 ? "bg-[#F35217] text-white" : ""
              }`}
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
          <select
            id=""
            className=" border w-20 px-3 py-1.5 rounded-lg appearance-none text-sm"
            onChange={(e) => setLimit(parseInt(e.currentTarget.value, 10))}
          >
            {[15, 20, 25, 30].map((value, index) => {
              if (value === limit) {
                return (
                  <option key={index} selected value={value}>
                    {value}
                  </option>
                );
              } else {
                return (
                  <option key={index} value={value}>
                    {value}
                  </option>
                );
              }
            })}
          </select>
        </div>
      </section>
    </>
  );
}

export default Pagination;
