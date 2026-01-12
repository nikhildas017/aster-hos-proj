// src/components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 container mt-5 pt-4">
        {/* This is where your routed pages (Home, About, etc.) will load */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;