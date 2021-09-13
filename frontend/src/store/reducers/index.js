import avlTreeReducer from './avlTree';

export default function reducer(state, action) {
  state = avlTreeReducer(state, action);
  return state;

}