import styled from "styled-components";
import Logo from "../general/Logo";
import ShopcartButton from "../general/ShopcartButton";
import SideMenu from "./SideMenu";
import { useContext, useState } from "react";
import Shopcart from "./Shopcart";
import ShopcartContext from "../../contexts/ShopcartContext";

export default function Header() {
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);
  const { shopcartIsOpen, setShopcartIsOpen } = useContext(ShopcartContext);

  const toggleSideMenu = () => {
    setSideMenuIsOpen(!sideMenuIsOpen);
  };

  const toggleShopcart = () => {
    setShopcartIsOpen(!shopcartIsOpen);
  };

  return (
    <HeaderContainer sideMenuIsOpen={sideMenuIsOpen}>
      <MenuIcon onClick={toggleSideMenu} disabled={shopcartIsOpen}>
        <IconBar />
        <IconBar />
        <IconBar />
      </MenuIcon>
      <Logo />
      <ShopcartButton />
      <SideMenu isOpen={sideMenuIsOpen} toggleSideMenu={toggleSideMenu} />
      <Shopcart isOpen={shopcartIsOpen} toggleShopcart={toggleShopcart} />
    </HeaderContainer>
  );
}

const IconBar = styled.div`
  display: block;
  width: 100%;
  height: 3px;
  margin: 4px auto;
  transition: 0.3s;
`;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 25px;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  min-width: 320px;
  height: 90px;
  background-color: #293b5f;
  color: #dbe6fd;
  z-index: 2;
  h1 {
    color: #dbe6fd;
  }
  ${IconBar}:nth-of-type(1) {
    transform: ${(props) =>
      props.sideMenuIsOpen ? "translate3d(0,10px,0) rotate(45deg)" : ""};
  }
  ${IconBar}:nth-of-type(2) {
    opacity: ${(props) => (props.sideMenuIsOpen ? "0" : "1")};
  }
  ${IconBar}:nth-of-type(3) {
    transform: ${(props) =>
      props.sideMenuIsOpen ? "translate3d(0,-11px,0) rotate(-45deg)" : ""};
  }
`;

const MenuIcon = styled.div`
  display: flex;
  width: 40px;
  font-size: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  span {
    margin-top: 5px;
    font-size: 16px;
  }

  ${IconBar} {
    background: ${(props) => (props.sideMenuIsOpen ? "#293B5F" : "#DBE6FD")};
  }
`;
