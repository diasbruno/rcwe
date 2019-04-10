import React from 'react';
import ReactDOM from 'react-dom';
import State from './state';

const {
  Context, Consumer, Provider,
  Increment, Decrement
} = State;

const View = props => (
  <Consumer>
    {({ count, apply, applyCB }) => (
      <div>
        <p>{count}</p>
        <button onClick={applyCB(Increment(1))}>Increment</button>
        <button onClick={() => apply(Decrement(1))}>Decrement</button>
      </div>
    )}
  </Consumer>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  render() {
    return (
      <Provider scope={this}>
        <View />
      </Provider>
    );
  }
}

ReactDOM.render((
 <App />
), document.getElementById("main"));
