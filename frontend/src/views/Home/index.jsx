import { useReducer } from 'react';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import { initialState, reducer } from "../../store"

import './index.css';
import TreeAVL from './TreeAVL';
import TreeControl from './TreeControl';
import { setNodesNumber } from '../../store/actions';

function InitialPage() {

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('state', state);

  return (
    <div>
      <Header />
      <div className="container">
        <PageTitle>Gerar Árvore AVL</PageTitle>
        <div className="grid">
          <TreeControl nodesNumber={state.nodesNumber}
            setNodesNumber={number => setNodesNumber(dispatch, number)} />
          <TreeAVL tree={state.tree} />
        </div>
      </div>
    </div>
  );
}

export default InitialPage;