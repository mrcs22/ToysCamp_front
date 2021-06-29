import styled from "styled-components"
import { AiOutlineMenu } from 'react-icons/ai'
import Logo from "../general/Logo";
import ShopcartButton from "../general/ShopcartButton";
import SideMenu from "./SideMenu";
import { useState } from "react";

export default function Header(){
    const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false)

    const toggleSideMenu = () => {
        setSideMenuIsOpen(!sideMenuIsOpen)
    }

    return(
        <HeaderContainer sideMenuIsOpen={sideMenuIsOpen}>
            <MenuIcon onClick={toggleSideMenu} sideMenuIsOpen={sideMenuIsOpen}>
                <IconBar sideMenuIsOpen={sideMenuIsOpen}/>
                <IconBar sideMenuIsOpen={sideMenuIsOpen}/>
                <IconBar sideMenuIsOpen={sideMenuIsOpen}/>
            </MenuIcon>
            <Logo />
            <ShopcartButton />
            <SideMenu isOpen={sideMenuIsOpen} toggleSideMenu={toggleSideMenu}/>
        </HeaderContainer>
    )
}

const IconBar = styled.div`
    display: block;
    width: 100%;
    height: 3px;
    margin: 4px auto;
    transition: .3s;
`

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
    background-color: #293B5F;
    color: #DBE6FD;
    h1{
        color: #DBE6FD;
    }
    ${IconBar}:nth-of-type(1) {
        transform: ${props => props.sideMenuIsOpen ? "translate3d(0,10px,0) rotate(45deg)" : ""};
    }
    ${IconBar}:nth-of-type(2) {
        opacity: ${props => props.sideMenuIsOpen ? "0" : "1"};
    }
    ${IconBar}:nth-of-type(3) {
        transform: ${props => props.sideMenuIsOpen ? "translate3d(0,-11px,0) rotate(-45deg)" : ""};
    }
`

const MenuIcon = styled.div`
    display: flex;
    width: 40px;
    font-size: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 3;
    span{
        margin-top: 5px;
        font-size: 16px;
    }

    ${IconBar}{
        background: ${props => props.sideMenuIsOpen ? "#293B5F" : "#DBE6FD"};
    }
`