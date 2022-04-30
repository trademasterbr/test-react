import React, { useState } from 'react';
import '../../../assets/css/Help.css';
import api from '../../../services/api';
import Header from '../../layout/header/Header';

function Help() {
  const [help, setHelp] = useState();

  try {
    api.get('ajuda').then((response) => {
      setHelp(response.data.Ajuda);
    });
  } catch (error) {
    return error;
  }

  return (
    <div className='div-title-help'>
      <span className='span-title-help'>Ajuda</span>
      <p></p>
      <div className='text-help'>{help}</div>
    </div>
  );
}

export default Help;
