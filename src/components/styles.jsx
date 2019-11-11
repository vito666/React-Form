import styled from "styled-components";

export const WrapperHTML = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 200vh;
  margin: 0;
  padding: 0;
  background: linear-gradient(233.1deg, #216190 19.65%, #0834d0 81.25%);
`;

export const MainTitle = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 64px;
  color: #fff;
  margin: 0 0 20px 0;
  padding: 0;

  @media (max-width: 623px) {
    font-size: 30px;
    margin-top: 20px;
  }
`;
