import axios from "axios";
export const fetchData = async (url) => {
  const response = await axios(url);
  const { data } = response;

  return data;
};
