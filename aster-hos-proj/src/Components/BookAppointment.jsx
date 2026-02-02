import { useState, useEffect } from "react";
import { getDoctors, bookAppointment } from "../api/book";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/background.css";

const BookAppointment = ({ loggedInUserId }) => {
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState("");
  const [test, setTest] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [notes, setNotes] = useState(""); // optional but useful

  useEffect(() => {
    getDoctors()
      .then((res) => setDoctors(res.data))
      .catch((err) => console.error("Error fetching doctors:", err));
  }, []);

  const handleSubmit = () => {
    if (!date || !test || !selectedDoctor) {
      alert("Please fill all required fields");
      return;
    }

    const data = {
      date,
      test,
      doctor: selectedDoctor,
      notes,
      user: loggedInUserId, // backend links appointment to logged-in user
    };

    bookAppointment(data)
      .then(() => {
        alert("Appointment booked successfully!");
        setDate("");
        setTest("");
        setSelectedDoctor("");
        setNotes("");
      })
      .catch((err) => {
        console.error("Error booking appointment:", err);
        alert("Failed to book appointment");
      });
  };

  return (
    <div className="book-bg d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="mb-4 text-center">Book Appointment</h3>

        {/* Appointment Date */}
        <div className="mb-3">
          <label className="form-label">Appointment Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Test */}
        <div className="mb-3">
          <label className="form-label">Test / Reason for Visit</label>
          <input
            type="text"
            className="form-control"
            value={test}
            onChange={(e) => setTest(e.target.value)}
            placeholder="e.g. Blood Test, Fever, Consultation"
          />
        </div>

        {/* Doctor Dropdown */}
        <div className="mb-3">
          <label className="form-label">Select Doctor</label>
          <select
            className="form-select"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">--Choose Doctor--</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.doctor_name} ({doc.dept_name})
              </option>
            ))}
          </select>
        </div>

        {/* Optional Notes */}
        <div className="mb-3">
          <label className="form-label">Additional Notes (optional)</label>
          <textarea
            className="form-control"
            rows="3"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any symptoms or additional information"
          />
        </div>

        {/* Submit Button */}
        <button className="btn btn-primary w-100" onClick={handleSubmit}>
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default BookAppointment;