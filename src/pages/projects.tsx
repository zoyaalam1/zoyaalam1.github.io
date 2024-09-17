import React from 'react';
import CoreLayout from '../components/CoreLayout.tsx';
import ProjectTile, { ProjectTileProps } from '../components/ProjectTile.tsx';
import takashaCity from '../assets/thumbnails/takasha-city.png';
import sarkarE from '../assets/thumbnails/sarkar-e.png';
import sehatQuarters from '../assets/thumbnails/sehat-quarters.jpg';
import floodResilientDwelling from '../assets/thumbnails/flood-resilient-dwelling.png';
import diwan from '../assets/thumbnails/diwan.png';
import otherWorks from '../assets/thumbnails/other-works.png';

const projects: ProjectTileProps[] = [
  {
    title: 'Takasha City',
    description: 'Immersive',
    image: takashaCity,
    link: '/project-takasha-city'
  },
  {
    title: 'Sarkar-e',
    description: 'Engaging • Entwined • Efficient',
    image: sarkarE,
    link: '/project-sarkar-e'
  },
  {
    title: 'Sehat Quarters',
    description: 'Landscape • Health',
    image: sehatQuarters,
    link: '/project-sehat-quarters'
  },
  {
    title: 'Flood Resilient Dwelling',
    description: 'Housing • Climate • Amphibious',
    image: floodResilientDwelling,
    link: '/project-flood-resilient-dwelling'
  },
  {
    title: 'Diwan',
    description: 'Poetry • Museum • Culture',
    image: diwan,
    link: '/project-diwan'
  },
  {
    title: 'Other Works',
    description: 'Exploratory • Experimental',
    image: otherWorks,
    link: '/project-other-works'
  }
];

const Projects: React.FC = () => {
  return (
    <CoreLayout>
      <div className="flex flex-1 w-[90%] md:w-[80%] self-center py-6 md:py-10 lg:py-16">
        <div className="flex items-center">
          <div
            className="flex flex-1 w-full flex-row items-center justify-evenly flex-wrap gap-4 md:gap-6 lg:gap-10 h-fit">
            { projects.map((project, index) => <ProjectTile key={ index } { ...project } />) }
          </div>
        </div>
      </div>
    </CoreLayout>
  );
};

export default Projects;
