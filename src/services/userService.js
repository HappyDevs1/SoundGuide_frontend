import axios from "axios";

const API_URL = "http://localhost:5000/user";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = async (userData) => {
  try {
    const response = await apiClient.post("/create", userData);
    return response.data;
  } catch (error) {
    console.log("Error creating user", error);
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await apiClient.post("/login", userData);
    return response.data;
  } catch (error) {
    console.log("Error login in user", error);
  }
};