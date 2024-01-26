import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import Secret from "./pages/Secret";
import Category from "./pages/Category";
import Product from "./pages/Product";
import CategoryTable from "./pages/CategoryTable";
import Home from './pages/Home';
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Layout from './pages/Layout';
// import SideMenu from "./pages/SideMenu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/CategoryTable" element={<CategoryTable />} />
          {/* <Route path='/Home' exact element={<Home />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
