import React from "react";
import ButtonLogin from "../ButtonLogin/Button";

export function Products({
  divOnClick,
  divClassName,
  divKey,
  divName,
  divId,
  divPrice,
  itemName,
  itemPrice,
  itemNameKey,
  itemPriceKey,
  itemFlavor,
  ImgSrc,
  itemComplement
}) {
  return (
    <>
      <div className={divClassName} key={divKey} name={divName} id={divId} price={divPrice}>
        <section className="product-info">
          <img src={ImgSrc} className="img-food" alt="img-food"></img>
      
        <h1 className="divName" key={itemNameKey}> 
          {itemName} {itemPriceKey} {itemFlavor} {" "} {itemComplement} R$ {itemPrice},00 <ButtonLogin onClick={divOnClick} className="addBtn"  children="✛" />
        </h1>
        </section>

      </div>
    </>
  );
}