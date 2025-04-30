'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  EffectContainer,
  EffectWrapper,
  RayWrapper,
  SunSplat,
  Ray,
} from './styled/Weather';

interface EffectProps {
  numberOfRays?: number;
}

const SunshineEffect: React.FC<EffectProps> = ({ numberOfRays = 75 }) => {
  const sunshineContainerRef = useRef<HTMLDivElement>(null);

  // Generate rays with randomized properties
  const rays = Array.from({ length: numberOfRays }).map(() => ({
    randomX: gsap.utils.random(-10, 100),
    rayWidth: gsap.utils.random(2, 10),
    moveRange: gsap.utils.random(3, 5),
    splatBlur: gsap.utils.random(1, 3), // Lower blur for splat
    rayLength: gsap.utils.random(40, 80),
    splatOpacity: gsap.utils.random(0.4, 1),
    sunshineDuration: gsap.utils.random(5, 8),
  }));

  useGSAP(
    () => {
      gsap.utils.toArray<Element>('.ray').forEach((ray, index) => {
        const {
          randomX,
          sunshineDuration,
          rayLength,
          moveRange,
          rayWidth,
          splatOpacity,
          splatBlur,
        } = rays[index];

        const splat = ray.nextElementSibling as HTMLElement;

        const tl = gsap.timeline({ repeat: -1 });

        // Set initial properties for both ray and splat
        tl.set([ray, splat], {
          y: 0,
          x: `${randomX}vw`,
          opacity: 1,
        });

        // Apply common styles and animations for ray and splat
        tl.set(ray, {
          width: `${rayWidth}px`,
          opacity: splatOpacity,
          rotation: `-7deg`, // Angle of the rays
        });

        tl.to(ray, {
          height: `${rayLength}vh`,
          duration: 1,
          ease: 'power1.inOut',
        });

        // Splat appearance (with less blur, more like splat with shadow)
        tl.set(splat, {
          height: `${rayLength - 35}px `,
          width: `${rayLength * 1.5}px`,
          y: `${rayLength / 5}vh`,
          scale: 1,
          opacity: splatOpacity,
          filter: `blur(${splatBlur}px)`,
        });

        // Combined ray and splat animation
        tl.to([ray, splat], {
          x: `+=${moveRange}vw`,
          duration: sunshineDuration,
          ease: 'power1.inOut',
        });
      });
    },
    { scope: sunshineContainerRef }
  );

  const sunShines = Array.from({ length: numberOfRays }).map((_, index) => (
    <RayWrapper key={index}>
      <Ray className='ray' />
      <SunSplat className='splat' />
    </RayWrapper>
  ));

  return (
    <EffectContainer ref={sunshineContainerRef}>
      <EffectWrapper>{sunShines}</EffectWrapper>
    </EffectContainer>
  );
};

export default SunshineEffect;
