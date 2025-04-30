'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  DateRangeViewValueSC,
  RangeValueProps,
} from '../../custom/styled/DateRange';

interface AnimatedYearCounterProps {
  targetYear: number;
  duration?: number;
  countStyleProps?: RangeValueProps;
}

const AnimatedCountUpDown: React.FC<AnimatedYearCounterProps> = ({
  targetYear,
  duration = 1,
  countStyleProps,
}) => {
  const yearRef = useRef<HTMLSpanElement>(null);
  const currentYear = useRef<number>(targetYear); // starting point

  useEffect(() => {
    const obj = { val: currentYear.current };

    const animation = gsap.to(obj, {
      val: targetYear,
      duration,
      ease: 'power1.out',
      onUpdate: () => {
        currentYear.current = obj.val;
        if (yearRef.current) {
          yearRef.current.textContent = Math.round(obj.val).toString();
        }
      },
    });

    return () => {
      animation.kill();
    };
  }, [targetYear, duration]);

  return (
    <DateRangeViewValueSC ref={yearRef} {...countStyleProps}>
      {currentYear.current}
    </DateRangeViewValueSC>
  );
};

export default AnimatedCountUpDown;
