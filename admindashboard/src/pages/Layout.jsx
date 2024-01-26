import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Secret from "./Secret";
import {
    AiOutlineHome,
    AiOutlineUnorderedList,
    AiOutlineShoppingCart,
  } from "react-icons/ai";
  import { GoTriangleRight } from "react-icons/go";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Secret />
      <div className="container-1">
        <div className="side-menu">
          <nav>
            <ul>
              <li>
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                <AiOutlineHome />
                 <span className="item-text"> Home </span>
                 <div className="item">
                <GoTriangleRight />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Category" className={location.pathname === "/Category" ? "active" : ""}>
                <AiOutlineUnorderedList />
                 <span className="item-text"> Category </span>
                 <div className="item">
                <GoTriangleRight />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Product" className={location.pathname === "/Product" ? "active" : ""}>
                <AiOutlineShoppingCart />
                 <span className="item-text"> Product </span>
                 <div className="item">
                <GoTriangleRight />
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
