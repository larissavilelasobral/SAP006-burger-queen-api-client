import React from "react";
import "../ItemCard/CardPedido.css"

const CardPedido = (props) => {
  return (
    <div className="card">
      <div>
        <img src={props.image} className="card-img" />
          <div className="card-body">
            <h2 className="card-title">{props.name}</h2>
            <h2 className="card-price">{props.price}</h2>
            <button className="btn-success">Adicionar ao Carrinho</button>
          </div>
      </div>
    </div>
  );
};

export default CardPedido;