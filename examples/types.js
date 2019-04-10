import { taggedSum } from 'daggy';

export default taggedSum('Events', {
  Increment: ['n'],
  Decrement: ['n']
});
