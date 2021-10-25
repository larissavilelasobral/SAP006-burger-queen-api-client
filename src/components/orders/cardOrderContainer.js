import React from 'react';
import ReactDom from 'react-dom';

function cardOrderContainer({
  msg, children, isOpen, onclick,
}) {
  if (!isOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <overlay>
        <content>
          <h2>{msg}</h2>
          {children}
          {onclick}
        </content>
      </overlay>
    </>,
  );
}

export default cardOrderContainer;