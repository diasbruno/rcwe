# rcwe documentation

## first steps

add daggy and rcwe to your project.

    npm install --save daggy rcwe

## usage

### creating the types

see daggy's documentation to learn you to create your types.

[https://github.com/fantasyland/daggy](https://github.com/fantasyland/daggy)

### creating a rcwe context

rcwe consists of a single function which is responsible to create
everything needed.

create the new types is easy:

```
import daggy from 'daggy';

const Events = daggy.taggedSum('Events', {
  Increment: ['n'],
  Decrement: ['n']
});
```

now, we are ready to create the context.

```
import RCWE from 'rcwe';

const {
  Context, Consumer, Provider,
  Increment, Decrement
} = RCWE(Events, {
  Increment: (...args) => state => ({ count: state.count + 1 }),
  Decrement: (...args) => state => ({ count: state.count - 1 })
});
```

what rcwe has returned:

- Increment and Decrement: The created types reexported.
- Context: The same context returned by `React.createContext`.
- Consumer: The same consumer from the context above.
- Provider: Here is the trick.

### provider

this provider expects a `scope`, the instance of the component where the state
is. The value is assumed from the state of the scope.

From our example:

```
class App extends React.Component {
  state = { count: 0 };

  render() {
    return (
      <Provider scope={this}>
        ...
      </Provider>
    );
  }
}
```

it will provide to the consumer 2 functions:

- apply: Execute immediatelly, so not good for callback.

```
<button onClick={() => apply(Increment(1))}>Increment</button>
```

- applyCB: which delays the execution to be used as a callback.

```
<button onClick={applyCB(Increment(1))}>Increment</button>
```

### consumer

from our example, this is how you can consume from the created context:

```
const View = props => (
  <Consumer>
    {({ count, apply, applyCB }) => (
      <div>
        <p>{count}</p>
        <button onClick={applyCB(Increment(1))}>Increment</button>
        <button onClick={() => apply(Decrement(1))}>decrement</button>
      </div>
    )}
  </Consumer>
);
```
