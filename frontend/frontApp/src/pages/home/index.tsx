import React from 'react'
import { Box, Typography } from '@material-ui/core'

import MainPage from '../../components/main-page'
import AvlTree from '../../components/avl-tree/App'

import './style.scss'

const PaginaHome = () => {
  return (
    <MainPage>
      <Box className="PageHome">
        <Typography className="TitleHome">Gerar Árvore AVL</Typography>
        <AvlTree />
      </Box>
    </MainPage>
  )
}

export default PaginaHome
