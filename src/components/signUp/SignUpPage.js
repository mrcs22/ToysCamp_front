import { useState } from "react";
import Container from "../general/Container";
import Logo from "../general/Logo";
import InputsHolder from "../general/InputsHolder";
import TextInput from "../general/TextInput";
import Button from "../general/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function SignUpPage() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <Container>
      <Logo />
      <InputsHolder onSubmit={trySignUp}>
        <TextInput
          type="text"
          required
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          type="email"
          required
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          type="password"
          required
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextInput
          type="password"
          required
          placeholder="Confirme a senha"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <Button type="submit" value="Cadastrar" />
      </InputsHolder>
    </Container>
  );

  function trySignUp(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return alert("As senhas devem ser iguais!");
    }

    const promise = axios.post("http://localhost:4000/sign-up", {
      name,
      email,
      password,
    });

    promise.then(() => {
      alert("cadastrado com sucesso!");
      history.push("/");
    });

    promise.catch((e) => {
      if (e.response?.status === 409) {
        alert("Email já cadastrado. Faça login, ou cadastre outro email.");
      } else if (e.response?.status === 400) {
        alert("Dados inválidos. Preencha com atenção.");
      } else {
        alert("Erro desconhecido. Tente novamente");
      }
    });
  }
}
