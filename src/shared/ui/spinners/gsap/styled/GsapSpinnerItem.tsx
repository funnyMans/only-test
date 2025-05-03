'use client';
import styled from 'styled-components';

type Rotation = {
  x: number;
  y: number;
};
type SpinnerItemProps = {
  $activeRotation: number;
  $rotation: Rotation;
  $size: number;
  $isIndexActive?: boolean;
};

export const GsapSpinnerItemSC = styled.div<SpinnerItemProps>`
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ $size, $isIndexActive }) =>
    $isIndexActive ? `${$size * 7}px` : `${$size}px`};
  height: ${({ $size, $isIndexActive }) =>
    $isIndexActive ? `${$size * 7}px` : `${$size}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: ${({ theme }) => `
   0 0 5px ${theme.text.shine}, 0 0 10px ${theme.text.shine}, 0 0 20px ${theme.text.shine},
    0 0 30px ${theme.text.shine}`};
  box-shadow: ${({ theme }) => `0 0 4px 4px ${theme.colors.lightBlue}40`};
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? theme.colors.lightBlue : theme.colors.independence};
  transform: ${({ $rotation, $activeRotation }) =>
    `translate(-50%, -50%) translate(${$rotation.x}px, ${
      $rotation.y
    }px) rotate(${-$activeRotation}deg)`};

  border-radius: 50%;
  border: ${({ theme, $isIndexActive }) =>
    !$isIndexActive
      ? 'none'
      : theme.mode === 'dark'
      ? `1px solid ${theme.text.lightBlue}`
      : `none`};
  color: ${({ theme }) => theme.text.onPrimary};
  z-index: 1000;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.bg.vice};
    transform: ${({ $rotation, $activeRotation, $isIndexActive }) =>
      !$isIndexActive &&
      `translate(${$rotation.x}px, ${
        $rotation.y
      }px) rotate(${-$activeRotation}deg) scale(7)`};
  }
  &:active {
    transform: ${({ $rotation, $activeRotation, $isIndexActive }) =>
      !$isIndexActive &&
      `translate(${$rotation.x}px, ${
        $rotation.y
      }px) rotate(${-$activeRotation}deg) scale(0.8)`};
  }
  &:hover > p {
    display: inline;
    color: ${({ theme }) => theme.text.primary};
  }

  @media (max-width: 768px) {
    width: ${({ $size, $isIndexActive }) =>
      $isIndexActive ? `${($size * 7) / 2}px` : `${$size}px`};
    height: ${({ $size, $isIndexActive }) =>
      $isIndexActive ? `${($size * 7) / 2}px` : `${$size}px`};
    transform: ${({ $rotation, $activeRotation }) =>
      `translate(-50%, -50%) translate(${$rotation.x / 2}px, ${
        $rotation.y / 2
      }px) rotate(${-$activeRotation}deg)`};
    &:hover {
      background-color: ${({ theme }) => theme.bg.vice};
      transform: ${({ $rotation, $activeRotation, $isIndexActive }) =>
        !$isIndexActive &&
        `translate(${$rotation.x / 2}px, ${
          $rotation.y / 2
        }px) rotate(${-$activeRotation}deg) scale(2)`};
    }
  }
`;

export const SpinnerItemContentSC = styled.p<{ $isActive: boolean }>`
  text-align: center;
  display: ${({ $isActive }) => ($isActive ? 'inline' : 'none')};
  height: fit-content;
  color: ${({ theme }) => theme.text.onPrimary};
  font-size: ${({ theme, $isActive }) =>
    $isActive ? theme.fontSizes[32] : '5px'};
`;

export const SpinnerItemLabelSC = styled.span`
  position: absolute;
  left: 70px;
  color: ${({ theme }) => theme.text.primary};
  font-size: ${({ theme }) => theme.fontSizes[32]};
  font-weight: 700;
  opacity: 0.8;
`;
