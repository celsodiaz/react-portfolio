import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="hero-header">
      <div className="wrapper">
        <Header />
        <Welcome />
      </div>
      <Projects />
      <About />
    </div>
  );
}

export default App;
