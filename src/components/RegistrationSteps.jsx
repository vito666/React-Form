import React from "react";
import styled from "styled-components";

export const RegStepsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 700px;
  @media (max-width: 623px) {
    width: 310px;
  }
`;
export const RegCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #1e34a5;
  margin: 0 10px 0 10px;
`;

export const RegCircleNumber = styled.p`
  font-family: "Open Sans";
  font-size: 20px;
  color: #fff;
`;

export const RegCircleSelected = styled(RegCircle)`
  background: #da3f5b;
`;

export const CustomHRtag = styled.div`
  width: 30%;
  border: 1px grey solid;
  @media (max-width: 623px) {
    width: 20%;
  }
`;

// i should use map here

const RegSteps = () => {
  return (
    <RegStepsContainer>
      <RegCircle>
        <RegCircleNumber>1</RegCircleNumber>
      </RegCircle>
      <CustomHRtag />
      <RegCircle>
        <RegCircleNumber>2</RegCircleNumber>
      </RegCircle>
      <CustomHRtag />
      <RegCircleSelected>
        <RegCircleNumber>3</RegCircleNumber>
      </RegCircleSelected>
    </RegStepsContainer>
  );
};
export default RegSteps;
