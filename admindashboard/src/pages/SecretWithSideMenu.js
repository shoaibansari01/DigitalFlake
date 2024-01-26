import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Secret from './Secret';
import SideMenu from './SideMenu';
import Category from './Category';
import Product from './Product';
import CategoryList from './CategoryTable';
import Home from './Home';

const SecretWithSideMenu = () => (
  <div className="app-container">
    <Secret />
    <SideMenu />
    <div className="content-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/category-list" element={<CategoryList />} />
        <Route index element={<Navigate to="/home" />} />
      </Routes>
    </div>
  </div>
);

export default SecretWithSideMenu;