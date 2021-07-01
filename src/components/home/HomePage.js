import styled from "styled-components";
import PageFooter from "../general/PageFooter";
import ProductsContainer from "../general/ProductsContainer";
import Header from "../header/Header";

export default function HomePage({ products }) {
  return (
    <Container>
      <Header />
      <ProductsContainer category={"Lançamentos"} products={products} />
      <ProductsContainer category={"Promoções"} products={products} />
      <PageFooter />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 110px;
`;
