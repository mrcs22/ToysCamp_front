import styled from "styled-components"
import ShopcartButton from "./ShopcartButton"

export default function ProductCard(){
    return(
        <Container>
            <StyledImage />
            <ProductName>Nome do produto</ProductName>
            <CardFooter>
                <span>R$ 200,00</span>
                <ShopcartButton />
            </CardFooter>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 260px;
    height: 500px;
    border-radius: 9px;
    background-color: #fff;
    margin: 0 5px;
`

const StyledImage = styled.img`
    background: teal;
    border-radius: 9px 9px 0 0;
    width: 100%;
    height: 400px;
`
const ProductName = styled.span`
    font-weight: 700;       
    margin: 15px 0;
    font-size: 20px;
    color: #000;
`

const CardFooter = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    color: #000;
`