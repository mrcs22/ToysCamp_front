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
            <Background onClick={toggleSideMenu}/>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    left: ${props => props.isOpen ? "0" : "-100vw"};
    top: 0;
    /* transform: ${props => props.isOpen ? "translate3d(0vw, 0, 0)" : "translate3d(-100vw, 0, 0)"}; */
    transition: left 1s ease;
    display: ${props => props.isOpen ? "flex" : "none"};
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
    height: calc(100%);
    padding: 0 20px;
    background-color: #fff;
    ul {
        margin-top: 90px;
    }
    ul li{
        margin-bottom: 50px;
    }
    .sideMenuFooter{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100px;
        font-size: 24px;
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
    width: 20%;
    background-color: rgba(0, 0, 0, 0.75);
`