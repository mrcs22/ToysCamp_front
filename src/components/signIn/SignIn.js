import { useState } from "react";
import Container from "../general/Container";
import Logo from "../general/Logo";
import InputsHolder from "../general/InputsHolder";
import TextInput from "../general/TextInput";
import Button from "../general/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function SignInPage({ setUser }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Logo />
      <InputsHolder onSubmit={trySignIn}>
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

        <Button type="submit" value="Entrar" />
      </InputsHolder>
    </Container>
  );

  function trySignIn(e) {
    e.preventDefault();

    const promise = axios.post("http://localhost:4000/sign-in", {
      email,
      password,
    });

    promise.then((res) => {
      localStorage.setItem("toysCampUserData", JSON.stringify(res.data));
      setUser(res.data);
      history.push("/");
    });

    promise.catch((e) => {
      if (e.response?.status === 401) {
        alert("Email e/ou senha incorretos. Tente novamente.");
      } else if (e.response?.status === 400) {
        alert("Dados inválidos. Preencha com atenção.");
      } else {
        alert("Erro desconhecido. Tente novamente");
      }
    });
  }
}
