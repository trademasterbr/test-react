import React, { Component } from 'react'
import './App.css'
import BinarySearchTree from './classes/BinarySearchTree.js'
import BinarySearchTreeNode from './components/BinarySearchTreeNode.js'
import { Box, Button, Typography } from '@material-ui/core'
import { showToast } from '../../components/toast'
class AvlTree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      insertValue: '',
      deleteValue: '',
      previewContent: '',
      treeIsCreate: false,
      tree: new BinarySearchTree(),
    }
    this.insert = this.insert.bind(this)
    this.delete = this.delete.bind(this)
    this.resetActiveStatusOfNodes = this.resetActiveStatusOfNodes.bind(this)
    this.resetPreviewContent = this.resetPreviewContent.bind(this)
    this.onChangeInsertValue = this.onChangeInsertValue.bind(this)
  }

  resetPreviewContent() {
    this.setState({
      previewContent: '',
    })
  }

  resetActiveStatusOfNodes() {
    this.state.tree.traverseInOrder(this.state.tree.root, function(node) {
      node.active = false
    })
  }

  onChangeInsertValue(event) {
    this.resetActiveStatusOfNodes()
    this.resetPreviewContent()
    this.setState({
      insertValue: parseInt(event.target.value),
    })
    this.setState({
      deleteValue: parseInt(event.target.value),
    })
  }

  insert() {
    this.setState({
      treeIsCreate: true,
    })
    if (this.state.insertValue <= 9999) {
      for (var i = 1; i <= this.state.insertValue; i++) {
        console.log(this.state.tree)
        this.resetActiveStatusOfNodes()
        this.resetPreviewContent()
        this.state.tree.insert(i)
        this.setState({
          insertValue: '',
        })
      }
    } else
      showToast({
        type: 'error',
        message: 'Quantidade de nós maior que a permitida',
      })
  }

  delete() {
    this.setState({
      treeIsCreate: false,
    })
    for (var i = 1; i <= this.state.deleteValue; i++) {
      this.resetActiveStatusOfNodes()
      this.resetPreviewContent()
      this.state.tree.delete(i)
      this.setState({
        deleteValue: '',
      })
    }
  }

  render() {
    const hasRootNode = this.state.tree.root
    return (
      <>
        <div id="app">
          <Box display="flex" flex={3}>
            <div id="basic-actions">
              <div className="action">
                <Typography>Quantidade de nós</Typography>
                <input
                  disabled={this.state.treeIsCreate ? true : false}
                  value={this.state.insertValue}
                  onChange={this.onChangeInsertValue}
                  type="number"
                />
                <Button
                  disabled={this.state.treeIsCreate ? true : false}
                  onClick={this.insert}
                  className="AVLButtons"
                >
                  Gerar Árvore
                </Button>
                <Button
                  disabled={this.state.treeIsCreate ? false : true}
                  onClick={this.delete}
                  className="AVLButtons"
                >
                  Nova Árvore
                </Button>
              </div>
            </div>
          </Box>
          <Box display="flex" flex={6}>
            <div id="tree" className="tree">
              {hasRootNode ? (
                <ul>
                  <BinarySearchTreeNode
                    node={this.state.tree.root}
                    nodeType="root"
                  />
                </ul>
              ) : (
                <>
                  <h5>
                    Nenhuma árvore criada adicione a quantidade de nós para
                    gerar uma árvore
                  </h5>
                  <h6>(Máximo 4 caracteres)</h6>
                </>
              )}
            </div>
          </Box>
        </div>
      </>
    )
  }
}

export default AvlTree
