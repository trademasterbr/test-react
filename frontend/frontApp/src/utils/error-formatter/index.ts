const errorFormat = async (error: Response) => {
  let errorMensage = ''
  switch (error.status) {
    case 500:
      errorMensage = `Server Error`
      break
    case 503:
      errorMensage = `Unavailable server`
      break
    case 504:
      errorMensage = `Communication with server failed`
      break
    case 400:
      errorMensage = `General error`
      break
    case 404:
      errorMensage = `Not Found`
      break
    case 401:
      errorMensage = `Not authorized`
      break
    case 403:
      errorMensage = `Access denied`
      break
    case 203:
      errorMensage = `Error returning server information`
      break
    default:
      errorMensage = `General error`
      break
  }

  return errorMensage
}

export default errorFormat
