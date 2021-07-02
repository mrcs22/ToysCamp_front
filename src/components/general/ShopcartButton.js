import axios from "axios";
import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import styled from "styled-components";
import ShopcartContext from "../../contexts/ShopcartContext";
import UserContext from "../../contexts/UserContext";

export default function ShopcartButton({
  productId,
  itemCount,
  getShopcartItems,
}) {
  const { user, setUser } = useContext(UserContext);
  const { setIsLoginNeeded, shopcartIsOpen, setShopcartIsOpen } =
    useContext(ShopcartContext);

  return (
    <Shopcart onClick={() => (productId ? tryAddToShopcart() : showShopcart())}>
      {itemCount > 0 && <span>{itemCount}</span>}
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
      "https://toyscamp.herokuapp.com/shopcart",
      { productId },
      config
    );
    promise.then(() => {
      getShopcartItems();
    });
    promise.catch(() => {
      localStorage.removeItem("toysCampUserData");
      setUser({});
      setIsLoginNeeded(true);
    });
  }
  function showShopcart() {
    setShopcartIsOpen(!shopcartIsOpen);
  }
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
  position: relative;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -13px;
    top: -5px;
    background-color: rgba(255, 0, 0, 0.8);
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
  }
`;
