import { useState } from "react";
import Container from "../general/Container";
import Logo from "../general/Logo";
import InputsHolder from "../general/InputsHolder";
import TextInput from "../general/TextInput";

import axios from "axios";
import { useHistory } from "react-router-dom";
import AuthPageLink from "../general/AuthPageLink";
import Loader from "react-loader-spinner";
import styled from "styled-components";

export default function SignUpPage() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  return (
    <Container>
      <Logo />
      <InputsHolder onSubmit={trySignUp}>
        {invalidEmail && (
          <IncorrectDataWarning>
            Este email já está em uso.
          </IncorrectDataWarning>
        )}
        <TextInput
          disabled={isSigningUp}
          type="text"
          required
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isValueValid={name.length > 2}
          isInputFilled={name.length > 0}
        />
        <TextInput
          disabled={isSigningUp}
          type="email"
          required
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isValueValid={email.includes("@") && email.length > 2}
          isInputFilled={email.length > 0}
        />
        <TextInput
          disabled={isSigningUp}
          type="password"
          required
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isValueValid={password.length > 5}
          isInputFilled={password.length > 0}
        />
        <TextInput
          disabled={isSigningUp}
          type="password"
          required
          placeholder="Confirme a senha"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          isValueValid={passwordConfirm === password}
          isInputFilled={passwordConfirm.length > 0}
        />
        <Button disabled={isSigningUp} type="submit">
          {isSigningUp ? DotsLoader : "Cadastrar"}
        </Button>
      </InputsHolder>
      <AuthPageLink
        text={"Possui uma conta? Faça login aqui!"}
        path={"/sign-in"}
      />
      <AuthPageLink text={"Voltar para home"} path={"/"} />
    </Container>
  );

  function trySignUp(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return alert("As senhas devem ser iguais!");
    }

    setIsSigningUp(true);
    setInvalidEmail(false);

    const promise = axios.post("https://toyscamp.herokuapp.com/sign-up", {
      name,
      email,
      password,
    });

    promise.then(() => {
      setIsSigningUp(false);
      history.push("/sign-in");
    });

    promise.catch((e) => {
      setIsSigningUp(false);

      if (e.response?.status === 409) {
        setInvalidEmail(true);
      } else if (e.response?.status === 400) {
        alert("Dados inválidos. Preencha com atenção.");
      } else {
        alert("Erro desconhecido. Tente novamente");
      }
    });
  }
}

const IncorrectDataWarning = styled.label`
  display: block;
  margin-bottom: 10px;
  text-align: center;
  color: red;
`;

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

const DotsLoader = (
  <Loader type="ThreeDots" color="#00BFFF" height={40} width={40} />
);
