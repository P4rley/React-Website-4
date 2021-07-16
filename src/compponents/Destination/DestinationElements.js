import styled from "styled-components";
import { Link } from "react-router-dom";

export const DestinationContainer = styled.div`
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const DestinationWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 560px) {
    text-align: center;
  }
`;
export const Column1 = styled.div``;
export const Column2 = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 560px) {
    align-items: center;
    justify-content: center;
  }
`;

export const TopLine = styled.div`
  font-weight: 600;
  color: #41bdac;
  font-size: 24px;
  @media screen and (max-width: 568px) {
    font-size: 16px;
  }
`;
export const Headline = styled.h2`
  width: 500px;
  font-weight: 600;
  font-size: 48px;
  margin: 1rem 0;

  @media screen and (max-width: 560px) {
    width: 300px;
    margin: 0.5rem auto;
    font-size: 24px;
  }
`;
export const Paragraph = styled.p`
  width: 400px;
  margin-bottom: 1rem;
  font-size: 20px;

  @media screen and (max-width: 560px) {
    margin: 0 auto;
    font-size: 12px;
  }
`;
export const DestinationBtn = styled.div`
  margin: 2rem 0;
`;
export const Button = styled(Link)`
  text-decoration: none;
  background: #41bdac;
  color: #fafbfb;
  padding: 10px 30px;
  border-radius: 20px;
  margin: 2rem 0;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  }
`;
export const CardRow = styled.div``;
export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  margin: 2rem 1rem 2rem 1rem;
  border-radius: 10px;
  background: #fafbfb;
  width: 150px;

  @media screen and (max-width: 768px) {
    width: 200px;
  }

  @media screen and (max-width: 560px) {
    width: 300px;
  }
`;
export const Img = styled.img`
  width: 150px;
  border-radius: 10px 10px 0 0;

  @media screen and (max-width: 768px) {
    width: 200px;
  }

  @media screen and (max-width: 560px) {
    width: 300px;
  }
`;
export const CardText = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin: 5px;
  color: #41bdac;
  cursor: pointer;

  @media screen and (max-width: 560px) {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
`;
export const CardPrice = styled.p`
  margin-bottom: 10px;
  color: #f06817;
  font-weight: 500;
  cursor: pointer;
`;
