'use client';
import styled from 'styled-components';

export const EffectContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 2; /* Ensures that this effect stays behind content */
  pointer-events: none; /* Makes sure rain doesn’t interfere with clicks */
`;

export const EffectWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Snowdrop = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  background-color: ${({ theme }) => theme.text.primary};
  border-radius: 50%; /* round like snow */
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.4); /* soft glow */
  pointer-events: none;
`;

//rain

export const DropWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Raindrop = styled.div`
  width: 1px;
  height: 30px;
  background-color: ${({ theme }) => theme.text.primary};
  border-radius: 50%;
  pointer-events: none;
`;

export const SplatSC = styled.div`
  width: 15px;
  height: 10px;
  border-top: ${({ theme }) => `2px dotted ${theme.text.primary}`};
  border-radius: 50%;
  opacity: 1;
  transform: scale(0);
  pointer-events: none;
  filter: blur(1px);
`;

//sunshine

export const RayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Ray = styled.div`
  pointer-events: none;
  transform-origin: top center;
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  background: linear-gradient(
    to bottom,
    hsla(50, 90%, 70%, 0.9) 0%,
    hsla(50, 70%, 50%, 0.3) 60%,
    hsla(50, 50%, 30%, 0) 100%
  );
  filter: blur(2px);
  opacity: 0.7;
`;

export const SunSplat = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: hsla(50, 100%, 60%, 1);
  opacity: 1;
  transform: scale(0);
  pointer-events: none;
  filter: blur(20px); /* Decreased blur for more focus */
`;
