import React from "react";
import RegSteps from "./components/RegistrationSteps";
import RegWindow from "./components/RegistrationWindow";
import Title from "./components/Title";

import { WrapperHTML } from "./components/styles";

function App() {
  return (
    <WrapperHTML>
      <Title />
      <RegSteps />
      <RegWindow />
    </WrapperHTML>
  );
}

export default App;
