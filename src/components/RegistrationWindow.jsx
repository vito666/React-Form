import React, { useState, useEffect } from "react";
import DragDrop from "./DragDrop";
import styled from "styled-components";
import { checkValue } from "../utils/validationType";

export const MainWindow = styled.div`
  display: flex;
  width: 608px;
  background: #fff;
  border-radius: 8px;
  justify-content: center;
  @media (max-width: 623px) {
    width: 100%;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  margin: 0;
  padding: 0;
  font-family: "Open Sans";
`;

export const CompanyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 623px) {
    justify-content: space-around;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PTag = styled.p`
  font-family: "Open Sans";
  font-size: 14px;
  line-height: 100%;
  color: #636363;
  @media (max-width: 400px) {
    text-align: center;
  }
`;

export const CompanyInputTag = styled.input`
  background: #f9f9f9;
  border-radius: 8px;
  border: none;
  width: 280px;
  height: 48px;
  font-size: 20px;
  padding: 0 10px;
  outline-width: 0;
  @media (max-width: 623px) {
    width: 160px;
  }
  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const CompanyPWrong = styled.p`
  display: none;
  font-size: 20px;
  color: red;
`;

export const NumberInputTag = styled(CompanyInputTag)`
  width: 178px;
  height: 48px;
  ${({ error }) => error && `background: red`}
`;

export const BussinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  @media (max-width: 623px) {
    align-items: center;
  }
`;

export const BussinessInputTag = styled(CompanyInputTag)`
  width: 496px;
  height: 48px;
  @media (max-width: 623px) {
    width: 80%;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  @media (max-width: 623px) {
    align-items: center;
  }
`;

export const DescriptionTextarea = styled.textarea`
  width: 496px;
  height: 168px;
  background: #f9f9f9;
  border-radius: 8px;
  border: none;
  font-size: 20px;
  padding: 16px 12px;
  resize: none;
  outline-width: 0;
  @media (max-width: 623px) {
    align-items: center;
    width: 80%;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  margin-bottom: 20px;
  @media (max-width: 400px) {
    justify-content: center;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 56px;
  background: #da3f5b;
  border-radius: 8px;
  margin-top: 58px;
  user-select: none;
  cursor: pointer;
`;

export const ButtonText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
`;

function RegWindow() {
  const [error, setError] = useState();
  const [descValue, setDescValue] = useState("");
  const [bussnAreaVal, setBussnAreaVal] = useState("");
  const [countVal, setCountVal] = useState("");
  const [counter, setCount] = useState(0);
  const [companyName, setCompanyName] = useState("");

  useEffect(() => {
    console.log(error);
  }, [error]);

  const fileLoadHandler = props => {
    setCount(props);
  };

  const onSubmit = () => {
    if (descValue && countVal && bussnAreaVal && companyName)
      return console.log(
        `Company name - ${companyName},\n Bussiness Area - ${bussnAreaVal},\n Description - ${descValue},\n Uploaded files - ${counter}`
      );
    return console.log("error");
  };

  const onChange = e => {
    setCountVal(e.target.value);
    const isError = checkValue(e.target.value);
    return setError(!isError);
  };

  return (
    <MainWindow>
      <MainWrapper>
        <Form onSubmit={onSubmit}>
          <CompanyContainer>
            <Wrapper>
              <PTag>Your company name</PTag>
              <CompanyInputTag
                onChange={e => setCompanyName(e.target.value)}
                name="company"
                placeholder=" Type Text"
              />
              <CompanyPWrong>Put info</CompanyPWrong>
            </Wrapper>
            <Wrapper>
              <PTag>Number of people*</PTag>
              <NumberInputTag
                onChange={onChange}
                placeholder="1-99"
                error={error}
              />
            </Wrapper>
          </CompanyContainer>
          <BussinessContainer>
            <PTag>Bussiness area*</PTag>
            <BussinessInputTag
              placeholder="Design, Development, etc."
              onChange={e => setBussnAreaVal(e.target.value)}
              error={error}
            />
          </BussinessContainer>
          <DescriptionContainer>
            <PTag>Description*</PTag>
            <DescriptionTextarea
              placeholder="Type Text"
              onChange={e => setDescValue(e.target.value)}
              error={error}
            />
          </DescriptionContainer>

          <DragDrop
            counter={counter}
            fileLoadHandler={fileLoadHandler}
            onChange={e => setCountVal(e.target.value, fileLoadHandler)}
          />

          <ButtonSection>
            <Button type="submit" onClick={onSubmit}>
              <ButtonText>Submit</ButtonText>
            </Button>
          </ButtonSection>
        </Form>
      </MainWrapper>
    </MainWindow>
  );
}

export default RegWindow;
