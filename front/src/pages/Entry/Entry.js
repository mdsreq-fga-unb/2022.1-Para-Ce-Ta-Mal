import React, { useState } from "react";
import styled from "styled-components";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

export default function Entry() {
  const [page, setPage] = useState("sign-in");

  return (
    <Container>
      <Logo>ELECTROPHARM</Logo>

      {page === "sign-in" ? <SignIn /> : <SignUp />}
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
