import React from 'react';
import image from './../../assets/projectImg/neuralml5.jpg'

function ProjectCard() {
  return (
    <div className='w-[330px] border border-gray'>
      <img src={image} className='h-[200px] overflow-hidden object-cover' />
      <div className='border border-gray p-2 border-x-0'>
        <p>tag</p>
      </div>
      <div className='p-4'>
        <h1 className='text-2xl'>title</h1>
        <p className='py-4'>description</p>
        <button>Github</button>
      </div>
    </div>
  );
}

export default ProjectCard;
