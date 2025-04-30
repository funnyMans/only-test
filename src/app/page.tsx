// import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import LandingPageContent from '@/features/landing';
import { generalInfoOptions } from '@/features/landing/intro/api/generalInfoOptions';
import { getQueryClient } from '@/shared/lib/tanstack-react-query/get-query-client';
import { PageContainerSC } from '@/shared/ui/containers/PageContainer';

export default function Home() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(generalInfoOptions);
  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    <PageContainerSC>
      <LandingPageContent />
    </PageContainerSC>
    // </HydrationBoundary>
  );
}
