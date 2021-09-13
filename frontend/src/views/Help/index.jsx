import { useEffect, useState } from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import environment from "../../config/environment";
import axios from 'axios';
import './index.css';

function Ajuda() {

  const [helpText, setHelpText] = useState(null)

  useEffect(() => {
    axios(`${environment.api}/ajuda`)
      .then(res => setHelpText(res.data.Ajuda))
      .catch(error => console.error(error))
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <PageTitle>Ajuda</PageTitle>
        <p className="text-help">
          {helpText}
        </p>
      </div>

    </div>
  )
}

export default Ajuda;