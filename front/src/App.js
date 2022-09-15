import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { useUser } from "./contexts/UserContext";
import api from "./services/api";
import { ThreeCircles } from "react-loader-spinner";

function App() {
  const [showPage, setShowPage] = useState(false);

  const navigate = useNavigate();
  const {
    user: { token },
  } = useUser();

  async function fetchData() {
    try {
      await api.checkToken(token);

      setShowPage(true);
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  }

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, []);

  if (!showPage) {
    return (
      <div
        style={{
          display: "flex",
          height: 1000,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ThreeCircles width={100} height={100} color="white" />
      </div>
    );
  }

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
