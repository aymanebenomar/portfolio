import React, { useEffect, useState } from 'react';

const BlurText = ({ 
  text, 
  delay = 100, 
  animateBy = 'words', // "words" or "letters"
  direction = 'top',   // "top" or "bottom"
  className = '' 
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Split text into words or letters
  const items = animateBy === 'words' ? text.split(' ') : text.split('');

  return (
    <span className={className}>
      {items.map((item, idx) => (
        <span
          key={idx}
          className={`inline-block transition-all duration-500 ease-out transform ${
            visible 
              ? 'opacity-100 translate-y-0' 
              : `opacity-0 ${direction === 'top' ? '-translate-y-2' : 'translate-y-2'}`
          } mr-1`}
        >
          {item}
        </span>
      ))}
    </span>
  );
  // Note: Added a small right margin to separate words/letters
};

export default BlurText;
