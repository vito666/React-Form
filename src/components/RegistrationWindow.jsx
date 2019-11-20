import React, { useState } from "react";
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
  padding-top: 20px;
  font-family: "Open Sans";
`;

export const CompanyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 623px) {
    justify-content: space-around;
  }
  @media (max-width: 425px) {
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
  @media (max-width: 425px) {
    text-align: center;
  }
`;

export const CompanyInputTag = styled.input`
  background: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #c7c7c7;
  width: 280px;
  height: 48px;
  font-size: 20px;
  padding: 0 10px;
  outline-width: 0;
  @media (max-width: 623px) {
    width: 160px;
  }
  @media (max-width: 425px) {
    width: 90%;
  }
`;

export const NumberInputTag = styled(CompanyInputTag)`
  width: 178px;
  height: 48px;
  ${({ numberError }) => numberError && `border: 1px solid #F15557;`}
`;

export const NumberError = styled.p`
  display: none;
  font-size: 10px;
  color: red;
  ${({ numberError }) => numberError && `display: block; margin:0;`}
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
  ${({ bussArea }) => bussArea && `border: 1px red solid`}
`;
export const BussinessNameError = styled.p`
  display: none;
  font-size: 10px;
  color: red;
  ${({ bussArea }) => bussArea && `display: block; margin:0;`}
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
  border: 1px solid #c7c7c7;
  font-size: 20px;
  padding: 16px 12px;
  resize: none;
  outline-width: 0;
  @media (max-width: 623px) {
    align-items: center;
    width: 80%;
  }
  ${({ description }) => description && `border: 1px red solid`}
`;
export const DescriptionError = styled.p`
  display: none;
  font-size: 10px;
  color: red;
  ${({ description }) => description && `display: block;margin: 0`}
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
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState({
    companyName: "",
    NumOfPeople: "",
    bussArea: "",
    description: ""
  });
  const [error, setError] = useState({
    NumOfPeople: "",
    bussArea: "",
    description: ""
  });

  const fileLoadHandler = props => {
    setCounter(props);
    console.log(props);
  };

  const onSubmit = () => {
    if (
      !error.NumOfPeople &&
      !error.bussArea &&
      !error.description &&
      inputValue.NumOfPeople !== "" &&
      inputValue.bussArea !== "" &&
      inputValue.description !== ""
    ) {
      return alert(
        `\n Company name - ${inputValue.companyName},\n Number of People - ${inputValue.NumOfPeople},\n Bussiness Area - ${inputValue.bussArea},\n Description - ${inputValue.description},\n Uploaded files - ${counter}`
      );
    } else {
      return alert("error");
    }
  };

  const NumOfPeopleValidation = e => {
    setInputValue({
      ...inputValue,
      NumOfPeople: e.target.value
    });
    const isError = checkValue(e.target.value);
    return setError({ ...error, NumOfPeople: !isError });
  };

  return (
    <MainWindow>
      <MainWrapper>
        <Form>
          <CompanyContainer>
            <Wrapper>
              <PTag>Your company name</PTag>
              <CompanyInputTag
                onChange={e =>
                  setInputValue({ ...inputValue, companyName: e.target.value })
                }
                name="company"
                placeholder=" Type Text"
              />
            </Wrapper>
            <Wrapper>
              <PTag>Number of people*</PTag>
              <NumberInputTag
                onChange={NumOfPeopleValidation}
                placeholder="1-99"
                numberError={error.NumOfPeople}
              />
              <NumberError numberError={error.NumOfPeople}>
                Put Number from 1 to 99
              </NumberError>
            </Wrapper>
          </CompanyContainer>
          <BussinessContainer>
            <PTag>Bussiness area*</PTag>
            <BussinessInputTag
              placeholder="Design, Development, etc."
              bussArea={error.bussArea}
              onChange={e =>
                e.target.value === ""
                  ? setError({ ...error, bussArea: true })
                  : setInputValue({
                      ...inputValue,
                      bussArea: e.target.value
                    }) || setError({ ...error, bussArea: false })
              }
            />
            <BussinessNameError bussArea={error.bussArea}>
              Put info
            </BussinessNameError>
          </BussinessContainer>
          <DescriptionContainer>
            <PTag>Description*</PTag>
            <DescriptionTextarea
              placeholder="Type Text"
              description={error.description}
              onChange={e =>
                e.target.value === ""
                  ? setError({ ...error, description: true })
                  : setInputValue({
                      ...inputValue,
                      description: e.target.value
                    }) || setError({ ...error, description: false })
              }
            />
            <DescriptionError description={error.description}>
              Put info
            </DescriptionError>
          </DescriptionContainer>

          <DragDrop counter={counter} fileLoadHandler={fileLoadHandler} />

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
