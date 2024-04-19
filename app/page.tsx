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
      <div>
        <Header />
        {data?.map((data: any, index: number) => {
          return <div key={index}>{data?.id}</div>;
        })}
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
