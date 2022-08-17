import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Menu from './pages/Menu/Menu';
import Vendas from "./pages/Vendas/Vendas";
import Estoque from './pages/Estoque/Estoque';

import "./App.css";

const App = () => {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" exact element={ Menu } />
          <Route path="/vendas"  element={ Vendas } />
          <Route path="/estoque" element={ Estoque } />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
