import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

// Define keyframes
const opacityKeyframes = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const changeKeyframes = keyframes`
  0%, 12.66%, 100% {
    transform: translate3d(0, 0, 0);
  }
  16.66%, 29.32% {
    transform: translate3d(0, -25%, 0);
  }
  33.32%, 45.98% {
    transform: translate3d(0, -50%, 0);
  }
  49.98%, 62.64% {
    transform: translate3d(0, -75%, 0);
  }
  66.64%, 79.3% {
    transform: translate3d(0, -50%, 0);
  }
  83.3%, 95.96% {
    transform: translate3d(0, -25%, 0);
  }
`;

// Define styled components with keyframes
const ContentAnimation = styled.div`
  position: absolute;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  font-family: "Lato", sans-serif;
  font-size: 35px;

  color: white;
  z-index: 2;
`;

const ContentContainer = styled.div`
  font-weight: 600;
  overflow: hidden;
  height: 40px;
  padding: 0 20px;

  &:before {
    content: "[";
    left: 0;
  }

  &:after {
    content: "]";
    position: absolute;
    right: 0;
  }

  &:after,
  &:before {
    position: absolute;
    top: 0;
    color: #007ced;
    font-size: 42px;
    line-height: 40px;
    animation: ${opacityKeyframes} 2s infinite;
  }

  .content-animation__container__text {
    display: inline;
    float: left;
    margin: 0;
  }

  .content-animation__container__list {
    margin-top: 0;
    padding-left: 110px;
    text-align: left;
    list-style: none;
    animation: ${changeKeyframes} 10s infinite;

    .content-animation__container__list__item {
      line-height: 40px;
      margin: 0;
      padding-left: 10px;
    }
  }
`;

const Text = styled.p`
  padding-right: 30px;
`;
const List = styled.ul``;
const ListItem = styled.li``;

const Message = () => {
  return (
    <>
      <ContentAnimation>
        <ContentContainer>
          <Text className="content-animation__container__text">Hello</Text>
          <List className="content-animation__container__list">
            <ListItem className="content-animation__container__list__item">
              World!
            </ListItem>
            <ListItem className="content-animation__container__list__item">
              Users!
            </ListItem>
            <ListItem className="content-animation__container__list__item">
              Colleagues!
            </ListItem>
            <ListItem className="content-animation__container__list__item">
              Everybody!
            </ListItem>
          </List>
        </ContentContainer>
      </ContentAnimation>
    </>
  );
};

export default Message;
