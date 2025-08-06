"use client";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const celebrities = [
  { name: "Shah Rukh Khan", image: "/celebs/celebrity1.jpg" },
  { name: "Deepika Padukone", image: "/celebs/celebrity2.jpg" },
  { name: "Ranveer Singh", image: "/celebs/celebrity3.jpg" },
  { name: "Alia Bhatt", image: "/celebs/celebrity4.jpg" },
  { name: "Salman Khan", image: "/celebs/celebrity5.jpg" },
  { name: "Katrina Kaif", image: "/celebs/celebrity6.jpg" },
  { name: "Hrithik Roshan", image: "/celebs/celebrity7.jpg" },
  { name: "Priyanka Chopra", image: "/celebs/celebrity8.jpg" },
];

const CelebritySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 1.2,
          spacing: 16,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section className="bg-gradient-to-br from-[#fef9c3] via-[#fdf6b2] to-[#111827] py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-sm text-gray-700 uppercase">Bollywood Stars</p>
        <h2 className="text-4xl font-bold text-gray-900">Celebrity Appearances</h2>
        <div className="w-24 h-1 bg-black mt-2 mx-auto" />
      </div>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {celebrities.map((celebrity, index) => (
          <div
            key={index}
            className="keen-slider__slide bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative w-full h-64">
              <Image
                src={celebrity.image}
                alt={celebrity.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center bg-white">
              <h3 className="text-lg font-semibold text-gray-800">
                {celebrity.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {celebrities.map((_, index) => (
          <button
            key={index}
            onClick={() => instanceRef.current?.moveToIdx(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? "bg-black scale-110"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default CelebritySection;
