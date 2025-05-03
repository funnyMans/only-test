'use client';

import { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';

import IntroGeneralInfo from './components/IntroGeneralInfo';
import TaskCheckButton from './components/TaskCheckButton';
import AnimationsContent from './components/Animations';
import ToolsGallery from './components/ToolsGallery';
import useGeneralInfo from './hooks/useGeneralInfo';
import {
  GridAsideContentContentSC,
  GridMainContentSC,
} from '@/shared/ui/containers/GridLayout';

const DynamicAnimatedCircleSpinnerGSAP = dynamic(
  () => import('@/shared/ui/spinners/gsap/AnimatedCircleSpinner'),
  {
    ssr: false,
  }
);

const weather = ['calm', 'snow', 'rain', 'sunny'];
const showCaseItems_3 = ['1', '2', '3'];
const showCaseItems_5 = ['1', '2', '3', '4', '5'];

const IntroContentWrapper = () => {
  const { company: team, tools } = useGeneralInfo();

  const [animation, setAnimation] = useState(weather[0]);

  return (
    <>
      <GridAsideContentContentSC $leftOrRight='left'>
        <ToolsGallery tools={tools} speed={4000} delaySlide={4000} />
      </GridAsideContentContentSC>
      <GridMainContentSC>
        <IntroGeneralInfo team={team}>
          <Suspense fallback={<div>Loading spinner...</div>}>
            <DynamicAnimatedCircleSpinnerGSAP
              items={showCaseItems_3}
              radius={100}
              size={10}
              isVisible
            />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <DynamicAnimatedCircleSpinnerGSAP
              items={weather}
              radius={150}
              size={15}
              handler={setAnimation}
              isVisible
            >
              <TaskCheckButton />
            </DynamicAnimatedCircleSpinnerGSAP>
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <DynamicAnimatedCircleSpinnerGSAP
              items={showCaseItems_5}
              radius={100}
              size={10}
              isVisible
            />
          </Suspense>
        </IntroGeneralInfo>
      </GridMainContentSC>
      <GridAsideContentContentSC $leftOrRight='right'>
        <ToolsGallery
          tools={tools}
          speed={5000}
          delaySlide={5000}
          reverseDirection
        />
      </GridAsideContentContentSC>
      <AnimationsContent animationName={animation} />
    </>
  );
};

export default IntroContentWrapper;
