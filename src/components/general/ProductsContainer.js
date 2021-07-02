import React, { useRef } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { RiArrowDropRightFill } from "react-icons/ri";
import { RiArrowDropLeftFill } from "react-icons/ri";

const ProductsContainer = ({
  category,
  products,
  cartItems,
  getShopcartItems,
}) => {

  const myRef = useRef();
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  const randomProducts = filteredProducts.sort(() =>
    Math.round(Math.random() - 1)
  );

  console.log("from pcontainer  ", cartItems);
  const sideScroll = (direction, speed, distance, step) => {
    let scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction === "left") {
        myRef.current.scrollLeft -= step;
      } else {
        myRef.current.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <Container>
      <CategoryTitle>{category}</CategoryTitle>
      <Carousel ref={myRef}>
        <>
          {randomProducts.splice(0, 7).map((product, i) => (
            <ProductCard
              id={i}
              product={product}
              cartItems={cartItems}
              getShopcartItems={getShopcartItems}
            />
          ))}
          <div
            className="carouselButton back"
            onClick={() => sideScroll("left", 5, 400, 5)}
          >
            <RiArrowDropLeftFill />
          </div>
          <div
            className="carouselButton next"
            onClick={() => sideScroll("right", 5, 400, 5)}
          >
            <RiArrowDropRightFill />
          </div>
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
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  &::-webkit-scrollbar {
    display: none;
  }
  .carouselButton {
    display: none;
  }

  @media (min-width: 1920px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1000px) and (max-width: 1900px) {
    .carouselButton {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      height: 60px;
      width: 60px;
      border-radius: 30px;
      border-style: none;
      background-color: #dbe6fd;
      font-size: 60px;
      font-weight: 700;
      cursor: pointer;
    }
    .back {
      top: 250px;
      left: 10px;
    }
    .next {
      top: 250px;
      right: 10px;
    }
  }
`;

const MemoizeProductsContainer = React.memo(ProductsContainer)

export default MemoizeProductsContainer
