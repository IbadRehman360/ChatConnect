import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function Layout() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
