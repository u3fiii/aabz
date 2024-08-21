import React, { useRef, useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/icons lottie/bimehthird.json';

const LottieAnimation = () => {
  const lottieRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (lottieRef.current) {
      if (isHovered) {
        lottieRef.current.play();
      } else {
        lottieRef.current.stop();
      }
    }
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const lottieOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Lottie
        options={lottieOptions}
        height={100}
        width={100}
        ref={lottieRef}
      />
    </div>
  );
};

export default LottieAnimation;