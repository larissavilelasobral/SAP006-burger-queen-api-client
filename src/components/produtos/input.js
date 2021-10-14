import React from "react";
// import ReactDOM from 'react-dom';

const Input = ({ name, type, placeholder, value, onChange, className, }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      className={className}
      onChange={onChange}
    />
  );
};

export default Input;