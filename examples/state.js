import RCWE from '../index';
import EventTypes from './types';

export default RCWE(EventTypes, {
  Increment: event => state => ({ count: state.count + event }),
  Decrement: event => state => ({ count: state.count - event })
});
