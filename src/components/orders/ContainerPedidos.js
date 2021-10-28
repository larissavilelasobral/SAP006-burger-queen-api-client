import React from 'react';
import "./Area.css";

function OrdersArea({ msg, children }) {
  return (
    <>
      <header className="header-order"> {msg} </header>
      <section className="Section-order">
        {children}
      </section>
    </>
  );
}

export default OrdersArea;