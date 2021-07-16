import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

export const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
`;
export const AboutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 80px;
  display: grid;
  z-index: 1;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
export const Column1 = styled.div`
  /* margin-right: 150px; */
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const Column2 = styled.div`
  /* margin-left: 150px; */
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;

  @media screen and (min-width: 768px) {
    position: relative;
    left: 40%;
    width: 100%;
  }
`;
export const TextWrapper = styled.div``;
export const InfoRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ img }) => (img ? `'col1 col2'` : `'col2 col1'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ img }) =>
      img ? `'col2' 'col1'` : `'col2 col2' 'col1 col1'`};
  }
`;
export const TopLine = styled.div`
  font-weight: 600;
  color: #41bdac;
  font-size: 24px;
`;
export const Heading = styled.h2`
  font-weight: 500;
  width: 250px;
  margin: 15px 0;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    width: 600px;
  }
`;

export const Paragraph = styled.p`
  width: 200px;
  font-size: 14px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: 500px;
  }
`;

export const Price = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #f06817;
  margin-bottom: 10px;
`;

export const Star = styled(AiFillStar)`
  color: ${({ star }) => (star ? "#f06817" : "rgba(240, 104, 23, 0.4)")};
`;
export const Star2 = styled(AiFillStar)`
  color: ${({ star2 }) => (star2 ? "#f06817" : "rgba(240, 104, 23, 0.4)")};
`;
export const Star3 = styled(AiFillStar)`
  color: ${({ star3 }) => (star3 ? "#f06817" : "rgba(240, 104, 23, 0.4)")};
`;
export const Star4 = styled(AiFillStar)`
  color: ${({ star4 }) => (star4 ? "#f06817" : "rgba(240, 104, 23, 0.4)")};
`;
export const Star5 = styled(AiFillStar)`
  color: ${({ star5 }) => (star5 ? "#f06817" : "rgba(240, 104, 23, 0.4)")};
`;
export const BtnWrap = styled.div`
  margin-top: 20px;
`;
export const Button = styled(Link)`
  text-decoration: none;
  background: #41bdac;
  color: #fff;
  padding: 10px 30px;
  border-radius: 20px;

  &:hover {
    box-shadow: 0 4px 20px rgba(34, 63, 76, 0.2);
  }
`;

export const ImgWrap = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 20%;
    left: 0;
    background: rgba(250, 251, 251, 0.7);
    width: 500px;
    height: 300px;
    border-radius: 20px;
  }
`;

export const Img = styled.img`
  width: 250px;
  height: 400px;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    position: relative;
    top: 3rem;
    left: 40%;
  }
`;
