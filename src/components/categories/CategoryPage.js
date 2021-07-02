import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import PageFooter from "../general/PageFooter";
import ProductSmallCard from "../general/ProductSmallCard";
import Header from "../header/Header";

export default function CategoryPage({ products, category }) {
  const releasesProducts = products.filter(
    (product) => product.category === category
  );
  const { user } = useContext(UserContext);

  const [items, setItems] = useState([]);
  const getShopcartItems = useCallback(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    };
    const promise = axios.get(
      "https://toyscamp.herokuapp.com/shopcart",
      config
    );

    promise.then((res) => {
      setItems(res.data);
    });

    promise.catch((e) => {
      console.log(e);
    });
  }, [user?.token]);

  useEffect(() => {
    getShopcartItems();
  }, [user.token, getShopcartItems]);

  return (
    <>
      <Header />
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
