import { useEffect, useState } from "react";
import DoctorSelect from "./DoctorSelect";
import AppointmentForm from "./AppointmentForm";
import { getDoctors, bookAppointment } from "../api/book";

const BookAppointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  useEffect(() => {
    getDoctors().then((res) => {
      setDoctors(res.data);
    });
  }, []);
  const handleSubmit = () => {
    const data = {
      doctor: selectedDoctor,
      date: date,
      time: time,
      reason: reason,
    };
    bookAppointment(data)
      .then(() => {
        alert("Appointment Booked Successfully!");
      })
      .catch(() => {
        alert("Error booking appointment");
      });
  };
  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h3 className="mb-4 text-center">Book Appointment</h3>
        <DoctorSelect
          doctors={doctors}
          selectedDoctor={selectedDoctor}
          setSelectedDoctor={setSelectedDoctor}
        />
        <AppointmentForm
          date={date}
          time={time}
          reason={reason}
          setDate={setDate}
          setTime={setTime}
          setReason={setReason}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};
export default BookAppointment;