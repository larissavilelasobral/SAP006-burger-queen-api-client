import "./Button.css";

const ButtonLogin = ({children, className, onClick}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button> 
  );
};

export default ButtonLogin;