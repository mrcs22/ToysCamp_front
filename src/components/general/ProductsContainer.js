import styled from "styled-components";
import ProductCard from "./ProductCard";

export default function ProductsContainer({ category, products }) {
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  const randomProducts = filteredProducts.sort(() =>
    Math.round(Math.random() - 1)
  );

  return (
    <Container>
      <CategoryTitle>{category}</CategoryTitle>
      <Carousel>
        {randomProducts.splice(0, 7).map((product, i) => (
          <ProductCard id={i} product={product} />
        ))}
      </Carousel>
    </Container>
  );
}

const Container = styled.div`
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;
