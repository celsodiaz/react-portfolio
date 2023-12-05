import styled from "@emotion/styled";
import hero from "/public/hero.jpg";
import Message from "./Message";

const CustomLink = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const CustomSectionSalute = styled.section`
  height: 75vh;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  .mensaje {
    position: relative;
  }

  .date {
    display: flex;
    justify-content: center;
  }

  .imagen {
    margin: auto;
  }
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    gap: 50px;
    .mensaje {
      order: -1;
    }

    .imagen {
      margin: auto;
    }
  }
`;

const CustomImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: 10px solid #444;
  box-shadow: 5px 7px 25px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 1/1/3/2;
  & > img {
    max-height: 100%;
    transition: 0.5s;
    transform: scale(1.35);
  }
`;

const Welcome = () => {
  return (
    <CustomSectionSalute>
      <CustomImage className="imagen">
        <img src={hero} alt="profile" />
      </CustomImage>
      <div className="mensaje">
        <Message />
      </div>
      <div className="date">
        <div className="hero-text">
          <div className="text">
            <p>
              I’m <span>Celso Diaz</span>,
              <br />
              IT Systems Engineer,
              <br />
              Full Stack Web Developer.
            </p>
          </div>

          <CustomLink className="social">
            <a
              href="https://www.linkedin.com/in/celsodiaz8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/celsodiaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </CustomLink>
        </div>
      </div>
    </CustomSectionSalute>
  );
};

export default Welcome;
