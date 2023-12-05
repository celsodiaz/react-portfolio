import { FaTerminal } from "react-icons/fa";
import { SiRuby } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { BsBoxArrowUpRight } from "react-icons/bs";
import styled from "@emotion/styled";

const ContainerCard = styled.article`
  position: relative;
  background-color: lightgray;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
`;

const CustomUl = styled.ul`
  display: flex;
  gap: 10px;
`;

const CustomTec = styled.li`
  list-style: none;
  width: 50px;
  height: 50px;
  /* background-color: #f3f4f6; */
  text-align: center;
  line-height: 50px;
  font-size: 35px;
  margin: 0 6.5px;
  display: block;
  border-radius: 20%;
  position: relative;
  overflow: hidden;
  border: 3px solid #0077b5;
  z-index: 1;
  /* & .mi-icono {
    color: gray;
  } */
`;

const CustomLink = styled.div`
  width: 50px;
  height: 50px;
  display: block;
  text-align: center;
  font-size: 35px;
  margin: 0 6.5px;
  border-radius: 20%;
  position: absolute;
  top: 20px;
  right: 0;
  .icon {
    display: block;
    cursor: pointer;
    color: #000;
    transition: color 0.3s;
    &:hover {
      color: #0077b5; /* Cambia el color del ícono cuando el cursor está sobre él */
    }
  }
`;
const ListTec = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  p {
    border-radius: 20px;
    padding: 5px;
    background-color: aqua;
  }
`;
const Card = () => {
  return (
    <ContainerCard>
      <div>
        <CustomUl>
          <CustomTec>
            <FaTerminal style={{ color: "#0077b5" }} />
          </CustomTec>
          <CustomTec>
            <SiRuby style={{ color: "#0077b5" }} />
          </CustomTec>
          <CustomTec>
            <BsGithub style={{ color: "#0077b5" }} />
          </CustomTec>
        </CustomUl>
      </div>
      <CustomLink>
        <BsBoxArrowUpRight className="icon" />
      </CustomLink>
      <div>
        <h2>Get Home</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse optio
          deleniti iste omnis non quo provident quam quae, molestias sequi vitae
          voluptates dolorum culpa consequatur ipsam at aut, assumenda et?
        </p>
      </div>
      <ListTec>
        <p>JavaScript</p>
        <p>React</p>
        <p>Google Maps</p>
        <p>Vite</p>
      </ListTec>
    </ContainerCard>
  );
};

export default Card;
