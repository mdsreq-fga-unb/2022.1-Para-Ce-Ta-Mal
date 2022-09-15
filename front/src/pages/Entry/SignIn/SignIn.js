import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../../../contexts/UserContext";
import api from "../../../services/api";
import { ThreeCircles } from "react-loader-spinner";

export default function SignIn({ setPage, toast }) {
  const navigate = useNavigate();

  const { persistUser } = useUser();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [spinner, setSpinner] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSpinner(true);

    if (!formData.email || !formData.password) {
      return toast("Todos os campos devem ser preenchidos!");
    }

    try {
      const res = await api.SignIn(formData);

      persistUser(res.data);
      console.log(res.data);

      navigate("/main");
    } catch (error) {
      setSpinner(false);

      if (error.response.status === 500) {
        toast(
          "Email não verificado, abre seu e-mail e confirme. Também confira o spam!"
        );
      } else {
        toast(error.response.data);
      }
      console.log(error);
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
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
        <button type={"submit"}>
          {spinner ? <ThreeCircles color="white" width={40} /> : "Logar"}
        </button>
      </form>

      <p onClick={() => setPage("sign-up")}>
        Não possui conta? Clique aqui e faça o cadastro!
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
