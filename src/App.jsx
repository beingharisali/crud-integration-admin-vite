import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/products";
import CreateProduct from "./pages/create-product";
import EditProduct from "./pages/edit-product";
import Register from "./pages/register";
import Login from "./pages/login";
import ForgetPassword from "./pages/forget-password";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/" element={<Products />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
