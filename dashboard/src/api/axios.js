import axios from "axios";

const api = axios.create({
  baseURL: "https://profitpulse-0wgc.onrender.com/",
  withCredentials: true
});

export default api;
