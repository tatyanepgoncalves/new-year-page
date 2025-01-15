import Facebook from "../../assets/images/logoFacebook.png";
import Instagram from "../../assets/images/logoInstagram.png";
import Linkedin from "../../assets/images/logoLinkedin.png";
import "../../styles/footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <nav className="social-media">
          <ul>
            <li><img src={Linkedin} alt="" /></li>
            <li><img src={Facebook} alt="" /></li>
            <li><img src={Instagram} alt="" /></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
