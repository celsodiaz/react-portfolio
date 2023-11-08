import styled from "@emotion/styled";
import Card from "./Card";

const CustomSection = styled.section`
  /* color: white; */
  width: 100%; /* Cambiar el ancho al 100% para adaptarse al ancho de la pantalla */
  max-width: 95%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: minmax(auto, 1fr); /* Ajusta las filas al contenido */
    gap: 20px;
    overflow-x: auto; /* Agregar desplazamiento horizontal si es necesario */
  }

  @media (max-width: 768px) {
    .items {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      padding: 0 20px;
      overflow-x: auto; /* Agregar desplazamiento horizontal en dispositivos móviles */
    }
  }
`;

const CustomTitle = styled.div`
  font-size: larger;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Projects = () => {
  return (
    <CustomSection>
      <CustomTitle>
        <h2>Portafolio</h2>
        <p>
          <small>Practice builds mastery</small>
        </p>
      </CustomTitle>
      <div className="items">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </CustomSection>
  );
};

export default Projects;
