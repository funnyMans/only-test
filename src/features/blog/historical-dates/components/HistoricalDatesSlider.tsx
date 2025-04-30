'use client';
import { useMediaQuery } from 'usehooks-ts';
import EventSlideToBeMapped from './EventSlideToBeMapped';
import useHistoricalDatesQuery from '../hooks/useHistoricalDatesQuery';

import SwiperCore from '@/shared/ui/sliders/swiper/SwiperCore';
import { SwiperContainerSC } from '@/shared/ui/sliders/swiper/styled/SwiperContainerSC';

const HistoricalDatesSlider = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { historicalEvents, currentCategory } = useHistoricalDatesQuery();

  return (
    <SwiperContainerSC>
      <SwiperCore
        slides={historicalEvents[currentCategory]}
        slidesPerView={isMobile ? 2 : 3}
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
