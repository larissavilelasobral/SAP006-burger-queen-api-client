import React from "react";
import ButtonLogin from "../ButtonLogin/Button";


export function Burger({
  divOnClick,
  divClassName,
  divKey,
  divName,
  divId,
  divPrice,
  itemPrice,
  itemName,
  itemNameKey,
  itemPriceKey,
  itemFlavor,
  itemComplement,
}) {
  return (
    <>
      <div
        className={divClassName}
        key={divKey}
        name={divName}
        id={divId}
        price={divPrice}
      >
{/* children, className, onClick, id, btnType */}
        <section className="burger-info">
          <h1 className="divBurger" key={itemNameKey}>
            <span className="itemName"> {itemName} </span>
            {itemPriceKey} {itemFlavor} {itemComplement} R$ {itemPrice},00{" "}
            <ButtonLogin onClick={divOnClick} className="addBtn" children="✛" />
          </h1>
        </section>
        </div>
       
    </>
  );
}