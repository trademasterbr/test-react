import React from 'react'
import { AppBar, Toolbar, Box, Typography, Button } from '@material-ui/core'
import { useAuth } from '../../hooks/auth'
import Logo from '../../assets/images/logo.png'
import './style.scss'
import { useHistory } from 'react-router-dom'
interface Props {
  children: React.ReactNode
}
const MainPage = (props: Props) => {
  const { children } = props
  const history = useHistory()
  const { signOut } = useAuth()
  return (
    <>
      <AppBar position="static" className="PagePrincipal">
        <Toolbar>
          <Box display="flex" flex={4} onClick={() => history.push('/home')}>
            <img className="IconPrincipal" src={Logo} />
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
          <Box display="flex" flex={2}>
            <Typography className="TextButtons">
              Olá, {localStorage.getItem('@TradeMaster:user')}
            </Typography>
          </Box>
          <Box display="flex" flex={1}>
            <Typography
              className="LogoutButtonPrincipal"
              onClick={() => signOut}
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
