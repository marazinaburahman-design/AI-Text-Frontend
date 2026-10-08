import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function transformText(payload) {
  const response = await api.post("/transform", payload);
  return response.data;
}
