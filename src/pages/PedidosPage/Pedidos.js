import { CardapioCard } from '../../services/Cardapio';
import { useState, useEffect } from 'react';
import "./Pedidos.css"
const Pedidos = () => {
    const [pedidos, setPedidos] = useState([]);
    console.log(pedidos)
    useEffect(() => {
      CardapioCard()
            .then((json) => setPedidos(json))
    }, [])

    return (
        <div className="menu-completo">
            <h1>Pedidos</h1>
            <>
                {pedidos.map((item) => (
                    <div key={item.id} className="card-pedido">
                        <h4 className="titulo">{item.name}</h4>
                        <span>
                          <img className="item-img" src={item.image}></img>
                        </span>
                        <p className="item-price">R${item.price},00</p>
                        {/* <p className="item-type">{item.type}</p> */}
                    </div>
                ))}
            </>

        </div>
    )
}

export default Pedidos;