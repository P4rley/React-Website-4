import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.div`
  background: ${({ scrollNav }) => (scrollNav ? "#223f4c" : "transparent")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${({ scrollNav }) => (scrollNav ? "20px 80px" : "30px 80px")};
  z-index: 10;
  transition: 0.3s all ease;
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const NavbarLogo = styled(LinkR)`
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
  color: ${({ scrollNav }) => (scrollNav ? "#fff" : "#223f4c")};
`;
export const MobileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  cursor: pointer;
  color: ${({ scrollNav }) => (scrollNav ? "#fff" : "#223f4c")};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-right: 20px;
`;
export const NavItem = styled.li`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavLinks = styled(LinkS)`
  text-decoration: none;
  display: flex;
  padding: 0 1rem;
  font-weight: 600;
  color: ${({ scrollNav }) => (scrollNav ? "#fff" : "#223f4c")};
  cursor: pointer;

  &:hover {
    color: rgb(43, 104, 132);
  }
`;
export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  text-decoration: none;
  font-weight: 500;
  background: ${({ scrollNav }) => (scrollNav ? "#fff" : "#223f4c")};
  color: ${({ scrollNav }) => (scrollNav ? "#223f4c" : " #fafbfb")};
  padding: 10px 30px;
  border-radius: 20px;
  transition: 0.2s ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(34, 63, 76, 0.2);
  }
`;
