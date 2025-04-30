import { ToolGallerySC } from './styled/ToolsGallery';
import ToolSlideItemContent from './ToolSlideItemContent';
import SwiperCore from '@/shared/ui/sliders/swiper/SwiperCore';
import { ITool } from '@/shared/types/team';

interface IProps {
  tools: ITool[];
  speed?: number;
  delaySlide?: number;
  reverseDirection?: boolean;
}

export default function ToolsGallery({
  tools,
  speed,
  delaySlide,
  reverseDirection,
}: IProps) {
  return (
    <ToolGallerySC>
      <SwiperCore
        loop
        slides={tools}
        autoplay
        slidesPerView={5}
        virtual={false}
        spaceBetween={5}
        direction='vertical'
        speed={speed}
        delay={delaySlide}
        reverseDirection={reverseDirection}
      >
        <ToolSlideItemContent />
      </SwiperCore>
    </ToolGallerySC>
  );
}
