import React, { useState } from "react"
import "./InputRegister.css";

const InputRegister = (props) => {
  console.log(props);
  // const [fname, setFname] = useState("")

  // const handleChange = e => {
  //   setFname(e.target.value)
  // }

  return (
    <>
    <form>
    <div className="float-label">
        <input type="nome" />
        <label htmlFor="nome">
        Nome
        </label>
      </div>
      <div className="float-label">
        <input type="email" />
        <label htmlFor="email">
        E-mail
        </label>
      </div>
  
      <div className="float-label">
        <input type="senha" />
        <label htmlFor="senha">
        Senha
        </label>
      </div>

      <div className="float-label">
        <input type="confirmar-senha" />
        <label htmlFor="confirmar-senha">
        Confirmar Senha
        </label>
      </div>

      <label className="role" htmlFor="cozinha">Cozinha</label>
      <input className="InputRole" type="checkbox" />

      <label className="role" htmlFor="garcom">Garçom</label>
      <input className="InputRole" type="checkbox" />
    </form>
    </>
  );
};

export default InputRegister;