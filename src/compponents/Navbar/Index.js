import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavbarLogo to="/" onClick={toggleHome} scrollNav={scrollNav}>
            Travel.id
          </NavbarLogo>

          <NavMenu>
            <NavItem>
              <NavLinks to="home" scrollNav={scrollNav}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about" scrollNav={scrollNav}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="destination" scrollNav={scrollNav}>
                Destination
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" scrollNav={scrollNav}>
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="/login" scrollNav={scrollNav}>
              Login
            </NavBtnLink>
          </NavBtn>

          <MobileIcon onClick={toggle} scrollNav={scrollNav}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
