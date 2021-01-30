import React, { useState, useEffect } from 'react'
import { Box, TextField } from '@material-ui/core'
import { TextFieldType } from '../../models/enums'

import './style.scss'

interface Props {
  label: string
  value: string
  maxLength?: number
  type?: TextFieldType
  placeholder?: string
  obrigatorio?: boolean
  dispararErro?: boolean
  multiline?: boolean
  rows?: number
  select?: boolean
  disabled?: boolean
  fullWidth?: boolean
  children?: React.ReactNode
  onChange: (value: string) => void
  onEnterPress?: () => void
  onBlurFormatValue?: (value: string) => void
}

const TextFieldDefault = (props: Props) => {
  const {
    type = TextFieldType.TEXT,
    label,
    placeholder,
    obrigatorio,
    value,
    onChange,
    dispararErro,
    maxLength,
    multiline,
    rows,
    select,
    disabled,
    fullWidth,
    children,
    onEnterPress,
  } = props

  const [estilo, setEstilo] = useState('Normal')
  const [mensagemErro, setMensagemErro] = useState('')

  const setarValorPadrao = () => {
    setEstilo('Normal')
    setMensagemErro('')
  }

  const validarEmail = (value: string) => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(value)
  }

  const validarPorTipoAoSair = () => {
    switch (type) {
      case TextFieldType.EMAIL:
        if (!validarEmail(value)) {
          setEstilo('Erro')
          setMensagemErro('E-mail inválido.')
        }
        break
      case TextFieldType.PASSWORD:
        validarPoliticaSenha(value)
        break
    }
  }

  const validarObrigatoriedade = () => {
    if (obrigatorio && !value) {
      setMensagemErro('Campo obrigatório.')
      setEstilo('Erro')
      return false
    }
    return true
  }

  const validarPoliticaSenha = (senha: string) => {
    if (senha.length === 0) {
      setMensagemErro('Senha não pode ser vazia.')
      setEstilo('Erro')
    }
  }

  useEffect(() => {
    if (dispararErro) {
      validarObrigatoriedade()
    }
  }, [dispararErro])

  const executarAoSair = () => {
    setarValorPadrao()
    if (validarObrigatoriedade()) {
      validarPorTipoAoSair()
    }
  }

  return (
    <Box className="TextFieldDefault">
      <TextField
        multiline={multiline}
        className={estilo}
        label={label}
        InputLabelProps={{
          shrink: true,
        }}
        rows={rows}
        select={select}
        fullWidth={fullWidth}
        disabled={disabled}
        inputProps={{ maxLength: maxLength }}
        style={{ borderWidth: '1px' }}
        margin="normal"
        placeholder={placeholder}
        onChange={event => {
          onChange(event.target.value)
        }}
        value={value}
        type={type}
        helperText={mensagemErro}
        onFocus={() => setEstilo('Focado')}
        onBlur={executarAoSair}
        onKeyPress={ev => {
          if (ev.key === 'Enter' && onEnterPress) {
            onEnterPress()
            ev.preventDefault()
          }
        }}
      >
        {children}
      </TextField>
    </Box>
  )
}

export default TextFieldDefault
