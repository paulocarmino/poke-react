import React, { useState } from "react";

const GlobalContext = React.createContext([{}, () => {}]);

const GlobalProvider = props => {
  const [state, setState] = useState({
    searchTerm: "",
    detailsIsOpen: false,
    activePokemon: {}
  });

  return (
    <GlobalContext.Provider value={[state, setState]}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
