import ImageAnoNovo from "../../assets/images/imagemAnoNovo.png";
import "../../styles/main.scss";

export default function Main() {
  return (
    <main>
      <div className="container-main">
        <section className="image">
          <img src={ImageAnoNovo} alt="Image escrito ano novo" />
        </section>

        <section className="text">
          <h2>Boas Festas!!!</h2>
          <h1>Felicidades!!!</h1>
          <p>Em 2025, vamos juntos programar. Com mais código limpo e muito para alcançar! Que o ano novo traga só funções de felicidade. E que a paz seja nossa variável de realidade! Sem bugs, sem falhas, com muito amor. Vamos debugar os problemas com ardor! Que a vida seja sempre o output de alegria,o Vai Na Web te deseja um Ano Novo, que seja pura harmonia!</p>
        </section>

      </div>
    </main>
  )
}
