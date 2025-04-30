import { PageContainerSC } from '@/shared/ui/containers/PageContainer';
import { FlexContainerSC } from '@/shared/ui/containers/FlexContainer';

const RootLoading = () => {
  return (
    <PageContainerSC>
      <FlexContainerSC $justify='center' $align='center' $fullHeight $fullWidth>
        RootLoading
      </FlexContainerSC>
    </PageContainerSC>
  );
};
export default RootLoading;
