import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../App.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { BiExit } from "react-icons/bi";
import { useUser } from "../../contexts/UserContext";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const { persistUser } = useUser();

  function handleExitButton() {
    persistUser(null);
    navigate("/");
  }

  return (
    <Container>
      {location.pathname !== "/" && (
        <header>
          <div className="topnav">
            <a onClick={() => navigate("/main")} className="active">
              ElectroPharm
            </a>

            <BiExit
              style={{ cursor: "pointer", marginRight: 20 }}
              color="white"
              size={25}
              onClick={handleExitButton}
            />
          </div>
        </header>
      )}

      {location.pathname !== "/" && location.pathname !== "/main" && (
        <div className="sidebar">
          <ul>
            <li className="icon-box">
              <a href="#">
                <FaShoppingCart className="icon-sidebar" />
              </a>
            </li>
            <li className="icon-box">
              <a href="#">
                <FaCashRegister className="icon-sidebar" />
              </a>
            </li>
            <li className="icon-box">
              <a onClick={() => navigate("/estoque")}>
                <FaBoxOpen className="icon-sidebar" />
              </a>
            </li>
            <li className="icon-box">
              <a href="#">
                <FaUserTie className="icon-sidebar" />
              </a>
            </li>
            <li className="icon-box">
              <a href="#">
                <FaChartLine className="icon-sidebar" />
              </a>
            </li>
            <li className="icon-box">
              <a href="#">
                <GoGear className="icon-sidebar" />
              </a>
            </li>
          </ul>
        </div>
      )}

      {children}
    </Container>
  );
}

const Container = styled.div`
  li:hover {
  }
`;
