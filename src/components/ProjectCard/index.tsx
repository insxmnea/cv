import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface IProjectCard {
  image: string,
  title: string,
  description: string,
  tags: string[],
  github: string,
  live?: string
}

const ProjectCard: FC<IProjectCard> = (props) => {
  return (
    <div className='w-[330px] border border-gray mb-4'>
      <img src={props.image} className='h-[200px] overflow-hidden object-cover w-full' />
      <div className='border border-gray p-2 border-x-0'>
        <p>{ props.tags.join(' ') }</p>
      </div>
      <div className='p-4'>
        <h1 className='text-2xl'>{props.title}</h1>
        <p className='py-6'>{props.description}</p>

        <a className='border text-base text-white border-purple py-2 px-5' 
          href={props.github} 
          target='_blank'>Github</a>

        {
          props.live
          ?
          <a className='border text-base text-white border-purple py-2 px-5 mx-2' 
          href={props.live} 
          target='_blank'>Live</a>
          :
          <></>
        }
      </div>
    </div>
  );
}

export default ProjectCard;
