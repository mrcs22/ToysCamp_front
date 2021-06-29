import styled from "styled-components"
import { AiOutlineMenu } from 'react-icons/ai'
import Logo from "../general/Logo";
import ShopcartButton from "../general/ShopcartButton";

export default function Header(){
    return(
        <HeaderContainer>
            <Menu>
                <AiOutlineMenu />
                <span>Menu</span>
            </Menu>
            <Logo />
            <ShopcartButton />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
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
`

const Menu = styled.div`
    display: flex;
    font-size: 25px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span{
        margin-top: 5px;
        font-size: 16px;
    }
`
