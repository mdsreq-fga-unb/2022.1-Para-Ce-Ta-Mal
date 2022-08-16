import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <div className="menu">
          <div className="electron-back">
            <div className="box">
              <FaShoppingCart className="icons" />
              <h3> Vender</h3>
            </div>

            <div className="box">
              <FaCashRegister className="icons" />
              <h3> Caixa</h3>
            </div>

            <div className="box" onClick={() => navigate("/estoque")}>
              <FaBoxOpen className="icons" />
              <h3> Estoque</h3>
            </div>

            <div className="box">
              <FaUserTie className="icons" />
              <h3> Gerência</h3>
            </div>

            <div className="box">
              <FaChartLine className="icons" />
              <h3> Financeiro</h3>
            </div>

            <div className="box">
              <GoGear className="icons" />
              <h3> Configurações</h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
