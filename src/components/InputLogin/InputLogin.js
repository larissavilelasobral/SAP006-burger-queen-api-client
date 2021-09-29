import React, { useState } from "react"
import "./InputLogin.css";

const InputLogin = (props) => {
  // console.log(props);
  // const [fname, setFname] = useState("")

  // const handleChange = e => {
  //   setFname(e.target.value)
  // }

  return (
    <>
    <form>
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
    </form>
    </>
  );
};

export default InputLogin;