import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../constants/breakpoints";
import { color } from "../../constants/colors";

interface IProjectCard {
  image: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
}

const ProjectCard: FC<IProjectCard> = (props) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={process.env.PUBLIC_URL + props.image}
          alt={props.title}
          draggable="false"
        />
      </ImageWrapper>

      <Tags>
        <p>{props.tags.join(" ")}</p>
      </Tags>
      <Info>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>

        <LinkButton href={props.github} target="_blank">
          Github
        </LinkButton>

        {props.live ? (
          <LinkButton href={props.live} target="_blank">
            Live
          </LinkButton>
        ) : (
          <></>
        )}
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 330px;
  border: 1px solid ${color.gray};
  margin-bottom: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  height: 200px;
  object-fit: cover;
  width: 100%;
  transition: 0.2s;

  &:hover {
    transition: 0.4s;
    transform: scale(1.05);
    object-fit: cover;
    filter: brightness(90%);
  }
`;

const Tags = styled.div`
  border: 1px solid ${color.gray};
  padding: 8px;
  border-left-width: 0px;
  border-right-width: 0px;
`;

const Info = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 20px;
  line-height: 28px;

  @media ${device.tablet} {
    font-size: 24px;
    line-height: 32px;
  }
`;

const Description = styled.p`
  padding: 24px 0;
`;

const LinkButton = styled.a`
  font-size: 16px;
  line-height: 24px;
  border: 1px solid ${color.purple};
  color: ${color.white};
  padding: 8px 20px;
  margin-right: 8px;
  border-radius: 4px;
  transition: 0.1s;

  &:hover {
    background-color: ${color.purple};
    color: ${color.white};
    transition: 0.4s;
    border: 1px solid ${color.purple};
  }
`;

export default ProjectCard;
