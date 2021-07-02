import { useState } from "react";
import Container from "../general/Container";
import Logo from "../general/Logo";
import InputsHolder from "../general/InputsHolder";
import TextInput from "../general/TextInput";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AuthPageLink from "../general/AuthPageLink";
import styled from "styled-components";
import Loader from "react-loader-spinner";

export default function SignInPage({ setUser }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [invalidLogin, setInvalidLogin] = useState(false);

  return (
    <Container>
      <Logo />

      <InputsHolder onSubmit={trySignIn}>
        {invalidLogin && (
          <IncorrectDataWarning>
            Email e/ou senha incorretos
          </IncorrectDataWarning>
        )}
        <TextInput
          disabled={isSigningIn}
          type="email"
          required
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          disabled={isSigningIn}
          type="password"
          required
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button disabled={isSigningIn} type="submit">
          {isSigningIn ? DotsLoader : "Entrar"}
        </Button>
      </InputsHolder>
      <AuthPageLink text={"Primeira vez? Cadastre-se!"} path={"/sign-up"} />
      <AuthPageLink text={"Voltar para home"} path={"/"} />
    </Container>
  );

  function trySignIn(e) {
    e.preventDefault();
    setIsSigningIn(true);
    setInvalidLogin(false);

    const promise = axios.post("https://toyscamp.herokuapp.com/sign-in", {
      email,
      password,
    });

    promise.then((res) => {
      localStorage.setItem("toysCampUserData", JSON.stringify(res.data));
      setUser(res.data);
      setIsSigningIn(false);
      history.push("/");
    });

    promise.catch((e) => {
      setIsSigningIn(false);
      if (e.response?.status === 401) {
        setInvalidLogin(true);
      } else if (e.response?.status === 400) {
        alert("Dados inválidos. Preencha com atenção.");
      } else {
        alert("Erro desconhecido. Tente novamente");
      }
    });
  }
}
const Button = styled.button`
  height: 46px;
  width: 100%;

  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #47597e;

  border-radius: 5px;
  border: none;
`;

const IncorrectDataWarning = styled.label`
  display: block;
  margin-bottom: 10px;
  text-align: center;
  color: red;
`;

const DotsLoader = (
  <Loader type="ThreeDots" color="#00BFFF" height={40} width={40} />
);
