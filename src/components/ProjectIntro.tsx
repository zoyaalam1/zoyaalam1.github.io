import React from 'react';

interface ProjectIntroProps {
  heading: string;
  description: string;
  location?: string;
  topology?: string;
  softwares?: string[];
}

const ProjectIntro: React.FC<ProjectIntroProps> = ({
  heading,
  description,
  location,
  topology,
  softwares
}) => {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4 py-8 text-center">
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">{heading}</h1>
      <p className="text-base md:text-lg mb-1 md:mb-2">{description}</p>
      <div className="flex flex-col items-start mx-auto text-[8px] md:text-[10px] lg:text-[12px] opacity-70">
        {location && (
          <div className='flex flex-row'>
            <span className="text-right mr-2">Location:</span>
            <span>{location}</span>
          </div>
        )}
        {topology && (
          <div className='flex flex-row'>
            <span className="text-right mr-2">Topology:</span>
            <span>{topology}</span>
          </div>
        )}
        {softwares && softwares.length > 0 && (
          <div className='flex flex-row'>
            <span className="text-right mr-2">Softwares:</span>
            <span>{softwares.join(', ')}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectIntro;