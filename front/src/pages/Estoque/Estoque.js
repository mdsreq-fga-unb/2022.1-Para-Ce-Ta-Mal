import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import api from "../../services/api";
import "./Estoque.css";
import Produto from "./Produto/Produto";
import { ThreeCircles } from "react-loader-spinner";

export default function Estoque() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [update, setUpdate] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const {
    user: { token },
  } = useUser();

  async function fetchData() {
    try {
      const { data } = await api.getAllDrugs(token);

      setProducts(data);
      setShowPage(true);
    } catch (error) {
      navigate("/");
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [update]);

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
      <div className="content">
        <main>
          <div className="electron-back">
            <div className="search_box">
              <input type="text" placeholder="Pesquise aqui"></input>
              <FaSearch className="icon-search" />
            </div>

            <button
              onClick={() => navigate("/cadastrar-produto")}
              className="add-product"
            >
              + Adicionar Produto
            </button>
          </div>

          <ProductsContainer>
            {products.map((product, i) => (
              <Produto
                key={i}
                {...product}
                update={update}
                setUpdate={setUpdate}
              />
            ))}
          </ProductsContainer>
        </main>
      </div>
    </>
  );
}

const ProductsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`;
