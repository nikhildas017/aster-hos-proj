import { useState, useEffect } from "react";
import { getDoctors, bookAppointment } from "../api/book";
import 'bootstrap/dist/css/bootstrap.min.css';

const BookAppointment = ({ loggedInUserId }) => {
  const [doctors, setDoctors] = useState([]);  // list of doctors
  const [name, setName] = useState("");        // patient name
  const [email, setEmail] = useState("");      // patient email
  const [mobile, setMobile] = useState("");    // patient mobile
  const [gender, setGender] = useState("");    // patient gender
  const [district, setDistrict] = useState(""); // patient district
  const [date, setDate] = useState("");        // appointment date
  const [test, setTest] = useState("");        // test name
  const [selectedDoctor, setSelectedDoctor] = useState(""); // doctor ID

    useEffect(() => {
      getDoctors()
        .then((res) => setDoctors(res.data))  // save doctors list in state
        .catch((err) => console.error("Error fetching doctors:", err));
    }, []);

    const handleSubmit = () => {
    // Validate required fields
    if (!name || !email || !mobile || !gender || !district || !date || !test || !selectedDoctor) {
      alert("Please fill all fields");
      return;
    }

    // Prepare data for POST
    const data = {
      name,
      email,
      mobile,
      gender,
      district,
      date,
      test,
      doctor: selectedDoctor,  // doctor ID
      user: loggedInUserId      // user ID from login
    };

    // Send data to backend
    bookAppointment(data)
      .then(() => {
        alert("Appointment booked successfully!");
        // Reset form
        setName(""); setEmail(""); setMobile("");
        setGender(""); setDistrict(""); setDate("");
        setTest(""); setSelectedDoctor("");
      })
      .catch((err) => {
        console.error("Error booking appointment:", err);
        alert("Failed to book appointment");
      });
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h3 className="mb-4 text-center">Book Appointment</h3>

        {/* Patient Name */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Mobile */}
        <div className="mb-3">
          <label className="form-label">Mobile</label>
          <input
            type="text"
            className="form-control"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">--Select Gender--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* District */}
        <div className="mb-3">
          <label className="form-label">District</label>
          <input
            type="text"
            className="form-control"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
        </div>

        {/* Appointment Date */}
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Test */}
        <div className="mb-3">
          <label className="form-label">Test</label>
          <input
            type="text"
            className="form-control"
            value={test}
            onChange={(e) => setTest(e.target.value)}
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
                {doc.doctor_name} ({doc.dept_name.dept_name})
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button className="btn btn-primary" onClick={handleSubmit}>
          Book Appointment
        </button>
      </div>
    </div>
  );
};
export default BookAppointment;