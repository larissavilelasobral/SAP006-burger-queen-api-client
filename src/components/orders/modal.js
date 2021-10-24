import React from 'react';
import ReactDom from 'react-dom';

const portalRoot = document.getElementById('portal-root');

function ModalMsg({
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
    portalRoot,

  );
}

export default ModalMsg;