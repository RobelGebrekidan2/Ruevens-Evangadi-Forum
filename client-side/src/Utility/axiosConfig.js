import axios from "axios";

const axiosBase = axios.create({
  // LocalHost Base url
  // baseURL:"http://localhost:5500/api"

  // Remote server on Render.com
    baseURL: "https://ruevens-evangadi-forum-1.onrender.com/api",
});

export default axiosBase;
