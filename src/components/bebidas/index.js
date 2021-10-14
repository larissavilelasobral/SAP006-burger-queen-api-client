import { CardapioCard } from '../../services/Cardapio';
import { useState, useEffect } from 'react';
import "./index.css"
const PedidosBebidas = () => {
    const [drinkList, setDrinkList] = useState([]);
    
    useEffect(() => {
      CardapioCard()
            .then((json) => {
              setDrinkList(json.filter((item) => item.sub_type === 'drinks'));
            })
            
    }, [])

    return (
        <div className="menu-completo">
            <h1>Drinks</h1>
            <>
                {drinkList.map((item) => (
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

export default PedidosBebidas;