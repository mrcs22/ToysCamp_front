import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import PageFooter from "../general/PageFooter";
import ProductsContainer from "../general/ProductsContainer";
import Header from "../header/Header";

export default function HomePage({ products }) {
  const [items, setItems] = useState([]);
  const { user } = useContext(UserContext);
  console.log("from homepage ", items);

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
  }, [user.token]);

  return (
    <Container>
      <Header />
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
