'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react'; // Use the useGSAP hook
import { gsap } from 'gsap';
import {
  EffectContainer,
  EffectWrapper,
  DropWrapper,
  Raindrop,
  SplatSC,
} from './styled/Weather';

interface EffectProps {
  numberOfDrops?: number;
}

const GsapRainEffect: React.FC<EffectProps> = ({ numberOfDrops = 200 }) => {
  const rainContainerRef = useRef<HTMLDivElement>(null);

  const raindrops = Array.from({ length: numberOfDrops }).map((_, index) => {
    return (
      <DropWrapper key={index}>
        <Raindrop className='raindrop' />
        <SplatSC className='splat' />
      </DropWrapper>
    );
  });

  useGSAP(
    () => {
      gsap.utils.toArray<Element>('.raindrop').forEach((raindrop) => {
        const wrapper = raindrop.parentElement!;
        const splat = wrapper.querySelector('.splat') as HTMLElement;

        // Random values using gsap.utils.random() instead of Math.random()
        const randomY = gsap.utils.random(0, 2); // Random vertical position above viewport
        const randomX = gsap.utils.random(10, 90); // Random horizontal position
        const randomEndY = gsap.utils.random(50, 80); // Random vertical position above viewport
        const fallDuration = gsap.utils.random(0.7, 1.7); // Random duration for falling effect

        const tl = gsap.timeline({
          repeat: -1,
        });

        tl.set([raindrop, splat], {
          x: `${randomX}vw`,
          opacity: 1,
        });

        tl.set(raindrop, {
          y: `${randomY}vh`,
          height: `${randomY}vw`,
        });

        tl.set(splat, {
          y: `${randomEndY}vh`, // splat fixed at bottom
          scale: 0,
          opacity: 0,
        });

        tl.to(raindrop, {
          y: `${randomEndY}vh`,
          duration: fallDuration,
          opacity: 0,
        });

        tl.to(raindrop, {
          scaleY: 0.5, // squash effect
          duration: 0.1,
          ease: 'back.out(1.7)', // ease for slight bounce
        });

        // splash effect
        tl.fromTo(
          splat,
          {
            scale: 1,
            opacity: 0.7,
          },
          {
            scale: 1.5,
            opacity: 0,
            duration: 0.3,
            ease: 'power1.out',
          }
        );
      });
    },
    { scope: rainContainerRef }
  );

  return (
    <EffectContainer ref={rainContainerRef}>
      <EffectWrapper>{raindrops}</EffectWrapper>
    </EffectContainer>
  );
};

export default GsapRainEffect;
