import React from 'react';

interface TitleComponentProps {
  text: string;
}

const Text: React.FC<TitleComponentProps> = ({ text }) => {
  return (
    <p className="text-[10px] lg:text-sm px-1 md:px-3 lg:px-6 py-1 md:py-2 lg:py-4 text-justify"
       style={ { textAlignLast: 'center' } }>{ text }</p>
  );
};

export default Text;
