import Home from "./Components/Home";
import Login from "./Components/Login";
import Aster from "./Components/Aster";
import Register from "./Components/Register";
import { Routes, Route } from 'react-router-dom';
import Layout from "./Components/Layout"; // Import the new Layout
import "./styles/background.css";
import { useEffect } from "react";
import BookAppointment from "./Components/BookAppointment";
import Contact from "./Components/Contact";

function App() {
    // useEffect(() => {
    //     fetch("http://localhost:8000/api/hello/")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log("Backend says:", data);
    //         })
    //         .catch(error => {
    //             console.error("Error connecting to backend:", error);
    //         });
    // }, []);

  return (
    <div className="App">
      <Routes>
        {/* Parent Route with Layout */}
        <Route path="/" element={<Layout />}>
          {/* Child Routes */}
          <Route index element={<Aster />} /> {/* Matches "/" */}
          <Route path="login" element={<Login />} />   
          <Route path="register" element={<Register />} />   
          <Route path="home" element={<Home />} /> 
          <Route path="bookappointment" element={<BookAppointment loggedInUserId={1} />} />  
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;