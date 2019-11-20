import React from "react";
import RegSteps from "./components/RegistrationSteps";
import RegWindow from "./components/RegistrationWindow";
import Title from "./components/Title";

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
  flex-direction: column;
  align-items: center;
  width:100vw;
  height:100vh;
  margin: 0;
  padding: 0;
  background: linear-gradient(233.1deg, #216190 19.65%, #0834d0 81.25%);
    @media (max-width: 860px) {
      height: 120vh;
    }
  }
`;

export const WrapperHTML = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0 0 30px 0;
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <WrapperHTML>
        <Title />
        <RegSteps />
        <RegWindow />
      </WrapperHTML>
    </React.Fragment>
  );
}

export default App;
