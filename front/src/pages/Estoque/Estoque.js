import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import "./Estoque.css";

function Estoque() {
  return (
    <>
      <div className="content">
        <div className="topnav">
          <a className="active" href="#home">
            ElectroPharm
          </a>
        </div>
        <main>
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
                <a href="#">
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
          <div className="electron-back">
            <div className="search_box">
              <input type="text" placeholder="Pesquise aqui"></input>
              <FaSearch className="icon-search" />
            </div>

            <button className="add-product"> + Adicionar Produto</button>
            <table>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>  
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </table>

          </div>
        </main>
      </div>
    </>
  );
}

export default Estoque;