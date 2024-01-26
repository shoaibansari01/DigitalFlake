// SideMenu.js
import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUnorderedList,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { GoTriangleRight } from "react-icons/go";
import "./SideMenu.css";

const SideMenu = () => {
  return (
    <>
    <div className="side-menu">
      <Link to="/" exact activeClassName="active">
        <AiOutlineHome />
        <span className="item-text">Home</span>
        <div className="item">
          <GoTriangleRight />
        </div>
      </Link>
      <Link to="/category" activeClassName="active">
        <AiOutlineUnorderedList />
        <span className="item-text">Category</span>
        <div className="item">
          <GoTriangleRight />
        </div>
      </Link>
      <Link to="/product" activeClassName="active">
        <AiOutlineShoppingCart />
        <span className="item-text">Product</span>
        <div className="item">
          <GoTriangleRight />
        </div>
      </Link>
    </div>
    <Outlet />
    </>
    
  );
};

export default SideMenu;
