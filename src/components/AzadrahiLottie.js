import React, { useRef, useState, useEffect } from 'react';
import LottiePlayer from 'react-lottie-player';
import animationData from '../assets/icons lottie/azadrahi.json';

const Example = () => {
  const lottiePlayerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (lottiePlayerRef.current) {
      if (isHovered) {
        lottiePlayerRef.current.play();
      } else {
        lottiePlayerRef.current.stop();
      }
    }
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block' }}
    >
      <LottiePlayer
        loop
        autoPlay={false}
        animationData={animationData}
        style={{ width: 90, height: 90 }}
        ref={lottiePlayerRef}
      />
    </div>
  );
};

export default Example;