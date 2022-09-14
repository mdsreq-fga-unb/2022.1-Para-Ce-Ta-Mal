import React, { useState } from "react";
import styled from "styled-components";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Entry() {
  const [page, setPage] = useState("sign-in");

  return (
    <Container>
      <ToastContainer />

      <Logo>ELECTROPHARM</Logo>

      {page === "sign-in" ? (
        <SignIn setPage={setPage} toast={toast} />
      ) : (
        <SignUp setPage={setPage} toast={toast} />
      )}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;
  background-color: black;

  color: white;
  font-size: 5vw;
  font-family: "Audiowide";
`;
