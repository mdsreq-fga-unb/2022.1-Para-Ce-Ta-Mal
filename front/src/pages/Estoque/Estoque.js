import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import "./Estoque.css";

function Estoque() {

  const navigate = useNavigate();
  return (
    <>
      <div className="content">
        <main>
          <div className="sidebar">
            <ul>
              <li>
                <a>
                  <FaShoppingCart className="icon-sidebar" />
                </a>
              </li>

              <li>
                <a>
                  <FaCashRegister className="icon-sidebar" />
                </a>
              </li>

              <li>
                <a>
                  <FaBoxOpen className="icon-sidebar" />
                </a>
              </li>

              <li>
                <a>
                  <FaUserTie className="icon-sidebar" />
                </a>
              </li>

              <li>
                <a>
                  <FaChartLine className="icon-sidebar" />
                </a>
              </li>

              <li>
                <a>
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

            <button onClick={()=> navigate('/cadastrar-produto')} className="add-product"> + Adicionar Produto</button>
            
          </div>
        </main>
      </div>
    </>
  );
}

export default Estoque;
