import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from "./Login";
import "../styles/background.css";

const Layout = () => {
  const location = useLocation();

  const isModalOpen =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {/* Background */}
      <div className={`d-flex flex-column min-vh-100 ${isModalOpen ? "blur" : ""}`}>
        <Header />

        <main className="flex-grow-1 container mt-5 pt-4">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
