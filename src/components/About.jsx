import styled from "@emotion/styled";

const CustomSectionAbout = styled.section`
  /* color: white; */
  width: 100%; /* Cambiar el ancho al 100% para adaptarse al ancho de la pantalla */
  max-width: 95%;
  margin: 30px auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 75% 25%;
  grid-template-rows: auto;
`;

const About = () => {
  return (
    <CustomSectionAbout>
      <div>
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
      <div>
        <h2>My Skills</h2>
      </div>
    </CustomSectionAbout>
  );
};

export default About;
