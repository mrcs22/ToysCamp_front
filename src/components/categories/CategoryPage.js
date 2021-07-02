import styled from "styled-components";
import PageFooter from "../general/PageFooter";
import ProductSmallCard from "../general/ProductSmallCard";
import Header from "../header/Header";

export default function CategoryPage({
  products,
  category,
  items,
  getShopcartItems,
}) {
  const releasesProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <>
      <Header items={items} getShopcartItems={getShopcartItems} />
      <Container>
        <CategoryTitle>{category}</CategoryTitle>
        {releasesProducts.map((product, i) => (
          <ProductSmallCard
            key={i}
            product={product}
            cartItems={items}
            getShopcartItems={getShopcartItems}
          />
        ))}
      </Container>
      <PageFooter />
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
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
