import styled from "@emotion/styled";
import Card from "./Card";
const CustomSection = styled.section`
  color: white;
`;

const Projects = () => {
  return (
    <CustomSection>
      <div>
        <h2>Portafolio</h2>
        <p>
          <small>Practice builds mastery</small>
        </p>
      </div>
      <Card />
    </CustomSection>
  );
};

export default Projects;
