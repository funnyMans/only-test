'use client';
import EventSlideToBeMapped from './EventSlideToBeMapped';
import useHistoricalDatesQuery from '../hooks/useHistoricalDatesQuery';

import SwiperCore from '@/shared/ui/sliders/swiper/SwiperCore';
import { SwiperContainerSC } from '@/shared/ui/sliders/swiper/styled/SwiperContainerSC';
import { useMediaQuery } from 'usehooks-ts';
import { useMemo } from 'react';

const HistoricalDatesSlider = () => {
  const { historicalEvents, currentCategory } = useHistoricalDatesQuery();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const slidesPerView = useMemo(() => (isMobile ? 2 : 3), [isMobile]);

  return (
    <SwiperContainerSC>
      <SwiperCore
        slides={historicalEvents[currentCategory]}
        slidesPerView={slidesPerView}
        pagination={isMobile}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
      >
        <EventSlideToBeMapped />
      </SwiperCore>
    </SwiperContainerSC>
  );
};

export default HistoricalDatesSlider;
