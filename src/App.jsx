// import Header from "./components/Header";
import "./App.css";
import hero from "../public/hero.jpg";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="hero-header">
      <div className="wrapper">
        <header>
          <div className="logo">
            <i className="fa-solid fa-c"></i>
            <div className="logo-text">Celso Diaz</div>
          </div>
          <nav>
            <div
              className={`togglebtn ${isMenuOpen ? "click" : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={`navlinks ${isMenuOpen ? "open" : ""}`}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Resume</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="container">
          <div className="hero-pic">
            <img src={hero} alt="profile" />
          </div>
          <div className="hero-text">
            <h5>
              Hi, I`m a <span className="">FullStack Developer</span>
            </h5>
            <h1>Celso Diaz</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              illum dicta, in, ea, tenetur provident maiores vero vel facilis et
              deserunt esse quos. Quae voluptate cumque repellendus, ipsum quo
              saepe.
            </p>

            <div className="btn-group">
              <a href="#" className="btn active">
                Download CV
              </a>
              <a href="#" className="btn">
                Contact
              </a>
            </div>

            <div className="social">
              <a href="">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
