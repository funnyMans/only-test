// import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { historicalDatesOptions } from '@/features/blog/historical-dates/api/historicalDatesOptions';
import { getQueryClient } from '@/shared/lib/tanstack-react-query/get-query-client';
import { PageContainerSC } from '@/shared/ui/containers/PageContainer';
// import HistoricalDatesArea from '@/features/blog/historical-dates';

const TestPage = () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(historicalDatesOptions);

  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    <PageContainerSC>{/* <HistoricalDatesArea /> */}</PageContainerSC>
    // </HydrationBoundary>
  );
};

export default TestPage;
