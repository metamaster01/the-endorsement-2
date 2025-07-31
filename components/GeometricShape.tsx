
import React from 'react';

const GeometricShape = () => {
  return (
    <div className="absolute top-8 right-8 w-16 h-16">
      <svg width="64" height="64" viewBox="0 0 64 64" className="animate-spin" style={{ animationDuration: '20s' }}>
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="#FBD009"
          strokeWidth="3"
          strokeDasharray="20 10"
          strokeDashoffset="0"
        />
        <circle
          cx="32"
          cy="32"
          r="20"
          fill="none"
          stroke="#ff6b47"
          strokeWidth="2"
          strokeDasharray="15 8"
          strokeDashoffset="5"
        />
        <circle
          cx="32"
          cy="32"
          r="12"
          fill="none"
          stroke="#4ecdc4"
          strokeWidth="2"
          strokeDasharray="10 5"
          strokeDashoffset="10"
        />
      </svg>
    </div>
  );
};

export default GeometricShape;
