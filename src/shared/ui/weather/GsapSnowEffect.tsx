'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react'; // Use the useGSAP hook
import { gsap } from 'gsap';
import { EffectContainer, EffectWrapper, Snowdrop } from './styled/Weather';

interface EffectProps {
  numberOfDrops?: number;
}

const GsapSnowEffect = ({ numberOfDrops = 200 }: EffectProps) => {
  const snowContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<Element>('.snowdrop').forEach((drop) => {
        // Randomize the initial and animation properties using gsap.utils.random
        const randomX = gsap.utils.random(0, 100); // Random horizontal position
        const randomY = gsap.utils.random(0, 5); // Random vertical start position above viewport
        const ground = gsap.utils.random(70, 90); // Random duration for falling animation
        const scale = gsap.utils.random(0.5, 1); // Random scale of snowdrop
        const opacity = gsap.utils.random(0.4, 0.8); // Random opacity
        const duration = gsap.utils.random(5, 7); // Random duration for falling animation
        const randomWind = gsap.utils.random(-5, 5); // Random wind effect for horizontal movement

        const tl = gsap.timeline({
          paused: true,
          defaults: {
            duration: 0.5,
            ease: 'power2.out',
            repeat: -1,
          },
        });
        // Animate each snowdrop
        tl.fromTo(
          drop,
          {
            x: `${randomX}vw`,
            y: `${randomY}vh`,
            opacity: opacity,
            scale: scale,
          },
          {
            x: `+=${randomWind}vw`, // Simulate wind by shifting horizontally
            y: `${ground}vh `, // End position (bottom of viewport)
            opacity: 0, // Fade out as it falls
            duration: duration, // Random falling duration
            repeat: -1, // Infinite loop
            ease: 'linear', // Continuous movement without acceleration/deceleration
            delay: gsap.utils.random(0, 2),
            repeatDelay: 1, // Random delay for staggering
            onComplete: (target: Element) => {
              gsap.to(target, {
                scale: 0.3,
                opacity: 0.3,
                duration: 1,
              });
            },
          }
        );

        tl.play(); // Start the timeline for each snowdrop
      });
    },
    { scope: snowContainerRef, dependencies: [numberOfDrops] }
  );

  // Generate array of snowdrops
  const raindrops = Array.from({ length: numberOfDrops }).map((_, index) => (
    <Snowdrop key={index} className='snowdrop' />
  ));

  return (
    <EffectContainer ref={snowContainerRef}>
      <EffectWrapper>{raindrops}</EffectWrapper>
    </EffectContainer>
  );
};

export default GsapSnowEffect;
