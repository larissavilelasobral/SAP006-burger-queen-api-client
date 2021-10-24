import React from 'react';

function OrdersCozinha({
  id,
  client_name,
  table,
  children,
}) {
  return (
    <>
      <section className="order-container" key={id}>
        <div className="header-orders">
          <h2 className="table"> Mesa: {table}</h2>
          <h2 className="nome"> Cliente: {client_name}</h2>
        </div>
        <div className="list-orders">
          {children}
        </div>
      </section>
    </>
  );
}

export default OrdersCozinha;