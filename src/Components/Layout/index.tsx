import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";

export const Layout = () => {
  return (
    <div className="flex">
      <Header />
      <Sidebar />
      <div className="fixed top-16 left-52 right-2">
        <Outlet />
      </div>
    </div>
  );
};
