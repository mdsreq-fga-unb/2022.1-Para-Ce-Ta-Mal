import React, { useState } from "react";
import styled from "styled-components";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <Container>
      <form>
        <input
          type={"email"}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type={"password"}
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button>Logar</button>
      </form>

      <p>Não possui conta? Clique aqui e faça o cadastro!</p>
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
  }

  p {
    cursor: pointer;
    color: white;
    font-family: "Audiowide";
  }
`;
