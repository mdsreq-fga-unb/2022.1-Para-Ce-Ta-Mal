import React from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { FaCashRegister } from 'react-icons/fa';
import { FaBoxOpen } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { GoGear } from "react-icons/go";
import "./App.css";

function App() {
  return (

    <html>
      <head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width initial-scale=1.0"></meta>
          <title>ElectroPharm</title>
      </head>
       <div class="topnav">
        <a class="active" href="#home">ElectroPharm</a>
      </div>
      <div class="sidebar">
        <ul>
          <li> <a href="#"> <i><FaShoppingCart class="icon-sidebar" /></i></a></li>
          <li> <a href="#"> <i> <FaCashRegister class="icon-sidebar" /></i></a></li>
          <li> <a href="#"> <i> <FaBoxOpen class="icon-sidebar" /></i></a></li>
          <li> <a href="#"> <i> <FaUserTie class="icon-sidebar" /></i></a></li>
          <li> <a href="#"> <i> <FaChartLine class="icon-sidebar" /></i></a></li>
          <li> <a href="#"> <i> <GoGear class="icon-sidebar" /></i></a></li>
        </ul>
      </div>
      <body>
        <div class="electron-back">
          
            <div class="search_box">
              <input type="text" placeholder="Pesquise aqui"></input>
              <i> <FaSearch class="icon-search" /></i>
            
          </div>

        </div>
      </body>
    </html>
  );
}

export default App;
