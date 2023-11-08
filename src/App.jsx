import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="hero-header">
      <div className="wrapper">
        <Header />
        <Welcome />
      </div>
    </div>
  );
}

export default App;
