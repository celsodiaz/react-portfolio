import { FaTerminal } from "react-icons/fa";
import { SiRuby } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import styled from "@emotion/styled";

const CustomUl = styled.ul`
  display: flex;
  gap: 10px;
`;

const CustomLi = styled.li`
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

const Card = () => {
  return (
    <article>
      <div>
        <CustomUl>
          <CustomLi>
            <FaTerminal style={{ color: "#0077b5" }} />
          </CustomLi>
          <CustomLi>
            <SiRuby style={{ color: "#0077b5" }} />
          </CustomLi>
          <CustomLi>
            <BsGithub style={{ color: "#0077b5" }} />
          </CustomLi>
        </CustomUl>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </article>
  );
};

export default Card;
