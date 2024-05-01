import React from "react";
import Header from "../Header";
import ProjectCard from "../ProjectCard";
import styled from "styled-components";
import { color } from "../../constants/colors";
import { device } from "../../constants/breakpoints";

interface IProjectData {
  image: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
}

interface IData {
  projects: IProjectData[];
}

const data: IData = require("./../../assets/data/index.json");

const HomePage = () => {
  const projectCards = data.projects.map((v, i) => (
    <ProjectCard
      description={v.description}
      github={v.github}
      live={v.live}
      image={v.image}
      tags={v.tags}
      title={v.title}
      key={i + v.title.trim().split(" ").join("")}
    />
  ));
  // console.log(data.projects);

  return (
    <div className="wrapper">
      <Header />
      <div>
        <div>
          {/* <h1>
            Konstantin is a <Subtitle>front-end developer</Subtitle>
          </h1> */}
          {/* <p className='py-6'>Coding</p> */}
          {/* <button>Contact me!</button> */}
        </div>
      </div>
      <div>
        <SectionTitle>projects</SectionTitle>
        {/* <h1 className='section-title'>skills</h1>
        <h1 className='section-title'>about-me</h1>
        <h1 className='section-title'>contacts</h1> */}
        <ProjectCards>{projectCards}</ProjectCards>
      </div>
    </div>
  );
};

const Subtitle = styled.span`
  color: ${color.purple};
`;

const SectionTitle = styled.h1`
  position: relative;
  padding: 48px 0;

  &:before {
    color: ${color.purple};
    content: "#";
  }

  &:after {
    content: "";
    width: 40%;
    position: absolute;
    right: 0;
    top: 50%;
    border: 1px solid ${color.purple};
    border-left: 0;
    border-right: 0;
  }
`;

const ProjectCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;

  @media ${device.tablet} {
    justify-content: space-between;
  }
`;

export default HomePage;
