import { Outlet, useLocation } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import "../styles/background.css";

const Layout = () => {
  const location = useLocation();

  // Blur background when login/register modal pages are open
  const isModalOpen =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <div className={`d-flex flex-column min-vh-100 ${isModalOpen ? "blur" : ""}`}>
      
      {/* Single Header – handles guest / user logic internally */}
      <Header />

      {/* Main content */}
      <main className="flex-grow-1 container mt-5 pt-4">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};
export default Layout;