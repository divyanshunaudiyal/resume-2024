import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="text">
          <h2>&copy; Divyanshu Naudiyal</h2>
        </div>
        <div className="social">
          <a
            className="github"
            href="https://github.com/divyanshunaudiyal"
            target="blank"
          >
            <FaGithub />
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/divyanshunaudiyal/"
            target="blank"
          >
            <FaLinkedin />
          </a>
          <a
            className="instagram"
            href="https://www.instagram.com/divyanshunaudiyal/"
            target="blank"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
