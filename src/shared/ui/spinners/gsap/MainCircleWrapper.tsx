'use client';
import { PropsWithChildren, useMemo, useRef, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

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

  const isNotHugeScreen = useMediaQuery('(max-width:1200px)');

  const activeRadius = useMemo(() => {
    return isNotHugeScreen ? (radius * 3) / 4 : radius;
  }, [isNotHugeScreen, radius]);
  console.log({ isNotHugeScreen, activeRadius });

  const angles = getAngles(items.length);

  useGSAP(() => {
    gsap.to(circleRef.current, {
      rotate: activeRotation,
      duration: 1,
      ease: 'power2.out',
    });
  }, [activeRotation]);

  const handleClick = (index: number) => {
    const angle = angles[index];
    const targetAngle = -60; // rotate clicked dot to top
    const rotateTo = targetAngle - angle;

    if (activeIndex !== index) {
      setActiveIndex(index);
      handleCategorySelection?.(items[index]);
      setActiveRotation(rotateTo);

      handler?.(items[index]);
    }
  };

  return (
    <SelfCenteredBoxSC>
      {isVisible && (
        <FlexContainerSC ref={circleRef}>
          <GsapMainCircleSC
            $radius={activeRadius}
            $rotate={activeRotation}
            className='circle'
          >
            {children}
            {items.map((item, i) => {
              const rad = (angles[i] * Math.PI) / 180;
              const x = activeRadius * Math.cos(rad);
              const y = activeRadius * Math.sin(rad);

              return (
                <SpinnerItem
                  key={`${item}${i}`}
                  item={item}
                  index={i}
                  rotation={{ x, y }}
                  size={size}
                  activeRotation={activeRotation}
                  isActive={activeIndex === i}
                  withLabel={withLabel}
                  onClick={handleClick}
                />
              );
            })}
          </GsapMainCircleSC>
        </FlexContainerSC>
      )}
      {controls ? (
        <SpinnerControls
          activeIndex={activeIndex}
          length={items.length}
          handleClick={handleClick}
        />
      ) : null}
    </SelfCenteredBoxSC>
  );
};

export default MainCircleWrapper;
