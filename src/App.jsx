// import Header from "./components/Header";
import "./App.css";
// import prueba from "../public/prueba.jpeg";

function App() {
  return (
    <div className="hero-header">
      <div className="wrapper">
        <header>
          <div className="logo">
            <i className="fa-solid fa-c"></i>
            <div className="logo-text">Celso Diaz</div>
          </div>
          <nav>
            <div className="togglebtn">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className="navlinks">
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
      </div>
    </div>
  );
}

export default App;
