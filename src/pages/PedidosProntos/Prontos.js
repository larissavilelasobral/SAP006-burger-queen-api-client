import React, { useState, useEffect } from 'react';
import OrdersArea from '../../components/orders/Area';
import OrdersKitchen from '../../components/orders/OrdersCozinha';
import OrdersProducts from '../../components/orders/produtos';
import ButtonLogin from '../../components/ButtonLogin/Button';
import OrdersMsg from '../../components/orders/modal';
import {
  requestAllOrders, changeStatusSallon, btnStatusSaloon,
} from '../../services/ordersSer';
import BtnVolta from '../../components/BtnVolta/BtnVolta';

function OrdersSaloon() {
  const [ordersDone, setOrdersDone] = useState([]);

  const filterOrdersDone = () => {
    requestAllOrders()
      .then((json) => {
        const allOrders = json.filter((item) => item.status === 'ready');
        return setOrdersDone(allOrders);
      });
  };

  useEffect(() => {
    filterOrdersDone();
  }, []);

  return (
    <>
      <BtnVolta className="btn-pronto"/>
      {ordersDone.length > 0 ? (
        <OrdersArea
          msg="Pedidos Prontos"
        >
          {ordersDone.map((item, index) => (
            <OrdersKitchen
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
                onClick={() => changeStatusSallon(item.id, item.status)
                  .then((response) => {
                    const changedOrders = [...ordersDone];
                    changedOrders[index].status = response.status;
                    setOrdersDone(changedOrders);
                  })}
              >
                {btnStatusSaloon(item.status)}
              </ButtonLogin>
            </OrdersKitchen>
          ))}
        </OrdersArea>

      ) : (
        <OrdersMsg
          
        >
          Não se preocupe, temos um salão inteiro para você limpar.
        </OrdersMsg>
      ) }

    </>

  );
}

export default OrdersSaloon;