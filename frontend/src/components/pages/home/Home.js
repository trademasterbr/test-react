import React, { useState } from 'react';
import Header from '../../layout/header/Header';
import '../../../assets/css/Home.css';

function HomePage(props) {
  const [quantity, setQuantity] = useState();
  const usuario = localStorage.getItem('usuario');
  const usuarioObj = JSON.parse(usuario);

  return (
    <>
      <Header />
      <div className='rootHome'>
        <form>
          <div className='quantityForm'>
            <div>
              <label htmlFor='quantity'>Quantidade de Nós:</label>
            </div>
            <div>
              <input
                type='text'
                name='quantity'
                id='quantity'
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
              />
            </div>
          </div>
        </form>
        <div className='quantityTitle'>
          <span className='textHome'>Gerar Arvore AVL</span>
        </div>
      </div>
    </>
  );
}

export default HomePage;
