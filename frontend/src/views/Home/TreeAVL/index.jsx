import NodeAVL from './NodeAVL';

export default function TreeAVL({ tree }) {

  return (
    <div className="card">
      <h3>Gerar Árvore AVL</h3>
      <div>
        <NodeAVL node={ tree } /> 
      </div>
    </div>
  )
}