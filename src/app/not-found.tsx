import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';

import { FlexContainerSC } from '@/shared/ui/containers/FlexContainer';
import { PageContainerSC } from '@/shared/ui/containers/PageContainer';
import { HeadingSC } from '@/shared/ui/typography/Heading';

const NotFound = () => {
  return (
    <PageContainerSC>
      <FlexContainerSC
        $fullWidth
        $fullHeight
        $direction='column'
        $justify='center'
        $align='center'
      >
        <HeadingSC>Page not found</HeadingSC>
        <Link href='/'>
          <MdArrowBack size={10} /> Go back home
        </Link>
      </FlexContainerSC>
    </PageContainerSC>
  );
};

export default NotFound;
