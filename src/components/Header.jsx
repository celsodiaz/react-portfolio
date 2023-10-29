import styled from "@emotion/styled";

const Container = styled.header`
  width: 100%;
  height: 3em;
  /* position: fixed; */
  top: 0;
  background-color: cyan;
  align-items: center;
`;

const SectionContainer = styled.section`
  display: flex;
  /* justify-content: space-between; */
  margin: 0 auto;
  /* align-items: center; */
`;

const Header = () => {
  return (
    <Container>
      <SectionContainer>
        <div>LOGO</div>
        <div>
          <a href="#about">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacted">Contact me</a>
        </div>
      </SectionContainer>
    </Container>
  );
};

export default Header;
