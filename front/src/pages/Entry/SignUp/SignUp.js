import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../../../services/api";

export default function SignUp({ setPage, toast }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return toast("Todos os campos devem ser preenchidos!");
    }

    if (formData.password !== formData.confirmPassword)
      return toast("As senhas precisam ser iguais!");

    delete formData.confirmPassword;
    try {
      console.log(formData);
      const res = await api.SignUp(formData);

      toast(res.data);

      setPage("sign-in");
    } catch (error) {
      toast(error.response.data);
      console.log(error);
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.name}
          placeholder="Nome Completo"
          type={"name"}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <input
          value={formData.email}
          placeholder="E-mail"
          type={"email"}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <input
          value={formData.password}
          placeholder="Senha"
          type={"password"}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <input
          value={formData.confirmPassword}
          placeholder="Confirmar Senha"
          type={"password"}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />

        <button type={"submit"}>Cadastrar</button>
      </form>

      <p onClick={() => setPage("sign-in")}>
        Já possui uma conta? Clique aqui e faça login!
      </p>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40%;
  gap: 30px;

  form {
    display: flex;
    flex-direction: column;
    width: 90%;

    gap: 15px;
  }

  input {
    all: unset;
    height: 60px;
    border-radius: 8px;
    background-color: white;
    padding: 10px;

    font-size: 20px;
  }

  input::placeholder {
    color: black;
  }

  button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    border-radius: 8px;
    background-color: #1479c3;

    font-size: 25px;
    color: white;
    font-family: "Audiowide";

    cursor: pointer;

    &:hover {
      background-color: #1479c3cc;
    }
  }

  p {
    cursor: pointer;
    color: white;
    font-family: "Audiowide";

    &:hover {
      text-decoration: underline;
    }
  }
`;
