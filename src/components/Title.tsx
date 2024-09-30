import React from 'react';

interface TitleComponentProps {
  text: string;
}

const Title: React.FC<TitleComponentProps> = ({ text }) => {
  return (
    <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2">{ text }</h1>
  );
};

export default Title;
