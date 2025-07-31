
import React from 'react';
import Image from 'next/image';

const ImageMosaic = () => {
  return (
    <div className="relative">
      {/* Curved dotted line */}
      <svg
        className="absolute -top-12 -left-8 w-64 h-48 z-0"
        viewBox="0 0 256 192"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 160 Q80 100 140 120 Q200 140 240 80"
          className="dotted-line"
        />
      </svg>

      {/* Image Grid */}
      <div className="image-mosaic relative z-10 w-80 h-80">
        <Image
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop"
          alt="Celebrity event"
          className="w-full h-full object-cover"
          width={400}
          height={300}
        />
        <Image
          src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=400&fit=crop"
          alt="Film production"
          className="w-full h-full object-cover"
          width={300}
          height={400}
        />
        <Image
          src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=225&fit=crop"
          alt="Brand collaboration"
          className="w-full h-full object-cover"
          width={400}
          height={225}
        />
        <Image
          src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=250&h=250&fit=crop"
          alt="Digital marketing"
          className="w-full h-full object-cover"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};

export default ImageMosaic;
