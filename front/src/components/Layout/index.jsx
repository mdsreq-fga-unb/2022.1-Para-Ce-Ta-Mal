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

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      {location.pathname !== "/" && (
        <header>
          <div className="topnav">
            <a onClick={() => navigate("/main")} className="active">
              ElectroPharm
            </a>
          </div>
        </header>
      )}

      {location.pathname !== "/" && location.pathname !== "/main" && (
        <div className="sidebar">
          <ul>
            <li>
              <a href="#">
                <FaShoppingCart className="icon-sidebar" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaCashRegister className="icon-sidebar" />
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/estoque")}>
                <FaBoxOpen className="icon-sidebar" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaUserTie className="icon-sidebar" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaChartLine className="icon-sidebar" />
              </a>
            </li>
            <li>
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
