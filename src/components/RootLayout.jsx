import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

const RootLayout = () => {
  return (
    <div className="bg-[#1b1b1b] text-white min-h-screen">

      <Navbar />

      <main>
        <Outlet />
      </main>

    </div>
  );
}

export default RootLayout