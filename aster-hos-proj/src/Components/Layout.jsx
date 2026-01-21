import { Outlet, useLocation } from 'react-router-dom';
import GuestHeader from './GuestHeader';
import UserHeader from './UserHeader';
import Footer from './Footer';
import "../styles/background.css";

const Layout = () => {
  const location = useLocation();

  const isModalOpen =
    location.pathname === "/login" ||
    location.pathname === "/register";

  const userPages = ["/home", "/bookappointment"];

  return (
    <>
      <div className={`d-flex flex-column min-vh-100 ${isModalOpen ? "blur" : ""}`}>

        {/* Show UserHeader only on Home page, else GuestHeader */}
        {/* {location.pathname === "/home" ? <UserHeader /> : <GuestHeader />} */}
        
        {userPages.includes(location.pathname) ? <UserHeader /> : <GuestHeader />}

        <main className="flex-grow-1 container mt-5 pt-4">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;