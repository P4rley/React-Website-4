import styled from "styled-components";
import { Link } from "react-router-dom";
import profileImg from "../../images/img-5.jpg";
import { BsCircleFill } from "react-icons/bs";

export const TestimonialContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const TestimonialWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  @media screen and (max-width: 560px) {
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
`;
export const Column1 = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
`;
export const Column2 = styled.div`
  width: 700px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 560px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
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
export const Heading = styled.h2`
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
    font-size: 12px;
  }
`;
export const TestimonialBtn = styled.div`
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
export const TestimonialProfil = styled.div`
  display: flex;
  align-items: center;
`;
export const Col1Img = styled.div`
  background-image: url(${profileImg});
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-repeat: no-repeat;
  margin-right: 10px;
`;
export const Name = styled.p`
  font-weight: 500;
  font-size: 14px;
`;

export const Roll = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;
export const Circle = styled(BsCircleFill)`
  margin-right: 0.5rem;
  color: ${({ circle }) => (circle ? "#f06817" : "transparent")};
  border: ${({ circle }) => (circle ? "none" : "3px solid grey")};
  border-radius: 50%;
`;
export const Circle2 = styled(BsCircleFill)`
  margin-right: 0.5rem;
  color: ${({ circle2 }) => (circle2 ? "#f06817" : "transparent")};
  border: ${({ circle2 }) => (circle2 ? "none" : "3px solid grey")};
  border-radius: 50%;
`;
export const Circle3 = styled(BsCircleFill)`
  margin-right: 0.5rem;
  color: ${({ circle3 }) => (circle3 ? "#f06817" : "transparent")};
  border: ${({ circle3 }) => (circle3 ? "none" : "3px solid grey")};
  border-radius: 50%;
`;
export const Circle4 = styled(BsCircleFill)`
  margin-right: 0.5rem;
  color: ${({ circle4 }) => (circle4 ? "#f06817" : "transparent")};
  border: ${({ circle4 }) => (circle4 ? "none" : "3px solid grey")};
  border-radius: 50%;
`;
export const Circle5 = styled(BsCircleFill)`
  margin-right: 0.5rem;
  color: ${({ circle5 }) => (circle5 ? "#f06817" : "transparent")};
  border: ${({ circle5 }) => (circle5 ? "none" : "3px solid grey")};
  border-radius: 50%;
`;

export const Rectangle = styled.div`
  width: 350px;
  height: 250px;
  background-color: #f06817;
  position: absolute;
  top: 0;
  left: -80px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Col2Img = styled.div`
  position: absolute;
  background-image: url(${profileImg});
  width: 500px;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  bottom: 20px;
  left: 0;
  top: 100px;
  border-radius: 10px;

  @media screen and (max-width: 560px) {
    width: 330px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`;
