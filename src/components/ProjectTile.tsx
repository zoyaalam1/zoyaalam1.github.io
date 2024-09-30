import React from 'react';
import { Link } from 'react-router-dom';

export interface ProjectTileProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectTile: React.FC<ProjectTileProps> = ({ title, description, image, link }) => {
  return (
    <Link to={link} className="block text-center no-underline text-inherit w-[80%] md:w-[45%] lg:w-[30%] h-fit">
      <div className="flex flex-col items-center">
        <div className="text-base md:text-lg text-primary font-bold">{ title }</div>
        <div className="w-full aspect-square overflow-hidden mt-2.5">
          <img src={ image } alt={ title }
               className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"/>
        </div>
        <p className="mt-3 !text-sm md:text-base lg:text-lg text-primary">{ description }</p>
      </div>
    </Link>
  );
};

export default ProjectTile;
