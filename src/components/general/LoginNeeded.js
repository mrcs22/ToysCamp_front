import { useContext } from "react";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ShopcartContext from "../../contexts/ShopcartContext";

export default function LoginNeeded() {
  const history = useHistory();
  const { isLoginNeeded, setIsLoginNeeded } = useContext(ShopcartContext);
  return (
    <Modal
      isOpen={isLoginNeeded}
      style={modalStyle}
      onRequestClose={() => {
        setIsLoginNeeded(false);
      }}
      ariaHideApp={false}
    >
      <p>
        Para adicionar itens ao carrinho, é preciso estar logado(a). Deseja
        fazer login?
      </p>
      <ButtonContainer>
        <button
          className="agree_button"
          onClick={() => {
            setIsLoginNeeded(false);
            history.push("/sign-in");
          }}
        >
          Sim
        </button>
        <button
          className="cancel_button"
          onClick={() => {
            setIsLoginNeeded(false);
          }}
        >
          Cancelar
        </button>
      </ButtonContainer>
    </Modal>
  );
}

const modalStyle = {
  overlay: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    zIndex: "3",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    top: "calc(50vh - 200px)",
    margin: "0 auto",
    width: "75vw",
    maxWidth: "300px",
    height: "400px",
    backgroundColor: "#333",
    borderRadius: "50px",
    color: "#fff",
    fontSize: "20px",
    fontWeight: "700",
    textAlign: "center",
  },
};
const ButtonContainer = styled.div`
  button {
    width: 134px;
    height: 37px;
    font-size: 18px;
    border-style: none;
    border-radius: 5px;
    margin: 0 15px;
    margin-top: 10px;
  }
  .agree_button {
    color: #1877f2;
    background-color: #fff;
    cursor: pointer;
  }
  .cancel_button {
    color: #fff;
    background-color: #1877f2;
    cursor: pointer;
  }
`;
