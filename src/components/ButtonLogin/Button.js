import { useHistory } from "react-router-dom";
import "./Button.css";

const ButtonLogin = (props) => {
  console.log(props);
  const history = useHistory();

  return (
    <button classname="btn login" onClick={() => {
      history.push("/Home");
  }}>Entrar</button> 
  );
};

export default ButtonLogin;