import axios from "axios";

const api = axios.create({
  baseURL: "https://mission-os-8ksa.onrender.com",
});

export default api;