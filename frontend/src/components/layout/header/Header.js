import '../../../assets/css/Header.css';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className='header'>
      <div className='header-logo'>
        <span>
          <img src={logo} alt='Logo' />
        </span>
      </div>
      <div className='header-title'>
        <Link to='/home' className='title-home'>
          Home
        </Link>
        <Link to='/ajuda' className='title-sobre'>
          Sobre
        </Link>
      </div>
      <div className='Users'>
        <span>{props.email}</span>
        <span>{props.nome}</span>
      </div>
    </div>
  );
}

export default Header;
