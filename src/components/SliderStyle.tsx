import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: #f4f5f9;
  }`;

export const Wrapper = styled.section`
  width: 1440px;
  border: 1px solid rgba(66, 86, 122, 0.1);
  margin: auto;
  border-top: 0;
  border-bottom: 0;
`;

export const SliderDate = styled.div`
  display: flex;
  margin: auto;
  padding-top: 85px;
  gap: 80px;
  width: 970px;
`;
export const StartDate = styled.div`
  font-family: "PT Sans";
  font-weight: 700;
  font-size: 200px;
  line-height: 160px;
  text-align: center;
  color: #6383f7;
`;
export const EndDate = styled.div`
  font-family: "PT Sans";
  font-weight: 700;
  font-size: 200px;
  line-height: 160px;
  text-align: center;
  color: #f582e9;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 70px;
  padding-top: 160px;
`;

export const Title = styled.div`
  font-family: "PT Sans";
  font-size: 56px;
  font-weight: bold;
  color: #42567a;
  width: 355px;
`;
export const GradientDiv = styled.div`
  height: 140px;
  background: linear-gradient(180deg, #3877ee -5%, #ef5da8 85%);
  width: 5px;
`;
export const ButtonGroup = styled.div`
  position: absolute;
  z-index: 10;
  top: 735px;
  display: flex;
  gap: 10px;
  margin-left: 80px;
`;
export const Button = styled.button`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid;
  margin-left: 10px;
  cursor: pointer;
`;
export const SubSliderDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: 0px;
  margin-left: 40px;
`;
export const SliderText = styled.div`
  width: 320px;
  gap: 0px;
  opacity: 0px;
  font-family: "PT Sans";
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  color: #42567a;
`;
export const SubSliderDate = styled.div`
  font-family: Bebas Neue;
  font-size: 25px;
  font-weight: bold;
  line-height: 30px;
  text-align: left;
  color: #3877ee;
`;

export const SwiperWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 290px;
`;
