'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import useHistoricalDatesQuery from '../hooks/useHistoricalDatesQuery';
import { CategoriesAnimatedSpinnerSC } from './styled/CategoriesAnimatedSpinnerSC';

const DynamicAnimatedCircleSpinnerGSAP = dynamic(
  () => import('@/shared/ui/spinners/gsap/AnimatedCircleSpinner'),
  {
    ssr: false,
  }
);
interface IProps {
  controls: boolean;
  withLabel: boolean;
}
const CategoriesAnimatedSpinner = ({
  controls,
  withLabel,
}: Partial<IProps>) => {
  const { categories } = useHistoricalDatesQuery();

  return (
    <CategoriesAnimatedSpinnerSC>
      <Suspense fallback={<>Loading spinner...</>}>
        <DynamicAnimatedCircleSpinnerGSAP
          items={categories}
          radius={265}
          size={8}
          controls={controls}
          withLabel={withLabel}
          isVisible
        />
      </Suspense>
    </CategoriesAnimatedSpinnerSC>
  );
};

export default CategoriesAnimatedSpinner;
