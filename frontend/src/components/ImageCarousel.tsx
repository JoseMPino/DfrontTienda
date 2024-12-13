import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Importación de imágenes
import moto1 from '../assets/moto1.jpg';
import moto2 from '../assets/moto2.jpg';
import moto3 from '../assets/moto3.jpg';
import moto4 from '../assets/moto4.jpg';

const ImageCarousel: React.FC = () => {
  return (
    <div className="carousel-container">
        
      <Carousel 
        showArrows={true} 
        autoPlay={true} 
        infiniteLoop={true} 
        interval={3000} 
        showThumbs={false}
      >
        <div>
          <img src={moto1} alt="Moto Deportiva" />
          <p className="legend">Moto Deportiva</p>
        </div>
        <div>
          <img src={moto2} alt="Moto Touring" />
          <p className="legend">Moto Touring</p>
        </div>
        <div>
          <img src={moto3} alt="Scooter" />
          <p className="legend">Scooter</p>
        </div>
        <div>
          <img src={moto4} alt="Motocross" />
          <p className="legend">Motocross</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;