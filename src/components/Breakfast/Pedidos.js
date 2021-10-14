import { CardapioCard } from '../../services/Cardapio';
import { useState, useEffect } from 'react';
import "./Pedidos.css"

const PedidosCafe = () => {
    const [breakfastList, setBreakfastList] = useState([]);

    useEffect(() => {
      CardapioCard()
            .then((json) => {
              setBreakfastList(json.filter((item) => item.type === "breakfast"));
            })
    }, [])

    return (
        <div className="menu-completo">
            <h1>Breakfast</h1>
            <>
                {breakfastList.map((item) => (
                    <div key={item.id} className="card-pedido">
                        <h4 className="titulo">{item.name}</h4>
                        <span>
                          <img className="item-img" src={item.image}></img>
                        </span>
                        <p className="item-price">R${item.price},00</p>
                    </div>
                ))}
            </>
        </div>
    )
}

export default PedidosCafe;