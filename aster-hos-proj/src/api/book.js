import axios from "axios";

// Create Axios instance with backend URL
const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

// Get all doctors
export const getDoctors = () => API.get("doctors/");

// Book an appointment
export const bookAppointment = (data) => API.post("book/", data);