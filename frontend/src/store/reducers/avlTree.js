function setTree(AVLTree) {

  const loadTree = node => ({
    key: node.key,
    hasParent: !!node.parent,
    hasChild: !!(node.left || node.right),
    ...(node.left ? { left: loadTree(node.left) } : {}),
    ...(node.right ? { right: loadTree(node.right) } : {}),
  })

  return AVLTree.isEmpty() ? null : loadTree(AVLTree._root); 
}

export default function avlTreeReducer(state, action) {

  switch(action.type) {
    case 'setNodesNumber':
      console.log(state._AVLTree)
      state._AVLTree.clear();
      state._AVLTree.load(Array(action.payload).fill().map((x, i) => i));
      return { 
        ...state,
        tree: setTree(state._AVLTree),
        nodesNumber: action.payload
      }
    default: 
      return state
  }

}