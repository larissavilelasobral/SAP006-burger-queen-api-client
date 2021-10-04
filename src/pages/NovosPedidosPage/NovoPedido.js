import React from 'react'
import { useHistory } from 'react-router-dom';
import ButtonLogin from '../../components/ButtonLogin/Button';
import { CardapioCard } from '../../services/Cardapio';

import "./NovoPedido.css";
const NovoPedido = () => {
  const history = useHistory();
  const buttonOut = () => {
    history.push('/')
    console.log('btn sair')
  }
  const buttonCafe = () => {
    CardapioCard()
    console.log('btn Café da Manhã')
    }
  return (
    <div className="novo-pedido">
      <div className="nav-menu">
        <ul>
          <li> <ButtonLogin 
            className = "btn-cafe nav"
            onClick = {() => buttonCafe()} 
            children = 'Café da Manhã'
            />
          </li>
          {/* <li> <ButtonLogin 
            className = "btn-dia-todo nav"
            onClick = {} 
            children = 'Restante do Dia'
            />
          </li> */}
          <li> <ButtonLogin 
            className = "btn-out"
            onClick = {() => buttonOut()} 
            children = 'SAIR'
            />
          </li>
        </ul>
      </div>
      <main>
        <div className="cardapio">
          <h1>Cardapio</h1>
        </div>
        <div className="carrinho">
          <h1>Carrinho de Compras</h1>
        </div>
      </main>
    </div>
  )
}

export default NovoPedido;