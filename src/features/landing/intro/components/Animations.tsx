import { ReactElement } from 'react';

import GsapRainEffect from '@/shared/ui/weather/GsapRainEffect';
import GsapSnowEffect from '@/shared/ui/weather/GsapSnowEffect';
import GsapSunshineEffect from '@/shared/ui/weather/GsapSunshineEffect';

type WeatherAnimation = Record<string, ReactElement>;
interface AnimationsContentProps {
  animationName: string;
}
const animations: WeatherAnimation = {
  snow: <GsapSnowEffect />,
  rain: <GsapRainEffect />,
  sunny: <GsapSunshineEffect />,
};
const AnimationsContent = ({ animationName }: AnimationsContentProps) => {
  return animationName ? animations[animationName] : null;
};

export default AnimationsContent;
