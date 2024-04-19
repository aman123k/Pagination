const fetchData = async ({
  page,
  setData,
  setTotalPage,
  limit,
}: {
  page: number;
  setData: (arg: any) => void;
  setTotalPage: (arg: number) => void;
  limit: number;
}) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );
  const newData = await res.json();
  console.log(page);
  const totalData = await res.headers.get("x-total-count");
  const totalPage = Math.ceil((totalData ? parseInt(totalData) : 0) / limit);
  setData(newData);
  setTotalPage(totalPage);
};
export default fetchData;
