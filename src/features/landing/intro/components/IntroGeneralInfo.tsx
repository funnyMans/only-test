import { PropsWithChildren } from 'react';

import InfoLinks from './InfoLinks';
import TeamDetails from './TeamDetails';
import { SelfCenteredBoxSC } from '@/shared/ui/containers/SelfCenteredBox';
import { FlexContainerSC } from '@/shared/ui/containers/FlexContainer';
import { ICompany } from '@/shared/types/team';

interface IntroContentProps extends PropsWithChildren {
  team: ICompany;
}
const IntroGeneralInfo: React.FC<IntroContentProps> = ({ children, team }) => {
  return (
    <FlexContainerSC $direction='column' $height='100%'>
      <TeamDetails team={team} />
      <SelfCenteredBoxSC $direction='row' $gap={3}>
        {children}
      </SelfCenteredBoxSC>
      <InfoLinks team={team} />
    </FlexContainerSC>
  );
};

export default IntroGeneralInfo;
