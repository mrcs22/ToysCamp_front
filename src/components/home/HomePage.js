import styled from "styled-components";
import PageFooter from "../general/PageFooter";
import ProductsContainer from "../general/ProductsContainer";
import Header from "../header/Header";

export default function HomePage({ products, items, getShopcartItems }) {
  return (
    <Container>
      <Header items={items} getShopcartItems={getShopcartItems} />
      <ProductsContainer
        category={"Lançamentos"}
        products={products}
        cartItems={items}
        getShopcartItems={getShopcartItems}
      />
      <ProductsContainer
        category={"Promoções"}
        products={products}
        cartItems={items}
        getShopcartItems={getShopcartItems}
      />
      <PageFooter />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 110px auto 0 auto;
`;
