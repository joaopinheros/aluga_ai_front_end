import { Link } from 'react-router-dom';
import '../style/HeaderStyle.css'; // Importe o arquivo CSS com os estilos

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/home">
          <img src={'/Logo.png'} alt="Logo da Aluga aí" />
        </Link>
      </div>

      <nav>
        <ul>
          <li><Link to="">Anuncie Seu Veiculo</Link></li>
          <li><Link to="">Alugue Um Veiculo</Link></li>
          <li><Link to="">Fale Conosco</Link></li>
        </ul>
      </nav>

      <div className="auth-buttons">
        <button className="button-register">
          <Link to="/registro" className="link-register">Registrar</Link>
        </button>
        <button className="button-login">
          <Link to="/login" className="link-login">Login</Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
