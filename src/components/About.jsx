import styled from "@emotion/styled";
import { IoIosMore } from "react-icons/io";

const CustomSectionAbout = styled.section`
  margin: 30px auto 0px auto;
  padding: 40px;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: auto;
  background-color: lightgray;
  gap: 30px;
  height: 400px;

  .about {
    background-color: aqua;
    padding: 15px;
  }

  .skills {
    background-color: chocolate;
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: center;
    align-items: center;
  }
`;

const CustomSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(
    4,
    50px
  ); /* Ajusta el tamaño de las columnas según tus necesidades */
  grid-template-rows: repeat(
    3,
    50px
  ); /* Ajusta el tamaño de las filas según tus necesidades */

  gap: 5px;

  & > div {
    border: 1px solid;
    background-color: white;
    width: 100%;
    aspect-ratio: 1/1; /* Mantiene los elementos cuadrados */
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledIcon = styled(IoIosMore)`
  width: 30px;
  height: 30px;
  color: blue;
`;

const About = () => {
  return (
    <CustomSectionAbout>
      <div className="about">
        <h2>About</h2>
        <p>
          <strong>Ingeniero de sistemas</strong> y
          <strong>desarrollador web full-stack</strong> con enfoque en el
          diseño, desarrollo de sistemas de software y una gran habilidad para
          resolver problemas tecnológicos complejos. <br />
        </p>
        <p>
          Orientado a resultados con capacidad de trabajo colaborativo y con un
          fuerte sentido de responsabilidad. Actualmente buscando crecer
          profesionalmente en el desarrollo web. Comprometido con aplicar
          habilidades con pasión y dedicación, buscando constantemente
          oportunidades para ampliar y mejorar conocimientos en el campo
          tecnológico junto a un equipo dinámico y de alto rendimiento.
        </p>
      </div>
      <div className="skills">
        <h2>My Skills</h2>
        <CustomSkills>
          <div>
            <img src="/public/css.svg" />
          </div>
          <div>
            <img src="/public/figma.svg" />
          </div>
          <div>
            <img src="/public/cypress.svg" />
          </div>
          <div>
            <img src="/public/html.svg" />
          </div>
          <div>
            <img src="/public/jest.svg" />
          </div>
          <div>
            <img src="/public/js.svg" />
          </div>
          <div>
            <img src="/public/node.svg" />
          </div>
          <div>
            <img src="/public/postgresql.svg" />
          </div>
          <div>
            <img src="/public/react.svg" />
          </div>
          <div>
            <img src="/public/ruby on rails.svg" />
          </div>
          <div>
            <img src="/public/ruby.svg" />
          </div>
          <div>
            <StyledIcon />
          </div>
        </CustomSkills>
      </div>
    </CustomSectionAbout>
  );
};

export default About;
