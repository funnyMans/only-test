import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { generalInfoOptions } from '@/features/landing/intro/api/generalInfoOptions';
import { getQueryClient } from '@/shared/lib/tanstack-react-query/get-query-client';
import { PageContainerSC } from '@/shared/ui/containers/PageContainer';
import LandingPageContent from '@/features/landing';

export default async function Home() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(generalInfoOptions);
  return (
    <PageContainerSC>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <LandingPageContent />
      </HydrationBoundary>
    </PageContainerSC>
  );
}
