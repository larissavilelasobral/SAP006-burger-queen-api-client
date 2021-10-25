import React, { useState, useEffect } from 'react';
import './Cozinha.css';
import OrdersArea from '../../components/orders/Area';
import OrdersCozinha from '../../components/orders/OrdersCozinha';
import OrdersProducts from '../../components/orders/produtos';
import ButtonLogin from '../../components/ButtonLogin/Button';
import BtnVolta from '../../components/BtnVolta/BtnVolta';

import {
  requestAllOrders, btnTextStatus, changeStatusBtn,
} from '../../services/ordersSer';

function Cozinha() {
  const [orders, setOrders] = useState([]);
  console.log(orders)

  const filterOrders = () => {
    console.log('função de carregar orders')
    requestAllOrders()
      .then((json) => {
        const allOrders = json.filter((item) => item.status === 'processing' || item.status === 'pending');
        return setOrders(allOrders);
      });
  };

  useEffect(() => {
    filterOrders();
  }, []);

  return (
    <>
    <BtnVolta className="btn-pronto"/>
      <div className="container-Cozinha">
        {orders.length > 0 ? (
          <OrdersArea
            msg="Pedidos"
          >
            {orders.map((item, index) => (
              <OrdersCozinha
                key={item.id}
                table={item.table}
                client_name={item.client_name}
                status={item.status}
                createdAt={new Date(item.createdAt).toLocaleString('pt-br')}
                updatedAt={new Date(item.updatedAt).toLocaleString('pt-br')}
              >
                {item.Products.map((prod) => (
                  <OrdersProducts
                    key={prod.id}
                    name={prod.name}
                    flavour={prod.flavour}
                    complement={prod.complement}
                    qtd={prod.qtd}
                  />
                ))}
                <ButtonLogin
                  className="btn-status"
                  onClick={() => changeStatusBtn(item.id, item.status)
                    .then((response) => {
                      const changedOrders = [...orders];
                      changedOrders[index].status = response.status;
                      setOrders(changedOrders);
                    })}
                >
                  {btnTextStatus(item.status)}
                </ButtonLogin>
              </OrdersCozinha>
            ))}
          </OrdersArea>

        ) : (
        console.log('carregando')
        )}
      </div>
    </>

  );
}

export default Cozinha;