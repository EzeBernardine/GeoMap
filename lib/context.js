import React, { createContext } from "react";

export let Context = createContext();

export function ProviderContext(props) {
  const [state, setState] = React.useState({});

  let value = [state, setState];
  return <Context.Provider value={value} {...props} />;
}

export function UseContext() {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error("UseContext must be used within a ProviderContext");
  }
  return context;
}
