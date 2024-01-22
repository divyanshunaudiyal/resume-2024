import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { Link as ScrollLink } from "react-scroll";
import { GoDotFill } from "react-icons/go";
function Header() {
  const [visible, setVisible] = useState(false);
  return (
    <header>
      <div className="header">
        <div className="header_left">
          <h2>
            <span>
              <GoDotFill />
            </span>
            available{" "}
          </h2>
        </div>
        <div className="header_center">
          <h1>
            <span>Divyanshu Naudiyal !</span> studio
          </h1>
        </div>
        <nav>
          <ScrollLink
            to="project1"
            smooth={true}
            duration={500}
            className="projects-link"
          >
            Projects
          </ScrollLink>

          <ScrollLink
            to="enquire"
            smooth={true}
            duration={500}
            className="contact-link"
          >
            Contact
          </ScrollLink>
          <div className="toggle-menu">
            <button
              onClick={() => {
                setVisible(!visible);
              }}
            >
              <CgMenuGridO />
            </button>
            <ul className={`${visible ? "show slideLeft" : "hidden"}`}>
              <li>
                <ScrollLink to="project1" smooth={true} duration={500}>
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="enquire" smooth={true} duration={500}>
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
