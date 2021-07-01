import axios from "axios";
import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

export default function ShopcartButton({ productId }) {
  const { user, setUser } = useContext(UserContext);

  return (
    <Shopcart onClick={() => (productId ? tryAddToShopcart() : showShopcart())}>
      <FiShoppingCart />
    </Shopcart>
  );

  function tryAddToShopcart() {
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    };

    const promise = axios.post(
      "http://localhost:4000/shopcart",
      { productId },
      config
    );
    promise.then(() => {
      alert("adicionado");
    });
    promise.catch(() => alert("algo deu errado"));
  }
  function showShopcart() {}
}

const Shopcart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dbe6fd;
  font-size: 20px;
  border-style: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
