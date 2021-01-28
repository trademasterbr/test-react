import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
class Toast extends React.Component {
  render() {
    return (
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    )
  }
}
export const showToast = ({ type, message }) => {
  switch (type) {
    case 'success':
      toast.success(message)
      break
    case 'warn':
      toast.warn(message)
      break
    case 'error':
      toast.error(message)
      break
    default:
      toast.info(message)
  }
}

export default function CustomToast() {
  return <Toast />
}
