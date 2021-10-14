import React, { useState } from "react"
import { useHistory } from 'react-router-dom';
import Header from '../../components/HeaderLogin/Header'
import ButtonLogin from '../../components/ButtonLogin/Button'
import { authLogin } from '../../services/auth'

import "./Login.css";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  
  const item = {email, password}

  const buttonAuthLogin = (e) => {
    authLogin(e, {item})
    .then((result) => {
      localStorage.setItem('userToke', result.token);
      localStorage.setItem('userName', result.name);
      history.push('/hall')
      console.log('Login realizado com sucesso!')
    })
    .catch(() => {
      console.log('Usuárie não encontrado!')
    })
  }
  return (
    <div className="containerLogin">
      <Header />
      <form>
        <div className="float-label">
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="email">
            E-mail
          </label>
        </div>

        <div className="float-label">
          <input type="password" onChange={(e) => setpassword(e.target.value)}/>
          <label htmlFor="password">
            Senha
          </label>
        </div>
      </form>
      <ButtonLogin 
        className = "btn-login"
        onClick = {(e) => buttonAuthLogin(e, {item})} 
        children = 'ENTRAR'
      /> 
      <button className="register-btn" onClick={() => {
      history.push("/register");
      }}>Ou Registra-se</button> 
    </div>
  )
}

export default Login
