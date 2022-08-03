import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "../src/pages/user/user";
import UserList from "../src/pages/userList/UserList";
import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import NewUser from "./pages/newPage/NewUser";
import NewProduct from "./pages/newProduct/NewProduct";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";

export default function App() {
  return (
    <BrowserRouter>
      <Topbar />

      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users/*" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="newUser/*" element={<NewUser />} />

          <Route path="products/*" element={<ProductList />} />
          <Route path="/product/:productsId" element={<Product />} />
          <Route path="newProduct/*" element={<NewProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
