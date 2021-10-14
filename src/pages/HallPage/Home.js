import React from 'react'
import Header from '../../components/HeaderLogin/Header'
import { useHistory } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const history = useHistory();
  return (
    
    <div className="menu">
      <Header />
      <button className="todos-pedidos-btn" onClick={() => {
      history.push("/pedidos");
       }}>Visualizar Pedidos</button> 
      <button className="novo-pedido-btn" onClick={() => {
      history.push("/novo");
      }}>Fazer Novo Pedido</button> 
      <button className="cozinha-btn" onClick={() => {
      history.push("/cozinha");
      }}>Cozinha</button> 
    </div>
  )
}

export default Home