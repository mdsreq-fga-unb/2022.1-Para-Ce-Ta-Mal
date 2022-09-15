import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Estoque from "./pages/Estoque/Estoque.js";
import CadastrarProduto from "./pages/Estoque/CadastrarProduto/CadastrarProduto.js";
import EditarProduto from "./pages/Estoque/EditarProduto/EditarProduto.js";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Entry from "./pages/Entry/Entry";
import UserProvider from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Entry />} />

            <Route path="/main" element={<App />} />

            <Route path="/estoque" element={<Estoque />} />

            <Route path="/cadastrar-produto" element={<CadastrarProduto />} />

            <Route path="/produto/:id" element={<EditarProduto />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
