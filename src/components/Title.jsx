import React from "react";

import styled from "styled-components";

export const MainTitle = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 64px;
  color: #fff;
  margin: 0 0 20px 0;
  padding: 30px 0 0 0;

  @media (max-width: 623px) {
    font-size: 30px;
    margin-top: 20px;
  }
`;

function Title() {
  return <MainTitle>Your first project</MainTitle>;
}
export default Title;
