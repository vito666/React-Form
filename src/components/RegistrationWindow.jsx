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

export const NumberInputTag = styled(CompanyInputTag)`
  width: 178px;
  height: 48px;
  ${({ error }) => error && `border: 1px solid #F15557;`}
`;

export const NumberError = styled.p`
  display: none;
  font-size: 10px;
  color: red;
  ${({ error }) => !error && `display: block; margin:0;`}
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
  ${({ errorBussnName }) => errorBussnName && `border: 1px red solid`}
`;
export const BussinessNameError = styled.p`
  display: none;
  font-size: 10px;
  color: red;
  ${({ errorBussnName }) => errorBussnName && `display: block; margin:0;`}
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
  ${({ errorDesc }) => errorDesc && `border: 1px red solid`}
`;
export const DescriptionError = styled.p`
  display: none;
  font-size: 10px;
  color: red;
  ${({ errorDesc }) => errorDesc && `display: block;margin: 0`}
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
  const [errorDesc, setErrorDesc] = useState();
  const [errorBussnName, setErrorBussnName] = useState();
  const [descValue, setDescValue] = useState("");
  const [bussnAreaVal, setBussnAreaVal] = useState("");
  const [countVal, setCountVal] = useState("");
  const [peopleVal, setPeopleVal] = useState("");
  const [counter, setCount] = useState(0);
  const [companyName, setCompanyName] = useState("");

  const fileLoadHandler = props => {
    setCount(props);
  };

  const onSubmit = () => {
    if (descValue && countVal && bussnAreaVal && peopleVal) {
      return console.log(
        `Company name - ${companyName},\n Bussiness Area - ${bussnAreaVal},\n Description - ${descValue},\n Uploaded files - ${counter}, Number of People - ${peopleVal}`
      );
    } else if (!descValue && !bussnAreaVal && !error) {
      setErrorDesc(true);
      setErrorBussnName(true);
      setError(true);
    } else if (!descValue) {
      setErrorDesc(true);
    } else if (!bussnAreaVal) {
      setErrorBussnName(true);
    } else if (error) {
      setError(true);
    }
  };

  const onChange = e => {
    setPeopleVal(e.target.value);
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
            </Wrapper>
            <Wrapper>
              <PTag>Number of people*</PTag>
              <NumberInputTag
                onChange={onChange}
                placeholder="1-99"
                error={error}
              />
              {error && <div> Put Number</div>}
              <NumberError error={!error} />
            </Wrapper>
          </CompanyContainer>
          <BussinessContainer>
            <PTag>Bussiness area*</PTag>
            <BussinessInputTag
              placeholder="Design, Development, etc."
              errorBussnName={errorBussnName}
              onChange={e =>
                e.target.value === ""
                  ? setErrorBussnName(true)
                  : setBussnAreaVal(e.target.value) || setErrorBussnName(false)
              }
            />
            <BussinessNameError errorBussnName={errorBussnName}>
              Put info
            </BussinessNameError>
          </BussinessContainer>
          <DescriptionContainer>
            <PTag>Description*</PTag>
            <DescriptionTextarea
              placeholder="Type Text"
              errorDesc={errorDesc}
              onChange={e =>
                e.target.value === ""
                  ? setErrorDesc(true)
                  : setDescValue(e.target.value) || setErrorDesc(false)
              }
            />
            <DescriptionError errorDesc={errorDesc}>Put info</DescriptionError>
          </DescriptionContainer>

          <DragDrop
            counter={counter}
            fileLoadHandler={fileLoadHandler}
            onChange={e => setCountVal(e.target.value)}
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
