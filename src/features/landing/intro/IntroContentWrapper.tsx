'use client';

import { GridMainContentSC } from '@/shared/ui/containers/GridLayout';
import { useState } from 'react';
import AnimationsContent from './components/Animations';
import IntroGeneralInfo from './components/IntroGeneralInfo';
import AnimatedCircleSpinnerGSAP from '@/shared/ui/spinners/gsap/AnimatedCircleSpinner';
import TaskCheckButton from './components/TaskCheckButton';
import ToolsGallery from './components/ToolsGallery';

const weather = ['calm', 'snow', 'rain', 'sunny'];
const showCaseItems_3 = ['1', '2', '3'];
const showCaseItems_5 = ['1', '2', '3', '4', '5'];

import useGeneralInfo from './hooks/useGeneralInfo';
const IntroContentWrapper = () => {
  const { company: team, tools } = useGeneralInfo();

  const [animation, setAnimation] = useState(weather[0]);

  return (
    <>
      <ToolsGallery tools={tools} speed={4000} delaySlide={4000} />
      <GridMainContentSC>
        <IntroGeneralInfo team={team}>
          <AnimatedCircleSpinnerGSAP
            items={showCaseItems_3}
            radius={100}
            size={10}
            handler={setAnimation}
          />
          <AnimatedCircleSpinnerGSAP
            items={weather}
            radius={150}
            size={15}
            handler={setAnimation}
          >
            <TaskCheckButton />
          </AnimatedCircleSpinnerGSAP>
          <AnimatedCircleSpinnerGSAP
            items={showCaseItems_5}
            radius={100}
            size={10}
            handler={setAnimation}
          />
        </IntroGeneralInfo>
      </GridMainContentSC>
      <ToolsGallery
        tools={tools}
        speed={5000}
        delaySlide={5000}
        reverseDirection
      />
      <AnimationsContent animationName={animation} />
    </>
  );
};

export default IntroContentWrapper;
