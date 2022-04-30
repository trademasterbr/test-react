import '../../../assets/css/Header.css';
import logo from '../../../assets/logo.png';

function Header() {
  return (
    <div className='header'>
      <div className='header-logo'>
        <span>
          <img src={logo} alt='Logo' />
        </span>
      </div>
      <div className='header-title'>
        <span className='title-home'>Home</span>
        <span className='title-sobre'>Sobre</span>
      </div>
    </div>
  );
}

export default Header;
