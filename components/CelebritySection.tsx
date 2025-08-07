"use client";

import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

// Generate 40 placeholder images for female celebrities
const femaleCelebrities = Array.from({ length: 40 }, (_, i) => ({
  name: `Female Star ${i + 1}`,
  image: `/FemaleDeck-${i + 1}.png`, // Corrected path for female images
}));

// Generate 40 placeholder images for male celebrities
const maleCelebrities = Array.from({ length: 40 }, (_, i) => ({
  name: `Male Star ${i + 1}`,
  image: `/images/male-stars/male-star-${i + 1}.png`, // Referencing local image path
}));

const CelebritySection = () => {
  // Slider 1: Left to Right movement
  const [sliderRef1, instanceRef1] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3.5, // This makes cards on both sides half-visible
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2.5, // This makes cards on both sides half-visible
          spacing: 12,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 1.5, // This makes cards on both sides half-visible
          spacing: 10,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 1.2, // This makes cards on both sides half-visible
          spacing: 8,
        },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef1.current?.next();
    }, 3000); // Auto-advance every 3 seconds
    return () => clearInterval(interval);
  }, [instanceRef1]);

  // Slider 2: Right to Left movement
  const [sliderRef2, instanceRef2] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3.5, // This makes cards on both sides half-visible
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2.5, // This makes cards on both sides half-visible
          spacing: 12,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 1.5, // This makes cards on both sides half-visible
          spacing: 10,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 1.2, // This makes cards on both sides half-visible
          spacing: 8,
        },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef2.current?.prev(); // Move in reverse direction
    }, 3000); // Auto-advance every 3 seconds
    return () => clearInterval(interval);
  }, [instanceRef2]);

  return (
    <section className="relative bg-gradient-to-br from-[#fef9c3] via-[#fdf6b2] to-[#111827] min-h-screen flex flex-col justify-center py-20 px-4 sm:px-8 overflow-hidden">
      {/* First Slider Section (Female Celebrities) */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-sm text-gray-700 uppercase tracking-widest">Featured Talent</p>
        <h2 className="text-5xl font-extrabold text-gray-900 mt-2">Female Stars</h2>
        <div className="w-32 h-1 bg-gray-900 mt-4 mx-auto rounded-full" />
      </div>
      <div ref={sliderRef1} className="keen-slider mb-20 transform-gpu">
        {femaleCelebrities.map((celebrity, index) => (
          <div
            key={index}
            className="keen-slider__slide bg-white rounded-xl border border-gray-300 overflow-hidden flex flex-col items-center justify-center p-3 shadow-lg"
          >
            <div className="relative w-full aspect-square mb-2 rounded-lg overflow-hidden">
              <Image
                src={celebrity.image || "/placeholder.svg"}
                alt={celebrity.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-base font-semibold text-gray-800 text-center">
              {celebrity.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Second Slider Section (Male Celebrities) */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-sm text-gray-700 uppercase tracking-widest">Leading Personalities</p>
        <h2 className="text-5xl font-extrabold text-gray-900 mt-2">Male Stars</h2>
        <div className="w-32 h-1 bg-gray-900 mt-4 mx-auto rounded-full" />
      </div>
      <div ref={sliderRef2} className="keen-slider transform-gpu">
        {maleCelebrities.map((celebrity, index) => (
          <div
            key={index}
            className="keen-slider__slide bg-white rounded-xl border border-gray-300 overflow-hidden flex flex-col items-center justify-center p-3 shadow-lg"
          >
            <div className="relative w-full aspect-square mb-2 rounded-lg overflow-hidden">
              <Image
                src={celebrity.image || "/placeholder.svg"}
                alt={celebrity.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-base font-semibold text-gray-800 text-center">
              {celebrity.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CelebritySection;
