import { useRef } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

export default function ProductsContainer({ category, products }) {
  const myRef = useRef()
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  const randomProducts = filteredProducts.sort(() =>
    Math.round(Math.random() - 1)
  );

  const spinCarousel = (scrollOffset) =>{
    myRef.current.scrollLeft += scrollOffset;
  }

  return (
    <Container>
      <CategoryTitle>{category}</CategoryTitle>
      <Carousel ref={myRef}>
        <>
        {randomProducts.splice(0, 7).map((product, i) => (
          <ProductCard id={i} product={product} />
        ))}
        <button className="carouselButton back" onMouseDown={() => spinCarousel(-500)}>{"<"}</button>
        <button className="carouselButton next" onMouseDown={() => spinCarousel(500)}>{">"}</button>
        </>
      </Carousel>
    </Container>
  );
}

const Container = styled.div`
  position: relative; 
  background-color: transparent;
  max-width: 100%;
  margin: 0 auto;
`;

const CategoryTitle = styled.h2`
  height: 35px;
  font-family: "Saira Stencil One", cursive;
  margin: 35px 0 20px 0;
  font-size: 28px;
  font-weight: 700;
  color: #000;
  text-align: center;
`;

const Carousel = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  .carouselButton {
    display: none;
  }

  @media(min-width: 1000px) and (max-width: 1900px){
    overflow-x: hidden;

    .carouselButton {
      display: block;
      position: absolute;
      height: 60px;
      width: 60px;
      border-radius: 30px;
      border-style: none;
      background-color: #DBE6FD;
      z-index: 3;
      font-size: 35px;
      font-weight: 700;
      cursor: pointer;
    }
    .back{
      top: 250px;
      left: 10px;
    }
    .next{
      top: 250px;
      right: 10px;
    }
  }
`;

