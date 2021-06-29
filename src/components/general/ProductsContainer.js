import styled from "styled-components"
import ProductCard from "./ProductCard"

export default function ProductsContainer({ category }){
    return(
        <Container>
            <CategoryTitle>{category}</CategoryTitle>
            <Carousel>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Carousel>
        </Container>
    )
}

const Container = styled.div`    
    background-color: transparent;
    width: 100%;
`

const CategoryTitle = styled.h2`
    height: 35px;
    font-family: "Saira Stencil One", cursive;
    margin: 25px 0;
    font-size: 28px;
    font-weight: 700;
    color: #000;
    text-align: center;
`

const Carousel = styled.div`
    display: flex;
    overflow-x: scroll;
`