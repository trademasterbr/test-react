import React, { useState } from 'react'
import { Button, Box } from '@material-ui/core'

import TextFieldDefault from '../../components/text-field-default'
import { TextFieldType } from '../../models/enums'
import { showToast } from '../../components/toast'

import Logo from '../../assets/images/logo.png'
import './style.scss'

const PaginaLogin = () => {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const [camposValidos, setCamposValidos] = useState(true)

  const currentDate = () => {
    var x = new Date()
    var y = x.getFullYear().toString()
    var m = (x.getMonth() + 1).toString()
    var d = x.getDate().toString()
    d.length === 1 && (d = '0' + d)
    m.length === 1 && (m = '0' + m)
    var yyyymmdd = y + m + d
    return yyyymmdd
  }

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
    fetch('http://localhost:8000/users')
      .then(res => res.json())
      .then(
        result => {
          if (
            senha === currentDate() &&
            result.find((user: any) => user.email === login)
          ) {
            const currenUser = result.find((user: any) => user.email === login)
            localStorage.setItem(
              '@tradeMaster:user',
              JSON.stringify(currenUser)
            )
            window.location.reload()
          } else {
            showToast({
              type: 'error',
              message:
                'Acesso Negado, Verifique se o usuário e senha condizem com credenciais válidas.',
            })
          }
        },
        error => {
          showToast({
            type: 'error',
            message: error,
          })
        }
      )
  }

  return (
    <Box className="PageLogin">
      <Box className="ContainerLogin">
        <img className="LogoLogin" src={Logo} alt={'tradeMasterLogo'} />
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
