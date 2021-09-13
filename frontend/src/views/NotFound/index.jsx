import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

export default function NotFound() {

  return (
    <div className="container">
      <PageTitle>404 - Página não encontrada!</PageTitle>
      <Link to="/">
        Retornar
      </Link>
    </div>
  )

}
