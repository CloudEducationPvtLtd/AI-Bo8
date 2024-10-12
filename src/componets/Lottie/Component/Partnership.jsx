// Import necessary packages
import Lottie from 'react-lottie';
import animationData from '../LottieFiles/Patnership.json';

// Create a functional component
const Partnership = () => {
  // Define default options for the Lottie animation
  const defaultOptions = {
    loop: true, // Animation will loop
    autoplay: true, // Animation will start automatically
    animationData: animationData, // Use imported animation data
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice' // Maintain aspect ratio
    }
  };

  // Render the Lottie animation
  return <Lottie options={defaultOptions} height={350} width={350} />;
};

export default Partnership;
