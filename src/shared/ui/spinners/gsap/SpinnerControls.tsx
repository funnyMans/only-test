'use client';
import { useCallback } from 'react';
import { LiaChevronLeftSolid, LiaChevronRightSolid } from 'react-icons/lia';

import { ControlsAreaSC, ControlsWrapperSC } from './styled/ControlsArea';
import { GsapSpinnerBtnSC } from './styled/GsapSpinnerBtn';
import ProgressCounter from '../../custom/ProgressCounter';

interface IProps {
  activeIndex: number;
  length: number;
  handleClick: (index: number) => void;
}
const SpinnerControls = ({ activeIndex, length, handleClick }: IProps) => {
  const handlePrev = useCallback(() => {
    const prevIndex = activeIndex ? activeIndex - 1 : length - 1;
    handleClick(prevIndex);
  }, [activeIndex, length, handleClick]);

  const handleNext = useCallback(() => {
    const nextIndex = length - activeIndex > 1 ? activeIndex + 1 : 0;

    handleClick(nextIndex);
  }, [activeIndex, length, handleClick]);

  return (
    <ControlsAreaSC>
      <ProgressCounter progress={activeIndex} total={length} />
      <ControlsWrapperSC>
        <GsapSpinnerBtnSC
          onClick={handlePrev}
          $handler='prev'
          id='prev'
          title='Previous'
        >
          <LiaChevronLeftSolid fontSize={24} />
        </GsapSpinnerBtnSC>
        <GsapSpinnerBtnSC
          onClick={handleNext}
          $handler='next'
          id='next'
          title='Next'
        >
          <LiaChevronRightSolid fontSize={24} />
        </GsapSpinnerBtnSC>
      </ControlsWrapperSC>
    </ControlsAreaSC>
  );
};

export default SpinnerControls;
