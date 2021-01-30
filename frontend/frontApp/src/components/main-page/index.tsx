import React from 'react'
import { AppBar, Toolbar, Box, Typography, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

import './style.scss'
interface Props {
  children: React.ReactNode
}
const MainPage = (props: Props) => {
  const { children } = props
  const history = useHistory()
  const currentUser = JSON.parse(localStorage.getItem('@tradeMaster:user'))

  const exitApplication = async () => {
    localStorage.removeItem('@tradeMaster:user')
    window.location.reload()
  }
  return (
    <>
      <AppBar position="static" className="PagePrincipal">
        <Toolbar>
          <Box display="flex" flex={4} onClick={() => history.push('/home')}>
            <img className="IconPrincipal" src={Logo} alt={'tradeMasterLogo'} />
          </Box>
          <Box display="flex" flex={20}>
            <Button
              className="TextButtons"
              onClick={() => history.push('/home')}
            >
              Home
            </Button>
            <Button
              className="TextButtons"
              onClick={() => history.push('/ajuda')}
            >
              Sobre
            </Button>
          </Box>
          <Box display="flex" flex={4}>
            <Typography className="TextButtons">
              Olá, {currentUser?.name}
            </Typography>
          </Box>
          <Box display="flex" flex={1}>
            <Typography
              className="LogoutButtonPrincipal"
              onClick={() => exitApplication()}
            >
              Sair
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </>
  )
}

export default MainPage
