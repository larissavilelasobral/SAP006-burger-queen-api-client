import { useHistory } from "react-router-dom";

const ButtonLogin = (props) => {
  console.log(props);
  const history = useHistory();

  return (
    <button onClick={() => {
      history.push("/register");
  }}>Entrar</button> 
  );
};

export default ButtonLogin;