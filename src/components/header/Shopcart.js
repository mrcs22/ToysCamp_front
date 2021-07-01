import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

export default function Shopcart({ isOpen, toggleShopcart }) {
  const [items, setItems] = useState([]);
  const { user } = useContext(UserContext);

  const total = items.reduce((t, i) => t + i.price * i.count, 0);

  useEffect(() => {
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

  return (
    <Container isOpen={isOpen}>
      <MenuContent>
        <p>Carrinho</p>
        <ul>
          {items.map((i) => (
            <li>
              <div>
                <span>{i.count}x</span>
                {i.name}
              </div>
              <p>R${(i.price / 100).toFixed(2)}</p>
            </li>
          ))}
        </ul>
        <p>Total: R${(total / 100).toFixed(2)}</p>
        <div className="shopcartFooter">
          <div className="bar"></div>
          <div>
            <button onClick={toggleShopcart}>Voltar</button>
            <button onClick={toggleShopcart}>Finalizar</button>
          </div>
        </div>
      </MenuContent>
      <Background onClick={toggleShopcart} isOpen={isOpen} />
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  right: ${(props) => (props.isOpen ? "0" : "-100vw")};
  top: 0;
  transition: right 0.7s ease;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 28px;
  color: #293b5f;
`;
const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  max-width: 400px;
  min-width: 280px;
  height: 100%;
  padding: 0 20px;
  background-color: #fff;
  z-index: 2;
  font-family: "Saira Stencil One", cursive;

  & > p {
    text-align: center;
    font-size: 30px;
    margin-top: 40px;
  }

  & > ul {
    height: calc(100vh - 300px);
    width: 90%;

    margin: 0 auto;
    padding: 0 5px;

    overflow: hidden;
    overflow-y: scroll;
  }

  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    div {
      width: 70%;

      height: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    span:first-child {
      display: inline-block;
      margin-right: 2rem;
    }
    @media (max-width: 350px) {
      p:last-child {
        display: none;
      }
    }
  }
  button {
    width: 70px;
    height: 30px;
    color: #1877f2;
    background-color: #fff;
    cursor: pointer;
  }

  .shopcartFooter {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
    font-size: 20px;
    margin-bottom: 30px;

    div:last-child {
      display: flex;
      justify-content: space-between;
    }
  }
  .bar {
    height: 2px;
    width: 100%;
    background-color: #293b5f;
    opacity: 0.4;
  }
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.isOpen ? "0.6" : "0")};
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
  transition: opacity 0.7s ease;
  background-color: #000;
`;
