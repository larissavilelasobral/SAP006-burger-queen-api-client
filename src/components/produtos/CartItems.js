const CartItems = ({
  itemName,
  itemPrice,
  itemQtd,
  itemFlavor,
  itemComplement,
  onClickAdd,
  onClickRemove,
}) => {
  return (
    <article className="menu-carrinho">
      <div className="caixa-menu">
        {itemQtd}-{itemName} {itemFlavor} {itemComplement}- R$ {itemPrice},00{" "}
        <p className="p-btn-items">
          {" "}
          <button className="btn-add-item" onClick={onClickAdd}><i class="fas fa-plus-circle"></i>➕</button>
          <button className="btn-removeone-item" onClick={onClickRemove}><i class="fas fa-minus-circle"></i>🗑️</button>
        </p>
      </div>
    </article>
  );
};

export default CartItems;