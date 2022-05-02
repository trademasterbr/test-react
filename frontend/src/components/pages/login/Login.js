import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../../assets/css/Login.css';
import logo from '../../../assets/logo.png';
import api from '../../../services/api';

function Login() {
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState();

  async function handleLogin(event) {
    event.preventDefault();

    if (!email || !password) {
      return;
    }

    const body = {
      email,
      password
    };

    try {
      api.post('/').then((response) => setStatus(response.status));
    } catch (error) {
      return error;
    }
    console.log(status);
    if (status === 200) {
      history.push('/home');
    }
  }

  return (
    <body className='body-login'>
      <div className='container'>
        <div className='box'>
          <div className='Logo'>
            <span>
              <img src={logo} alt='Logo' />
            </span>
          </div>
          <div className='formLogin'>
            <form onSubmit={handleLogin}>
              <div>
                <div>
                  <label htmlFor='email'>Usuário:</label>
                </div>
                <div>
                  <input
                    type='text'
                    name='email'
                    id='email'
                    placeholder='joao@trademaster.com.br'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>
              <div>
                <div className='password'>
                  <div>
                    <label htmlFor='password'>Senha:</label>
                  </div>
                  <div>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      placeholder='*****'
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                </div>
              </div>
              <div className='buttonForm'>
                <button className='form-button'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Login;
