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
      <div className="menu-container">
          <div className="menu-button">
            <FaShoppingCart className="menu-icon"/>
            <p>Vendas</p>
          </div>
          <div className="menu-button">
            <FaCashRegister className="menu-icon"/>
            <p>Caixa</p>
          </div>          <div className="menu-button">
            <FaBoxOpen className="menu-icon"/>
            <p>Estoque</p>
          </div>          <div className="menu-button">
            <FaChartLine className="menu-icon"/>
            <p>Financeiro</p>
          </div>          <div className="menu-button">
            <FaUserTie className="menu-icon"/>
            <p>Gerência</p>
          </div>          <div className="menu-button">
            <GoGear className="menu-icon"/>
            <p>Configurações</p>
          </div>
      </div>
    </>
  );
}

export default Menu;
