import styled from "@emotion/styled";

const ContainerContact = styled.section`
  height: 180px;
  padding: 40px;
  text-align: center;
  background-color: #3f5b64;

  & > h2 {
    color: aliceblue;
  }
`;

const Contact = () => {
  return (
    <ContainerContact>
      <h2>Can I help you?</h2>
      <div className="btn-group">
        <a href="../public/Celso-Diaz-cv.pdf" className="btn active" download>
          Download CV
        </a>
        <a
          href="https://www.linkedin.com/in/celsodiaz8/"
          className="btn"
          target="blank"
        >
          Contact
        </a>
      </div>
    </ContainerContact>
  );
};

export default Contact;
