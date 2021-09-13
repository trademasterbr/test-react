export default function TreeControl({ nodesNumber, setNodesNumber }) {

  return (
    <div className="card">
      <h4>Quantidade de Nós</h4>
      <input type="number" value={ nodesNumber }
        onChange={ e => setNodesNumber(+e.target.value) } />
    </div>
  )
}