import Logo from "../../assets/images/logo.png";
import "../../styles/header.scss";

export default function Header() {
  return (
    <header>
      <div className="container-header">
        <div className="logo">
          <img src={Logo} alt="Imagem de uma garrafa de champanhe com uma taça ao e Feliz 2025 escrito ao lado com fogos de artifícios atrás" />
        </div>
      
        <nav className="menu">
          <ul>
            <li>Paz</li>
            <li>Saúde</li>
            <li>Alegria</li>
          </ul>
        </nav>

      </div>


    </header>
  )
}
