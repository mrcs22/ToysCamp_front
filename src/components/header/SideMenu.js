import styled from "styled-components"

export default function SideMenu({isOpen, toggleSideMenu}){
    return(
            <Container isOpen={isOpen}>
                <MenuContent>
                    <ul>
                        <li>Início</li>
                        <li>Lançamentos</li>
                        <li>Promoções</li>
                    </ul>
                    <div className="sideMenuFooter">
                        <div className="bar"></div>
                        <span>Sair</span>
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
    /* transform: ${props => props.isOpen ? "translate3d(0vw, 0, 0)" : "translate3d(-100vw, 0, 0)"}; */
    transition: left 0.6s ease;
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
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${props => props.isOpen ? "0.6" : "0"};
    transition: opacity 0.7s ease;
    background-color: #000;
`