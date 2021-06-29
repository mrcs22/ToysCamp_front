import styled from "styled-components"
import PageFooter from "../general/PageFooter"
import ProductsContainer from "../general/ProductsContainer"
import Header from "../header/Header"

export default function HomePage(){
    return(
        <Container>
            <Header/>
            <ProductsContainer category={"Lançamentos"} />
            <ProductsContainer category={"Promoções"}/>
            <PageFooter />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`