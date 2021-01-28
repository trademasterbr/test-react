import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@material-ui/core'

import MainPage from '../../components/main-page'
import { showToast } from '../../components/toast'

import Ajuda from './teste.json'
import './style.scss'
import api from '../../utils/api'

const PaginaAjuda = () => {
  const [textAjuda, setTextAjuda] = useState(Ajuda)
  let splitText = textAjuda.Ajuda.split('\n')

  useEffect(() => {
    try {
      api.get('/ajuda')
    } catch (error) {
      showToast({
        type: 'error',
        message: error,
      })
    }
  }, [])
  return (
    <MainPage>
      <Box className="PageAjuda">
        <Typography className="TitleAjuda">Ajuda</Typography>
        <Box className="ContainerAjuda">
          {splitText.map((paragraph: string) => (
            <Typography className="TextAjuda" key={Math.random()}>
              {paragraph}
            </Typography>
          ))}
        </Box>
      </Box>
    </MainPage>
  )
}

export default PaginaAjuda
