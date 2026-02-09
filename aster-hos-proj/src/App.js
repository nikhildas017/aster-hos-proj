import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Routes, Route } from 'react-router-dom';
import Layout from "./Components/Layout"; // Import the new Layout
import "./styles/background.css";
import BookAppointment from "./Components/BookAppointment";
import Contact from "./Components/Contact";
import Doctors from "./Components/Doctors";

function App() {
  return (
    <div className="App">  
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />   {/* "/" now loads Home */}
          <Route path="doctors" element={<Doctors />} />
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