import React from "react";

import { FaShoppingCart } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { useNavigate } from "react-router-dom";

import "../../App.css";
import "./Menu.css";

function Menu() {
  const navigate = useNavigate();

  return (
    <>
      <div className="menu menu-container">
        <div className="menu-button"></div>
      </div>
    </>
  );
}

export default Menu;
