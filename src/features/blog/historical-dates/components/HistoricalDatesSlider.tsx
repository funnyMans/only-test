'use client';
import EventSlideToBeMapped from './EventSlideToBeMapped';
import useHistoricalDatesQuery from '../hooks/useHistoricalDatesQuery';

import SwiperCore from '@/shared/ui/sliders/swiper/SwiperCore';
import { SwiperContainerSC } from '@/shared/ui/sliders/swiper/styled/SwiperContainerSC';

const HistoricalDatesSlider = () => {
  const { historicalEvents, currentCategory } = useHistoricalDatesQuery();

  return (
    <SwiperContainerSC>
      <SwiperCore
        slides={historicalEvents[currentCategory]}
        slidesPerView={3}
        pagination
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
