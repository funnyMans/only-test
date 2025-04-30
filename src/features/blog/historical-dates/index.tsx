import HistoricalDatesContextProvider from './context/HistoricalDatesContext';
import CategoriesAnimatedSpinner from './components/CategoriesAnimatedSpinner';
import HistoricalDatesSlider from './components/HistoricalDatesSlider';
import CurrentCategoryView from './components/CurrentCategoryView';
import EventsDateRange from './components/EventsDateRange';
import DatesHeading from './components/DatesHeading';

import { FlexContainerSC } from '@/shared/ui/containers/FlexContainer';
import { Suspense } from 'react';

const HistoricalDatesArea = async () => {
  return (
    <FlexContainerSC
      $direction='column'
      $justify='space-between'
      $align='center'
      $gap='1rem'
      $fullHeight
    >
      <DatesHeading />
      <HistoricalDatesContextProvider>
        <Suspense fallback={<>Loading</>}>
          <CategoriesAnimatedSpinner controls withLabel />
          <EventsDateRange />
          <CurrentCategoryView />
          <HistoricalDatesSlider />
        </Suspense>
      </HistoricalDatesContextProvider>
    </FlexContainerSC>
  );
};

export default HistoricalDatesArea;
