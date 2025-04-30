'use client';
import { useMediaQuery } from 'usehooks-ts';

import useHistoricalDatesQuery from '../hooks/useHistoricalDatesQuery';
import { SelfCenteredBoxSC } from '@/shared/ui/containers/SelfCenteredBox';
import AnimatedCircleSpinnerGSAP from '@/shared/ui/spinners/gsap/AnimatedCircleSpinner';

interface IProps {
  controls: boolean;
  withLabel: boolean;
}
const CategoriesAnimatedSpinner = ({
  controls,
  withLabel,
}: Partial<IProps>) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const { categories } = useHistoricalDatesQuery();

  return (
    <SelfCenteredBoxSC>
      <AnimatedCircleSpinnerGSAP
        items={categories}
        radius={265}
        size={8}
        controls={controls}
        withLabel={withLabel}
        isVisible={!isMobile}
      />
    </SelfCenteredBoxSC>
  );
};

export default CategoriesAnimatedSpinner;
