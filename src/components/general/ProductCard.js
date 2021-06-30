import styled from "styled-components"
import ShopcartButton from "./ShopcartButton"

export default function ProductCard({product}){
    const { name, image, price } = product
    

    return(
        <Container>
            <StyledImage src={`http://localhost:4000${image}`}/>
            <ProductName>{name}</ProductName>
            <CardFooter>
                <span>R$ {(price/100).toFixed(2).replace(".",",")}</span>
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
    border-radius: 9px 9px 0 0;
    width: 100%;
    height: 400px;
    object-fit: cover;
`
const ProductName = styled.span`
    font-weight: 700;       
    margin: 15px 0;
    font-size: 25px;
    color: #000;
`
const CardFooter = styled.div`
    display: flex;
    font-family: "Saira Stencil One", cursive;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    color: #000;
`