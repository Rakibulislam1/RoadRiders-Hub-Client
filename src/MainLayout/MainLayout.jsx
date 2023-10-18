import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import Banner from "../Component/Banner/Banner";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
