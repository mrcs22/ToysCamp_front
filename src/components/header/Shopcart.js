import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import ConfirmOrderModal from "../general/ConfirmOrderModal";

export default function Shopcart({
  isOpen,
  toggleShopcart,
  confirmModalIsOpen,
  toggleConfirmModal,
}) {
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
  }, [user?.token, isOpen]);

  const finishOrder = () => {
    if (items.length > 0) {
      toggleConfirmModal();
      toggleShopcart();
    } else {
      alert("Você ainda não possui itens no carrinho");
    }
  };

  return (
    <Container isOpen={isOpen}>
      <MenuContent>
        <p>Carrinho</p>
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <div>
                <span>{item.count}x</span>
                {item.name}
              </div>
              <p>R${(item.price / 100).toFixed(2)}</p>
            </li>
          ))}
        </ul>
        <p className="total">Total: R${(total / 100).toFixed(2)}</p>
        <div className="shopcartFooter">
          <div className="bar"></div>
          <div>
            <button onClick={toggleShopcart}>Voltar</button>
            <button onClick={finishOrder}>Finalizar</button>
          </div>
        </div>
      </MenuContent>
      <Background onClick={toggleShopcart} isOpen={isOpen} />
      <ConfirmOrderModal
        total={total}
        shopcart={items}
        confirmModalIsOpen={confirmModalIsOpen}
        toggleConfirmModal={toggleConfirmModal}
      />
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
  max-width: 600px;
  min-width: 280px;
  height: 100%;
  padding: 0 20px;
  background-color: #fff;
  z-index: 2;
  font-family: "Saira Stencil One", cursive;
  font-size: 1.3rem;

  & > p {
    text-align: center;
    font-size: 30px;
    margin-top: 40px;
  }

  & > ul {
    height: calc(100vh - 300px);
    width: 90%;
    margin: 0 auto;
    margin-top: 2.5rem;
    padding: 0 5px;

    overflow: hidden;
    overflow-y: scroll;
  }

  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    div {
      width: 70%;
      width: 350px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    span:first-child {
      display: inline-block;
      margin-right: 2rem;
    }
    @media (max-width: 600px) {
      font-size: 1rem;
    }

    @media (max-width: 350px) {
      div {
        width: 90%;
      }

      p:last-child {
        display: none;
      }
    }
  }

  .total {
    font-size: 1.5rem;
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
