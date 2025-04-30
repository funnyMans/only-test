import { PropsWithChildren } from 'react';
import {
  GridLayoutSC,
  GridMainContentSC,
} from '@/shared/ui/containers/GridLayout';
import { SideLinesOverlaySC } from '@/shared/ui/containers/SideLinesOverlay';
import { CenterCrossContainerSC } from '@/shared/ui/containers/CrossContainer';

const TestPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <GridLayoutSC>
      <GridMainContentSC>
        <SideLinesOverlaySC>
          <CenterCrossContainerSC>{children}</CenterCrossContainerSC>
        </SideLinesOverlaySC>
      </GridMainContentSC>
    </GridLayoutSC>
  );
};

export default TestPageLayout;
