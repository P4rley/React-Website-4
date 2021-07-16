import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  FooterLink,
  FooterLogo,
  FooterText,
  FooterAddress,
  FooterSocialMedia,
  SocialIconLink,
  FooterItems,
  FooterTitle,
  Circle,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Circle></Circle>
        <FooterWrapper>
          <FooterLink>
            <FooterLogo to="/">Travel.id</FooterLogo>
            <FooterText>
              Travel.id is a service provider engaged in tourism as a guide
              agent for those who want to vacation.
            </FooterText>
            <FooterAddress>Jl. Setia Budi No.14, Medan Indonesia</FooterAddress>
            <FooterSocialMedia>
              <SocialIconLink href="/" target="_blank" aria-label="facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="twitter">
                <FaTwitter />
              </SocialIconLink>
            </FooterSocialMedia>
          </FooterLink>
          <FooterLink>
            <FooterTitle>Tours</FooterTitle>
            <FooterItems to="/">Indonesia</FooterItems>
            <FooterItems to="/">Australia</FooterItems>
            <FooterItems to="/">Turky</FooterItems>
            <FooterItems to="/">Germany</FooterItems>
          </FooterLink>

          <FooterLink>
            <FooterTitle to="/">Support</FooterTitle>
            <FooterItems to="/">Account</FooterItems>
            <FooterItems to="/">Privacy Policy</FooterItems>
            <FooterItems to="/">Legal</FooterItems>
            <FooterItems to="/">Addiliative Program</FooterItems>
            <FooterItems to="/">Contact</FooterItems>
          </FooterLink>

          <FooterLink>
            <FooterTitle to="/">About</FooterTitle>
            <FooterItems to="/">Product</FooterItems>
            <FooterItems to="/">Resource</FooterItems>
            <FooterItems to="/">Blog</FooterItems>
            <FooterItems to="/">Stories</FooterItems>
            <FooterItems to="/">FAQ</FooterItems>
          </FooterLink>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
