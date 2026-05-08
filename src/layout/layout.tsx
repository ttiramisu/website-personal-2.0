import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
