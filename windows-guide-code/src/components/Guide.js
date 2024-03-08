import React from 'react';
import image1 from '../assets/images/1.png';
import image2 from '../assets/images/2.png';
import image3 from '../assets/images/3.png';
import image4 from '../assets/images/4.png';
import image5 from '../assets/images/5.png';
import image6 from '../assets/images/6.png';
import image7 from '../assets/images/7.png';
import image8 from '../assets/images/8.png';
import image9 from '../assets/images/9.png';
import image10 from '../assets/images/10.png';
import image11 from '../assets/images/11.png';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
];

const Guide = () => {
  return (
    <div className="section guide">
      <div>
        <h1>Guide Title</h1>
        <p>This is the guide content.</p>
        {/* Displaying images */}
        {images.map((imgSrc, index) => (
          <div key={index} className="guide-image-container">
            <img src={imgSrc} alt={`Steg ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;
