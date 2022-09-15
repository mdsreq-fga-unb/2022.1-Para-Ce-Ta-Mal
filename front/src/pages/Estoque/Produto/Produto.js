import React from "react";
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { useUser } from "../../../contexts/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Produto(product) {
  console.log(product);
  const navigate = useNavigate();
  const {
    user: { token },
  } = useUser();

  async function handleDeleteDrug() {
    try {
      await api.deleteDrug(product.id, token);

      product.setUpdate(!product.update);

      toast("Produto deletado com sucesso!");
    } catch (error) {
      console.log(error);
      toast("Não foi possível deletar o produto.");
    }
  }

  return (
    <>
      <ToastContainer />

      <Container>
        <p>{product.name}</p>

        <div style={{ display: "flex", gap: 15 }}>
          <FaEdit
            style={{ cursor: "pointer" }}
            color="white"
            size={20}
            onClick={() => navigate(`/produto/${product.id}`)}
          />

          <FaTrash
            style={{ cursor: "pointer" }}
            color="white"
            size={20}
            onClick={handleDeleteDrug}
          />
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6vh;
  background-color: black;
  border-radius: 7px;
  padding: 0 20px;

  p {
    color: white;
    font-size: 130%;
  }
`;
