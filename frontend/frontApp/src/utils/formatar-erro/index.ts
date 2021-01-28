const formatarMensagemErro = async (error: Response) => {
  let mensagemErro = ''
  switch (error.status) {
    case 500:
      mensagemErro = `Erro no servidor, comunique a equipe de suporte. ${error.statusText}`
      break
    case 503:
      mensagemErro = `Servidor indisponível, comunique a equipe de suporte. ${error.statusText}`
      break
    case 504:
      mensagemErro = `Falha na comunicação com servidor, comunique a equipe de suporte. ${error.statusText}`
      break
    case 400:
      mensagemErro = `Erro geral, comunique a equipe de suporte. ${error.statusText}`
      break
    case 404:
      mensagemErro = `Não encontrado. ${error.statusText}`
      break
    case 401:
      mensagemErro = `Não autorizado. ${error.statusText}`
      break
    case 403:
      mensagemErro = `Acesso negado. ${error.statusText}`
      break
    case 203:
      mensagemErro = `Erro ao retornar as infomações do servidor. ${error.statusText}`
      break
  }

  return mensagemErro
}

export default formatarMensagemErro
