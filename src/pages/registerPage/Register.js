import React, { useState } from 'react'
import ButtonLogin from '../../components/ButtonLogin/Button'
import Header from '../../components/HeaderLogin/Header'
import { authRegister } from '../../services/auth'

import { useHistory } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const history = useHistory();

  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const [role, setRole] = useState("");

  const item = {email, password, passwordConfirm, role, name}
  
  const buttonAuthRegister = (e) => {
    authRegister(e, {item})
    .then((result) => {
      localStorage.setItem('userToke', result.token);
      localStorage.setItem('userName', result.name);
      localStorage.setItem('userRole', result.role);
      localStorage.setItem('userEmail', result.email);
      if (passwordConfirm === password){
        history.push('/hall')
        console.log('registro realizado com sucesso!')
      } else {
        console.log('senhas erradas')
      }
    })
    .catch(() => {
      console.log('Usuárie não encontrado!')
    })
  }
  return (
    <div>
      <Header />
      <form>
      <div className="float-label">
          <input type="name" onChange={(e) => setname(e.target.value)}/>
          <label htmlFor="name">
            Nome
          </label>
        </div>

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
        <div className="float-label">
          <input type="passwordConfirm" onChange={(e) => setpasswordConfirm(e.target.value)}/>
          <label htmlFor="passwordConfirm">
            Confirmar Senha
          </label>
        </div>

        <div onChange={(e) => setRole(e.target.value)}>
          <input type="radio" className="radio" value="kitchen" name="kitchen"/> Cozinha
          <input type="radio" className="radio" value="room" name="room"/> Salão
        </div>
      </form>
      
      <ButtonLogin 
        className = "btn-register"
        onClick = {(e) => buttonAuthRegister(e, {item})} 
        children = 'Fazer Login'
      /> 
      <button className="register-btn" onClick={() => {
      history.push("/");
      }}>Volta</button> 
    </div>
  )
}

export default Register
