import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/products";
import CreateProduct from "./pages/create-product";
import EditProduct from "./pages/edit-product";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Products />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
