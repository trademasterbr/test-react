export function setNodesNumber(dispatch, number) {
  number = +number;
  if (number <= 0) return;
  console.log('number', number);
  dispatch({ type: 'setNodesNumber', payload: number });
}

export function loadTree(dispatch, keys, values) {
  dispatch({ type: 'loadTree', payload: { keys, values } });
}