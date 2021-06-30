import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"
import {BsFillPersonFill} from "react-icons/bs"

export default function SideMenu({isOpen, toggleSideMenu}){
    let history = useHistory()

    const logout = () => {
        localStorage.clear()
        history.push("/")
    }

    return(
            <Container isOpen={isOpen}>
                <MenuContent>
                    <ul>
                        <li>
                            <BsFillPersonFill className="user_icon"/>
                            <Link to="/login" onClick={toggleSideMenu}>  Entrar </Link>
                            /
                            <Link to="/sign-up" onClick={toggleSideMenu}> Cadastrar</Link>
                        </li>
                        <li>
                            <Link to="/" onClick={toggleSideMenu}>
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link to="/releases" onClick={toggleSideMenu}>
                                Lançamentos
                            </Link>
                        </li>
                        <li>
                            <Link to="/sales" onClick={toggleSideMenu}>
                                Promoções
                            </Link>
                        </li>
                    </ul>
                    <div className="sideMenuFooter">
                        <div className="bar"></div>
                        <span onClick={logout}>Sair</span>
                        <span>SAC: (99) 99999-9999</span>
                    </div>
                </MenuContent>
                <Background onClick={toggleSideMenu} isOpen={isOpen}/>
            </Container>
    )
}

const Container = styled.div`
    position: fixed;
    left: ${props => props.isOpen ? "0" : "-100vw"};
    top: 0;
    transition: left 0.7s ease;
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    font-size: 28px;
    color: #293B5F;
`
const MenuContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    height: 100%;
    padding: 0 20px;
    background-color: #fff;
    z-index: 2;
    font-family: "Saira Stencil One", cursive;
    ul {
        margin-top: 120px;
    }
    ul li{
        font-weight: 700;
        margin-bottom: 50px;
    }
    ul li:first-child{
        font-size: 18px;
    }
    .sideMenuFooter{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100px;
        font-size: 20px;
        margin-bottom: 30px;
    }
    .bar {
        height: 2px;
        width: 100%;
        background-color: #293B5F;
        opacity: 0.4;
    }
    .user_icon{
        line-height: 2px;
    }
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${props => props.isOpen ? "0.6" : "0"};
    pointer-events: ${props => props.isOpen ? "auto" : "none"};
    transition: opacity 0.7s ease;
    background-color: #000;
`