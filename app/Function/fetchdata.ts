const fetchData = async ({ page }: { page: number }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20`
  );
  const newData = await res.json();
  const totalData = await res.headers.get("x-total-count");
  console.log(newData);
  console.log(totalData);
};
export default fetchData;
