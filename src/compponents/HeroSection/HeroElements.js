import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";
import { Link } from "react-router-dom";
import myImageOne from "../../images/img-7.jpg";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding-left: 80px;
`;
export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;
export const HeroH1 = styled.h1`
  width: 700px;
  font-weight: 600;
  font-size: 48px;
  background-color: rgba(250, 251, 251, 0.2);
  color: #223f4c;
  /* background-color: linear-gradient(
    rgba(250, 250, 250, 0.7) 0%,
    rgba(250, 250, 250, 0.4) 100%
  ); */
  backdrop-filter: blur(20px);

  @media screen and (max-width: 900px) {
    width: 500px;
  }

  @media screen and (max-width: 620px) {
    width: 320px;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const HeroP = styled.p`
  width: 370px;
  margin: 20px 0;
  color: #9c9c9c;

  @media screen and (max-width: 560px) {
    width: 250px;
    font-size: 12px;
  }
`;

export const Btn = styled.div`
  display: flex;
  align-items: center;
`;

export const HeroBtn = styled(Link)`
  display: flex;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #000;
  font-weight: 400;
  font-size: 14px;

  @media screen and (max-width: 560px) {
    font-size: 12px;
  }
`;

export const BtnIcon = styled.div`
  background: rgb(65, 189, 172);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  box-shadow: 0 4px 20px rgba(65, 189, 172, 0.5);

  @media screen and (max-width: 560px) {
    width: 40px;
    height: 40px;
  }
`;

export const BtnIcon2 = styled.div`
  box-shadow: 0 4px 20px rgba(34, 63, 76, 0.3);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  @media screen and (max-width: 560px) {
    width: 40px;
    height: 40px;
  }
`;

export const ArrowRight = styled(AiOutlineArrowRight)`
  color: #fff;
  font-size: 20px;
  font-weight: bolder;
`;
export const Play = styled(BsPlay)`
  font-size: 20px;
  font-weight: bolder;
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 50px;
  background-image: url(${myImageOne});
  width: 550px;
  height: 600px;
  background-size: cover;
  z-index: -1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeroCircle = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(65, 189, 172, 0.6);
  border-radius: 50%;
  z-index: 1;
  top: 100px;
  left: 250px;
`;

export const HeroCircle2 = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background: rgba(34, 63, 76, 1);
  border-radius: 50%;
  z-index: 1;
  top: 80px;
  left: 220px;
`;

export const HeroCircle3 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: rgba(151, 163, 40, 1);
  border-radius: 50%;
  z-index: 1;
  top: 70px;
  left: 315px;
`;

export const HeroCircle4 = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(240, 104, 23, 1);
  border-radius: 50%;
  z-index: -9999;
  bottom: 10px;
  left: 50%;

  @media screen and (max-width: 768px) {
    bottom: 100px;
    left: 70%;
  }

  @media screen and (max-width: 560px) {
    bottom: 50%;
    left: 70%;
  }
`;
