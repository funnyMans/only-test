import {
  SlideItemContentSC,
  SlideItemSC,
  SlideItemTitleSC,
} from '@/shared/ui/sliders/swiper/styled/SlideItem';
import { HistoryEvent } from '@/shared/types/historical-dates';

interface IProps {
  slide: HistoryEvent;
  index: number;
}
const EventSlideToBeMapped = ({ slide }: Partial<IProps>) => {
  return (
    <SlideItemSC>
      <SlideItemTitleSC>{slide?.year}</SlideItemTitleSC>
      <SlideItemContentSC>{slide?.event}</SlideItemContentSC>
    </SlideItemSC>
  );
};

export default EventSlideToBeMapped;
