import "./index.css"

export default function NodeAVL({ node }) {

  if (!node) return <></>;

  return (
    <div>
      <div className={`node ${ node.hasChild ? '' : 'last' } ${ node.hasParent ? '' : 'first' } ${ node.left && !node.right ? 'half' : ''}`}>
        <span>{ node.key }</span>
      </div>
      { (() => {
          if (node.hasChild)
          return (
            <div className="flex">
              { node.left ? <NodeAVL node={node.left} /> : <div></div> }
              { node.right ? <NodeAVL node={node.right} /> : <div></div> }
            </div>
          )
      })() }
    </div>
  )
}