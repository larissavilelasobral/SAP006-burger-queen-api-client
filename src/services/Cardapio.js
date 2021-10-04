// import "./Cardapio.css";

import CardPedido from "../components/ItemCard/CardPedido";

export const CardapioCard = () => {
  const token = localStorage.getItem('userToke');
  const url = 'https://lab-api-bq.herokuapp.com/products'
  const result = fetch(url , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
    })
    .then((result) => result.json())
  return result;
};