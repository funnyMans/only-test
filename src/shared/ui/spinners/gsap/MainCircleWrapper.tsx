'use client';
import { PropsWithChildren, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

import SpinnerItem from './SpinnerItem';
import SpinnerControls from './SpinnerControls';
import { SelfCenteredBoxSC } from '../../containers/SelfCenteredBox';
import { GsapMainCircleSC } from './styled/GsapMainCircle';
import { FlexContainerSC } from '../../containers/FlexContainer';
import { getAngles } from '@/shared/lib/helpers/math-operations/getAngles';
import { useHistoricalDatesContext } from '@/features/blog/historical-dates/hooks/useHistoricalDatesContext';

interface IProps extends PropsWithChildren {
  radius: number;
  size: number;
  items: string[];
  controls?: boolean;
  withLabel?: boolean;
  isVisible?: boolean;
  handler?: (item: string) => void;
}
const MainCircleWrapper = ({
  children,
  size,
  items,
  radius,
  controls,
  withLabel,
  isVisible,
  handler,
}: IProps) => {
  const { handleCategorySelection } = useHistoricalDatesContext();

  const circleRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeRotation, setActiveRotation] = useState(0);

  const angles = getAngles(items.length);

  useGSAP(() => {
    gsap.to(circleRef.current, {
      rotate: activeRotation,
      duration: 1,
      ease: 'power2.out',
    });
  }, [activeRotation]);

  const handleClick = (index: number) => {
    if (activeIndex !== index) {
      const angle = angles[index];
      const targetAngle = -60; // rotate clicked dot to top
      const rotateTo = targetAngle - angle;

      setActiveIndex(index);
      setActiveRotation(rotateTo);
      handleCategorySelection?.(items[index]);

      handler?.(items[index]);
    }
  };

  return isVisible ? (
    <SelfCenteredBoxSC>
      <FlexContainerSC ref={circleRef}>
        <GsapMainCircleSC
          $radius={radius}
          $rotate={activeRotation}
          className='circle'
        >
          {children}
          {items.map((item, i) => {
            const rad = (angles[i] * Math.PI) / 180;
            const x = Math.floor(radius * Math.cos(rad));
            const y = Math.floor(radius * Math.sin(rad));
            const isActive = activeIndex === i;

            return (
              <SpinnerItem
                key={item}
                item={item}
                index={i}
                rotation={{ x, y }}
                size={size}
                activeRotation={activeRotation}
                isActive={isActive}
                withLabel={withLabel}
                onClick={handleClick}
              />
            );
          })}
        </GsapMainCircleSC>
      </FlexContainerSC>
      {controls ? (
        <SpinnerControls
          activeIndex={activeIndex}
          length={items.length}
          handleClick={handleClick}
        />
      ) : null}
    </SelfCenteredBoxSC>
  ) : null;
};

export default MainCircleWrapper;
