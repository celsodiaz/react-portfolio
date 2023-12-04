import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

const enhanceHeader = keyframes`
  to {
  background: rgba(255, 255, 255, .4);
  backdrop-filter: blur(5px);
  font-size: 18px;
 }
`;

const HeaderBar = styled.header`
  background-color: #444;
  width: 100%;
  margin: auto;
  padding: 15px 40px;
  position: sticky;
  top: 0;
  left: 0;
  animation: ${enhanceHeader} linear both;
  animation-timeline: scroll(root);
  animation-range: 0 200px;
  z-index: 8;
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <HeaderBar>
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
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </HeaderBar>
  );
};

export default Header;
