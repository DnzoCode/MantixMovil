import axios from "axios";

const server = axios.create({
  baseURL: process.env.API_URL,
  headers: { "Content-Type": "application/json" },
});

export default server;
