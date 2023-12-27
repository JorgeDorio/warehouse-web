import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "./Pages/Products";
import { Layout } from "./Components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-right" hideProgressBar/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/produtos" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
