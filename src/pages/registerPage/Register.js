import React from 'react'
import ButtonLogin from '../../components/ButtonLogin/Button'
import Header from '../../components/HeaderLogin/Header'
import InputRegister from '../../components/InputRegister/InputRegister'

import { useHistory } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const history = useHistory();
  return (
    <div>
      <Header />
      <InputRegister />
      <ButtonLogin />
      <button className="login-btn" onClick={() => {
      history.push("/");
  }}>Fazer Login</button> 
    </div>
  )
}

export default Register
