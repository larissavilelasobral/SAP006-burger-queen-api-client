import React from 'react'
import Header from '../../components/HeaderLogin/Header'
import ButtonLogin from '../../components/ButtonLogin/Button'
import InputLogin from '../../components/InputLogin/InputLogin'

import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  return (
    <div className="containerLogin">
      <Header />
      <InputLogin />
      <ButtonLogin />
      <button className="register-btn" onClick={() => {
      history.push("/register");
  }}>Ou Registra-se</button> 
    </div>
  )
}

export default Login
