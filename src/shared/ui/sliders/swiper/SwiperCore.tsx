// components/ReusableSwiper.tsx
import { PropsWithChildren } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  EffectCoverflow,
  EffectCreative,
  EffectFade,
  Navigation,
  Pagination,
  Keyboard,
  Virtual,
  Autoplay,
  Mousewheel,
  EffectCards,
  EffectFlip,
  EffectCube,
} from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

import { HistoryEvent } from '@/shared/types/historical-dates';
import SwiperControls from './SwiperControls';
import { SlideItemStyleProps } from './styled/SlideItem';
import ChildrenWithProps from '../../containers/ChildrenWithProps';
import { ITool } from '@/shared/types/team';

interface SwiperProps {
  slides: HistoryEvent[] | ITool[]; // Array of slide items
  slidesPerView?: number | 'auto'; // Number of slides to display at once
  spaceBetween?: number; // Space between slides (in px)
  navigation?: boolean | SwiperOptions['navigation']; // Show navigation arrows
  pagination?: boolean; // Show pagination bullets
  autoplay?: boolean; // Enable autoplay
  effect?: string; // Transition effect
  loop?: boolean; // Loop through slides
  speed?: number; // Transition speed (in ms)
  delay?: number; // Delay before autoplay starts (in ms)
  virtual?: boolean;
  reverseDirection?: boolean; // Enable virtual slides
  slideItemStyle?: SlideItemStyleProps;
  direction?: 'vertical' | 'horizontal';
}
interface IProps extends SwiperProps, PropsWithChildren {}

const SwiperCore = ({
  children,
  slides,
  speed = 400,
  delay = 4000,
  slidesPerView = 'auto',
  spaceBetween = 25,
  reverseDirection = false,
  navigation = false,
  pagination = false,
  autoplay = false,
  loop = false,
  virtual = true,
  effect = 'none',
  direction = 'horizontal',
}: // slideItemStyle,
IProps) => {
  return (
    <>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Keyboard,
          Mousewheel,
          Virtual,
          EffectFade,
          EffectCoverflow,
          EffectCreative,
          EffectCards,
          EffectFlip,
          EffectCube,
          Autoplay,
        ]}
        speed={speed}
        direction={direction}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        simulateTouch={true}
        allowTouchMove={true}
        pagination={pagination ? { clickable: true } : false}
        autoplay={
          autoplay
            ? {
                delay,
                pauseOnMouseEnter: true,
                reverseDirection: reverseDirection,
              }
            : false
        }
        loop={loop}
        effect={effect}
        virtual={virtual}
        navigation={navigation}
        keyboard={{
          enabled: true, // Enables keyboard navigation
          onlyInViewport: false, // Allow keyboard navigation even outside the viewport
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            virtualIndex={index}
            className='swiper-slide swiper-slide-visible swiper-slide-fully-visible'
          >
            <ChildrenWithProps slide={slide} index={index}>
              {children}
            </ChildrenWithProps>
          </SwiperSlide>
        ))}
      </Swiper>
      {navigation ? <SwiperControls /> : null}
    </>
  );
};

export default SwiperCore;
