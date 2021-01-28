import React, { useState, useEffect } from 'react'
import { Button, Typography, Box } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '../../hooks/auth'
import TextFieldDefault from '../../components/text-field-default'
import { TextFieldType } from '../../models/enums'
// eslint-disable-next-line

import './style.scss'
import Logo from '../../assets/images/logo.png'

const PaginaLogin = () => {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const [camposValidos, setCamposValidos] = useState(true)
  const { signIn } = useAuth()
  const handleAcessarClickAsync = async () => {
    setCamposValidos(true)

    if (!login) {
      setCamposValidos(false)
      return
    }

    if (!senha) {
      setCamposValidos(false)
      return
    }
    try {
      signIn({ email: login, password: senha })
    } catch (err) {
      console.log(err)
    }
  }

  const verificarUsuarioLogado = () => {
    const usuarioStorage = localStorage.getItem('@conv-audit/usuario')

    if (!usuarioStorage) {
      return
    }

    const usuario = JSON.parse(usuarioStorage)
    setLogin(usuario.login)
  }

  return (
    <Box className="PageLogin">
      <Box className="ContainerLogin">
        <img className="LogoLogin" src={Logo} />
        <Box className="TextInput">
          <TextFieldDefault
            type={TextFieldType.EMAIL}
            label="Usuário"
            placeholder="Insira seu Usuário"
            obrigatorio={true}
            value={login}
            onChange={value => setLogin(value)}
            dispararErro={!camposValidos}
            maxLength={100}
          />
        </Box>
        <Box className="TextInput">
          <TextFieldDefault
            type={TextFieldType.PASSWORD}
            label="Senha"
            placeholder="Insira sua senha de acesso"
            obrigatorio={true}
            value={senha}
            maxLength={18}
            onChange={value => setSenha(value)}
            onEnterPress={handleAcessarClickAsync}
            dispararErro={!camposValidos}
          />
        </Box>
        <Box>
          <Button
            className="ButtonLogin"
            variant="contained"
            color="primary"
            size="medium"
            onClick={handleAcessarClickAsync}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default PaginaLogin
