import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import PageFooter from "../general/PageFooter"
import ProductsContainer from "../general/ProductsContainer"
import Header from "../header/Header"

export default function HomePage(){
    const [products, setProducts] = useState([])

    const fetchProducts = useCallback(() => {

        axios.get("http://localhost:4000/products")
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            alert("Ocorreu um erro. Tente novamente")
        })
    }, [])

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])


    return(
        <Container>
            <Header/>
            <ProductsContainer category={"Lançamentos"} products={products}/>
            <ProductsContainer category={"Promoções"} products={products}/>
            <PageFooter />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    margin-top: 110px;
`