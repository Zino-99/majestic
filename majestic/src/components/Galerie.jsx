import React from 'react';

import img1 from '../assets/Restaurant/avif1.jpg';
import img2 from '../assets/Restaurant/avif2.jpg';
import img3 from '../assets/Restaurant/avif3.jpg';
import img4 from '../assets/Restaurant/avif4.jpg';
import img5 from '../assets/Restaurant/avif5.jpg';

const images = [img1, img2, img3, img4, img5];

const Galerie = () => {
  return (
    <section className="bg-[#f3ede7] py-12 px-4 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-sm uppercase font-semibold tracking-wider text-gray-600">
          Majestic Galerie
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-black">
          Le Resto en Photos&nbsp;!
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        <div className="md:row-span-2">
          <img
            src={images[0]}
            alt="Galerie principale"
            className="w-full h-full max-h-[620px] object-cover rounded"
          />
        </div>
        {images.slice(1).map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Photo ${index + 2}`}
              className="w-full h-[300px] object-cover rounded"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galerie;
