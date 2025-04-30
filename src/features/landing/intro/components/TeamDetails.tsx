import Link from 'next/link';

import { IntroInfoContentSC, IntroInfoSC } from './styled/IntroInfoSC';

import { HeadingSC, SubHeadingSC } from '@/shared/ui/typography/Heading';
import { SelfCenteredBoxSC } from '@/shared/ui/containers/SelfCenteredBox';
import { PargraphSC } from '@/shared/ui/typography/Text';
import { ICompany } from '@/shared/types/team';

interface IProps {
  team: ICompany;
}
const TeamDetails = ({ team }: IProps) => {
  const { developer } = team;

  return (
    <SelfCenteredBoxSC $direction='row' $gap={5}>
      <IntroInfoSC $align='flex-end'>
        <IntroInfoContentSC>
          <HeadingSC>Inspiration</HeadingSC>
          <SubHeadingSC>
            <Link href={team.website} target='_blank'>
              {team.name}
            </Link>
          </SubHeadingSC>
          <PargraphSC>{team.description}</PargraphSC>
        </IntroInfoContentSC>
      </IntroInfoSC>
      <IntroInfoSC>
        <IntroInfoContentSC>
          <HeadingSC>Development</HeadingSC>
          <SubHeadingSC>
            <Link href={developer.links.github} target='_blank'>
              {developer.name}
            </Link>
          </SubHeadingSC>
          <PargraphSC>{developer.role}</PargraphSC>
        </IntroInfoContentSC>
      </IntroInfoSC>
    </SelfCenteredBoxSC>
  );
};

export default TeamDetails;
