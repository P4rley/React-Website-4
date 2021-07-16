import React from "react";
import {
  SidebarContainer,
  SidebarIcon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtn,
  SidebarBtnLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <SidebarIcon onClick={toggle}>
          <CloseIcon />
        </SidebarIcon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="home" onClick={toggle}>
              Home
            </SidebarLink>
            <SidebarLink to="about" onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to="destination" onClick={toggle}>
              Destination
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>
              Contact
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
        <SidebarBtn>
          <SidebarBtnLink to="/login">Login</SidebarBtnLink>
        </SidebarBtn>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
