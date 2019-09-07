import React, { useState } from "react";

const ModalContext = React.createContext([{}, () => {}]);

const ModalProvider = props => {
  const [state, setState] = useState({
    open: false,
    activePokemon: {}
  });

  return (
    <ModalContext.Provider value={[state, setState]}>
      {props.children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
