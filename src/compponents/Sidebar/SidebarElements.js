import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #223f4c;
  z-index: 999;
  display: grid;
  align-items: center;
  transition: 0.8s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const SidebarIcon = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 1.5rem;
  /* background: transparent; */
  cursor: pointer;
  outline: none;
`;
export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
`;
export const SidebarLink = styled(LinkS)`
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    color: #c9c9c9;
  }
`;
export const SidebarBtn = styled.div`
  display: flex;
  justify-content: center;
`;
export const SidebarBtnLink = styled(LinkR)`
  text-decoration: none;
  background: #fafbfb;
  color: #223f4c;
  font-weight: 700;
  width: 150px;
  text-align: center;
  padding: 10px 30px;
  border-radius: 20px;
  transition: 0.4s;
  border: none;

  &:hover {
    background: #c9c9c9;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  }
`;
