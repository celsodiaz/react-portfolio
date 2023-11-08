import styled from "@emotion/styled";
import hero from "/public/hero.jpg";
import Message from "./Message";

const CustomLink = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Welcome = () => {
  return (
    <section className="container">
      <div className="hero-pic">
        <img src={hero} alt="profile" />
      </div>
      <div className="hero-text">
        <Message />
        <div className="text">
          <p>
            I’m <span>Celso Diaz</span>,
            <br />
            IT Systems Engineer,
            <br />
            Full Stack Web Developer.
          </p>
        </div>
        {/* <div className="btn-group">
        <a
          href="../public/Celso-Diaz-cv.pdf"
          className="btn active"
          download
        >
          Download CV
        </a>
        <a
          href="https://www.linkedin.com/in/celsodiaz8/"
          className="btn"
          target="blank"
        >
          Contact
        </a>
      </div> */}

        <CustomLink className="social">
          <a href="https://www.linkedin.com/in/celsodiaz8/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/celsodiaz">
            <i className="fa-brands fa-github"></i>
          </a>
        </CustomLink>
      </div>
    </section>
  );
};

export default Welcome;
