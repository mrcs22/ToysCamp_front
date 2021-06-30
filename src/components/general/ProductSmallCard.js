import styled from "styled-components"
import ShopcartButton from "./ShopcartButton"

export default function ProductSmallCard({product}) {
    const { name, image, price } = product

    return(
        <CardContainer>
            <StyledImage src={`http://localhost:4000${image}`}/>
            <ProductInfo>
                <ProductName>{name}</ProductName>
                <div>
                    <span>R$ {(price/100).toFixed(2).replace(".",",")}</span>
                    <ShopcartButton />
                </div>
            </ProductInfo>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    width: 96%;
    margin: 10px auto;
    background-color: #fff;
`
const StyledImage = styled.img`
    width: 28%;
    object-fit: cover;
    background-color: red;
`
const ProductInfo = styled.div`
    width: 72%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 21px;
        font-weight: 700;
    }
`
const ProductName = styled.span`
    font-weight: 700;       
    margin: 15px 0;
    font-size: 28px;
    color: #000;
`