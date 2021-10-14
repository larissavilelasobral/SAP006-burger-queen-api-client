import "./Button.css";

const ButtonLogin = ({children, className, onClick, id, btnType}) => {
  return (
    <button id={id} type={btnType} className={className} onClick={onClick}>
      {children}
    </button> 
  );
};

export default ButtonLogin;