import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const FooterWrapper = styled.div`
  padding: 0 80px;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin: 5rem 0;
  }
`;
export const FooterLink = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
`;
export const FooterLogo = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: #223f4c;
`;
export const FooterText = styled.p`
  width: 350px;
  margin: 1rem 0;
`;
export const FooterAddress = styled.p`
  margin-bottom: 1rem;
`;
export const FooterSocialMedia = styled.div``;
export const SocialIconLink = styled.a`
  margin-right: 1rem;
  font-size: 1.5rem;
  color: #41bdac;
`;
export const FooterTitle = styled.h2`
  margin-bottom: 0.5rem;
  color: #223f4c;
`;
export const FooterItems = styled(Link)`
  text-decoration: none;
  margin-top: 1rem;
  color: #000;
`;

export const Circle = styled.div`
  position: absolute;
  width: 100%;
  height: 120vh;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: -1;
  top: -150px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
