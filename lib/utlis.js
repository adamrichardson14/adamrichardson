import axios from "axios";

export const fetchData = async (url) => {
  try {
    const response = await axios(url);
    const { data } = response;

    return data;
  } catch (err) {
    console.log(err);
  }
};
