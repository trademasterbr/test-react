import '../../../assets/css/Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <span>Logo</span>
      </div>
      <div className="header-title">
        <span className="title-home">Home</span>
        <span className="title-sobre">Sobre</span>
      </div>
    </div>
  );
}

export default Header;
