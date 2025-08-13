import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-6 py-10">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}
