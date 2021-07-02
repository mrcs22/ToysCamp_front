import styled from "styled-components"

export default function PageFooter(){
    return(
        <Footer>
            © 2021 ToysCamp
        </Footer>
    )
}

const Footer = styled.div`
    position: relative;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #293B5F;
    color: #fff;
    font-size: 18px;
    margin-top: 50px;
`