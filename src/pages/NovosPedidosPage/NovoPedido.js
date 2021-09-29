import React from 'react'

import { useHistory } from "react-router-dom";
import "./NovoPedido.css";
const NovoPedido = () => {
  const history = useHistory();
  return (
    
    <div className="novo-pedido">
      <h1>NovoPedido</h1>
      <div className="cardapio">
 
      </div>
    </div>
  )
}

export default NovoPedido;