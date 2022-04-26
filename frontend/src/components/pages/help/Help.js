import React from 'react';
import '../../../assets/css/Help.css';
import api from '../../../services/api';
function Help() {
  api
    .get('ajuda')
    .then((response) => response.data)
    .catch((err) => console.error(err));
  return (
    <div className="div-title-help">
      <span className="span-title-help">Ajuda</span>
      <p></p>
      <div className="text-help"></div>
    </div>
  );
}

export default Help;
