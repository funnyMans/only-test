import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { historicalDatesOptions } from '@/features/blog/historical-dates/api/historicalDatesOptions';
import { getQueryClient } from '@/shared/lib/tanstack-react-query/get-query-client';
import { PageContainerSC } from '@/shared/ui/containers/PageContainer';
import HistoricalDatesArea from '@/features/blog/historical-dates';
import { Suspense } from 'react';

const TestPage = () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(historicalDatesOptions);

  return (
    <PageContainerSC>
      <Suspense fallback={<>loading...</>}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <HistoricalDatesArea />
        </HydrationBoundary>
      </Suspense>
    </PageContainerSC>
  );
};

export default TestPage;
