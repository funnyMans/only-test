import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { historicalDatesOptions } from '@/features/blog/historical-dates/api/historicalDatesOptions';
import { getQueryClient } from '@/shared/lib/tanstack-react-query/get-query-client';
import { PageContainerSC } from '@/shared/ui/containers/PageContainer';
import HistoricalDatesArea from '@/features/blog/historical-dates';
import { Suspense } from 'react';
import { dateCategoriesOptions } from '@/features/blog/historical-dates/api/datesCategoriesOptions';

const TestPage = () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(historicalDatesOptions);
  void queryClient.prefetchQuery(dateCategoriesOptions);

  return (
    <PageContainerSC>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<>loading...</>}>
          <HistoricalDatesArea />
        </Suspense>
      </HydrationBoundary>
    </PageContainerSC>
  );
};

export default TestPage;
