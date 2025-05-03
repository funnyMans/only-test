import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { historicalDatesOptions } from '@/features/blog/historical-dates/api/historicalDatesOptions';
import { dateCategoriesOptions } from '@/features/blog/historical-dates/api/datesCategoriesOptions';
import HistoricalDatesArea from '@/features/blog/historical-dates';

import { getQueryClient } from '@/shared/lib/tanstack-react-query/get-query-client';
import { PageContainerSC } from '@/shared/ui/containers/PageContainer';

const TestPage = () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(historicalDatesOptions);
  void queryClient.prefetchQuery(dateCategoriesOptions);

  return (
    <PageContainerSC>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HistoricalDatesArea />
      </HydrationBoundary>
    </PageContainerSC>
  );
};

export default TestPage;
