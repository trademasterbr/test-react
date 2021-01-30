import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@material-ui/core'

import MainPage from '../../components/main-page'
import { showToast } from '../../components/toast'

import './style.scss'

const PaginaAjuda = () => {
  const [textAjuda, setTextAjuda] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/ajuda')
      .then(res => res.json())
      .then(
        result => {
          setTextAjuda(result.Ajuda.split('\n'))
        },
        error => {
          showToast({
            type: 'error',
            message: error,
          })
        }
      )
  }, [])
  return (
    <MainPage>
      <Box className="PageAjuda">
        <Typography className="TitleAjuda">Ajuda</Typography>
        <Box className="ContainerAjuda">
          {textAjuda ? (
            textAjuda.map((paragraph: string) => (
              <Typography className="TextAjuda" key={Math.random()}>
                {paragraph}
              </Typography>
            ))
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </MainPage>
  )
}

export default PaginaAjuda
