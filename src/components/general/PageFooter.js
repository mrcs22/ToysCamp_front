import styled from "styled-components"

export default function PageFooter(){
    return(
        <Footer>
            © 2021 ToysCamp
        </Footer>
    )
}

const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #293B5F;
    margin-top: 50px;
    color: #fff;
    font-size: 18px;
`