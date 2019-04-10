import React from 'react';


export default (adt, transformations) => {
  const Context = React.createContext();
  return {
    ...adt,
    Consumer: Context.Consumer,
    Provider: props => (
      <Context.Provider value={{
        ...props.scope.state,
        applyCB: event => () => props.scope.setState(
          event.cata(transformations)(props.scope.state)),
        apply: event => props.scope.setState(
          event.cata(transformations)(props.scope.state))
      }}>
        {props.children}
      </Context.Provider>
    ),
    Context
  };
};
