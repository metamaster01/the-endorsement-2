"use client"
import React, { useEffect, useRef, ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'merkurie-accent' | 'merkurie-coral' | 'merkurie-teal' | 'merkurie-cream' | 'merkurie-light';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean; // When true, ignores size prop and uses width/height or className
}

const glowColorMap = {
  'merkurie-accent': { base: 45, spread: 150, hue: 45, saturation: 90, lightness: 55 }, // #FBD009
  'merkurie-coral': { base: 15, spread: 150, hue: 15, saturation: 100, lightness: 60 }, // #ff6b47
  'merkurie-teal': { base: 175, spread: 150, hue: 175, saturation: 60, lightness: 60 }, // #4ecdc4
  'merkurie-cream': { base: 60, spread: 150, hue: 60, saturation: 30, lightness: 90 }, // #f8f5e8
  'merkurie-light': { base: 0, spread: 150, hue: 0, saturation: 0, lightness: 90 } // #e8e8e8
};

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96'
};

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  glowColor = 'merkurie-accent',
  size = 'md',
  width,
  height,
  customSize = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;

      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();

        // Check if mouse is within the card bounds
        const isInside = x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;

        if (isInside) {
          // Calculate relative position within the card
          const relativeX = x - rect.left;
          const relativeY = y - rect.top;

          // Normalize to 0-1 range
          const normalizedX = relativeX / rect.width;
          const normalizedY = relativeY / rect.height;

          cardRef.current.style.setProperty('--x', relativeX.toFixed(2));
          cardRef.current.style.setProperty('--y', relativeY.toFixed(2));
          cardRef.current.style.setProperty('--xp', normalizedX.toFixed(2));
          cardRef.current.style.setProperty('--yp', normalizedY.toFixed(2));
          cardRef.current.style.setProperty('--opacity', '1');
        } else {
          // When mouse is outside, fade the glow
          cardRef.current.style.setProperty('--opacity', '0.3');
        }
      }
    };

    document.addEventListener('pointermove', syncPointer);
    return () => document.removeEventListener('pointermove', syncPointer);
  }, []);

  const { base, spread, hue, saturation, lightness } = glowColorMap[glowColor];

  // Determine sizing
  const getSizeClasses = () => {
    if (customSize) {
      return ''; // Let className or inline styles handle sizing
    }
    return sizeMap[size];
  };

  const getInlineStyles = () => {
    const baseStyles: React.CSSProperties & Record<string, string | number> = {
      '--base': base,
      '--spread': spread,
      '--radius': '14',
      '--border': '2',
      '--backdrop': 'hsl(0 0% 60% / 0.12)',
      '--backup-border': 'var(--backdrop)',
      '--size': '200',
      '--outer': '1',
      '--border-size': 'calc(var(--border, 2) * 1px)',
      '--spotlight-size': 'calc(var(--size, 150) * 1px)',
      '--hue': hue.toString(),
      '--saturation': saturation.toString(),
      '--lightness': lightness.toString(),
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(${hue} ${saturation}% ${lightness}% / calc(0.15 * var(--opacity, 1))), transparent
      )`,
      backgroundColor: 'var(--backdrop, transparent)',
      backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
      backgroundPosition: '50% 50%',
      backgroundAttachment: 'fixed',
      border: 'var(--border-size) solid var(--backup-border)',
      position: 'relative',
      touchAction: 'none',
    };

    // Add width and height if provided
    if (width !== undefined) {
      baseStyles.width = typeof width === 'number' ? `${width}px` : width;
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === 'number' ? `${height}px` : height;
    }

    return baseStyles;
  };

  const beforeAfterStyles = `
    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-attachment: fixed;
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
      transition: opacity 0.3s ease;
    }
    
    [data-glow]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue) var(--saturation)% calc(var(--lightness) * 0.8%) / calc(0.9 * var(--opacity, 1))), transparent 100%
      );
      filter: brightness(2);
      opacity: var(--opacity, 1);
    }
    
    [data-glow]::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue) var(--saturation)% calc(var(--lightness) * 1.2%) / calc(0.8 * var(--opacity, 1))), transparent 100%
      );
      opacity: var(--opacity, 1);
    }
    
    [data-glow] [data-glow] {
      position: absolute;
      inset: 0;
      will-change: filter;
      opacity: var(--outer, 1);
      border-radius: calc(var(--radius) * 1px);
      border-width: calc(var(--border-size) * 20);
      filter: blur(calc(var(--border-size) * 10));
      background: none;
      pointer-events: none;
      border: none;
    }
    
    [data-glow] > [data-glow]::before {
      inset: -10px;
      border-width: 10px;
    }
    
    /* Additional border glow effect */
    [data-glow] {
      box-shadow: 
        0 0 20px calc(var(--opacity, 1) * 10px) hsl(var(--hue) var(--saturation)% calc(var(--lightness) * 0.5%),
        inset 0 0 20px calc(var(--opacity, 1) * 5px) hsl(var(--hue) var(--saturation)% calc(var(--lightness) * 0.3%);
      transition: box-shadow 0.3s ease;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        style={getInlineStyles()}
        className={`
          ${getSizeClasses()}
          ${!customSize ? 'aspect-[3/4]' : ''}
          rounded-2xl 
          relative 
          grid 
          grid-rows-[1fr_auto] 
          shadow-[0_1rem_2rem_-1rem_black] 
          p-4 
          gap-4 
          backdrop-blur-[5px]
          border border-white/10
          ${className}
        `}
      >
        <div ref={innerRef} data-glow></div>
        {children}
      </div>
    </>
  );
};

export { GlowCard } 