import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

 const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    baseURL: `${backendUrl}`,
    headers: {
      Authorization: token,
    },
  });
};
export default axiosWithAuth