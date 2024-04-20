"use client";
import { useEffect, useState } from "react";
import fetchData from "./Function/fetchdata";
import Pagination from "./component/Pagination";
import Header from "./component/Header";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [data, setData] = useState<any>();
  const [totalPage, setTotalPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(15);
  useEffect(() => {
    fetchData({
      page: currentPage,
      setData: setData,
      setTotalPage: setTotalPage,
      limit: limit,
    });
  }, [currentPage, limit]);
  console.log(totalPage, data, currentPage);
  return (
    <>
      <div className=" py-12 min-h-screen bg-[#FFFFFF] relative drop-shadow-md rounded-xl">
        <Header />
        <section className="">
          <div className=" bg-[#F5F5F5] flex items-center gap-10 w-full py-3 px-28">
            <h1 className=" text-[#8D8D8D] text-base font-sans">Date</h1>

            <h1 className=" text-[#8D8D8D] text-base font-sans">Report Name</h1>
          </div>
          <section className="px-28 flex flex-col gap-2 my-8 ">
            {data?.map((data: any, index: number) => {
              return (
                <>
                  <div className=" flex items-center gap-14">
                    <div>{data?.id}</div>

                    <div>{data?.body}</div>
                  </div>
                </>
              );
            })}
          </section>
        </section>
        <Pagination
          totalPage={totalPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          setLimit={setLimit}
          limit={limit}
        />
      </div>
    </>
  );
}
