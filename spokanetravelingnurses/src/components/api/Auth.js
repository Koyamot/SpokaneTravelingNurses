import axios from "axios";

 const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

   
  return axios.create({
    baseURL: "http://localhost:1337/auth/local",
    headers: {
      Authorization: token,
    },
  });
};
export default axiosWithAuth