import React from 'react';
import Header from '../Header';
import ProjectCard from '../ProjectCard';

function HomePage() {
  return (
    <div className='wrapper'>
      <Header />
      <div>
        <div>
          <h1>Konstantin is a <span className='text-purple'>front-end developer</span></h1>
          <p className='py-6'>Coding</p>
          <button>Contact me!</button>
        </div>
      </div>
      <div>
        <h1 className='py-12'>projects</h1>
        <div className='flex'>
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
