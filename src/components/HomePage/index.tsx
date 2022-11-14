import React from 'react';
import Header from '../Header';
import ProjectCard from '../ProjectCard';

interface IProjectData {
  image: string,
  title: string,
  description: string,
  tags: string[],
  github: string
}

interface IData {
  projects: IProjectData[]
}

const data: IData = require('./../../assets/data/index.json');

const HomePage = () => {
  const projectCards = data.projects.map((v) => 
    <ProjectCard 
      description={v.description}
      github={v.github}
      image={v.image}
      tags={v.tags} 
      title={v.title} 
      key={v.title} />
  );
  // console.log(data.projects);

  return (
    <div className='wrapper'>
      <Header />
      <div>
        <div>
          <h1>Konstantin is a <span className='text-purple'>front-end developer</span></h1>
          {/* <p className='py-6'>Coding</p> */}
          {/* <button>Contact me!</button> */}
        </div>
      </div>
      <div>
        <h1 className='section-title'>projects</h1>
        {/* <h1 className='section-title'>skills</h1>
        <h1 className='section-title'>about-me</h1>
        <h1 className='section-title'>contacts</h1> */}
        <div className='flex flex-wrap justify-between'>
          { projectCards }
        </div>
      </div>
    </div>
  );
}

export default HomePage;
