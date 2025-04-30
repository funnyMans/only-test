import Link from 'next/link';
import { GrGithub } from 'react-icons/gr';
import { BsTelegram } from 'react-icons/bs';

import { TaskCheckBtnSC } from './styled/TaskCheckBtn';
import { SelfCenteredBoxSC } from '@/shared/ui/containers/SelfCenteredBox';
import { FlexContainerSC } from '@/shared/ui/containers/FlexContainer';
import { SubHeadingSC } from '@/shared/ui/typography/Heading';
import { ICompany } from '@/shared/types/team';

interface IProps {
  team: ICompany;
}
const InfoLinks = ({ team }: IProps) => {
  return (
    <SelfCenteredBoxSC $direction='row' $gap={1}>
      <FlexContainerSC $width='150px' $justify='flex-end'>
        <Link
          href={`${team.developer.links.github}/only-test`}
          target='_blank'
          rel='noreferrer'
        >
          <TaskCheckBtnSC>
            <GrGithub /> <span>Docs</span>
          </TaskCheckBtnSC>
        </Link>
      </FlexContainerSC>
      <FlexContainerSC $width='150px' $justify='center'>
        <Link
          href={team.developer.links.headhunter}
          target='_blank'
          rel='noreferrer'
        >
          <TaskCheckBtnSC>
            <SubHeadingSC $fontSize={16}>hh</SubHeadingSC>
            <span>Resume</span>
          </TaskCheckBtnSC>
        </Link>
      </FlexContainerSC>
      <FlexContainerSC $width='150px' $justify='flex-start'>
        <Link
          href={team.developer.links.telegram}
          target='_blank'
          rel='noreferrer'
        >
          <TaskCheckBtnSC>
            <BsTelegram /> <span>Connect</span>
          </TaskCheckBtnSC>
        </Link>
      </FlexContainerSC>
    </SelfCenteredBoxSC>
  );
};

export default InfoLinks;
