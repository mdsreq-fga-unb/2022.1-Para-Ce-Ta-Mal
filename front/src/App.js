import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import "./App.css";

function App() {
  return (
    <html>
      <header>
        <div class="topnav">
          <a class="active" href="#home">
            ElectroPharm
          </a>
        </div>
      </header>
      
      <body>
        <div class="menu">
          <div class="electron-back">
            <div class="box">
              <FaShoppingCart class="icons" />
              <h3> Vender</h3>
            </div>
            <div class="box">
              <FaCashRegister class="icons" />
              <h3> Caixa</h3>
            </div>
            <div to="/estoque" class="box">
              <FaBoxOpen class="icons" />
              <h3> Estoque</h3>
            </div>
            <div class="box">
              <FaUserTie class="icons" />
              <h3> Gerência</h3>
            </div>
            <div class="box">
              <FaChartLine class="icons" />
              <h3> Financeiro</h3>
            </div>
            <div class="box">
              <GoGear class="icons" />
              <h3> Configurações</h3>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default App;
