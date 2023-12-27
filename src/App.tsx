import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "./Pages/Products";
import { Layout } from "./Components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suppliers } from "./Pages/Suppliers";

export const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-right" hideProgressBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/produtos" element={<Products />} />
          <Route path="/fornecedores" element={<Suppliers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
