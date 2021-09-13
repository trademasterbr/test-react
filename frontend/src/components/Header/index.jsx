import { Link } from "react-router-dom";
import { Context } from "../../store";

import './index.css';

function Header() {

  return (
    <nav className="header">

      <h2 className="brand">TradeMaster</h2>

      <div className="flex-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/help">Ajuda</Link></li>
        </ul>

        <div className="user-info">
          <Context.Consumer>
            { 
              ({ loginData, logout }) => <>
                <span>{ `${loginData?.UserName} - ${loginData?.Name}` }</span>
                <a href onClick={ _ => logout() }>Sair</a>
              </>
            }
          </Context.Consumer>
        </div>
      </div>
    </nav>
  );
}
export default Header;