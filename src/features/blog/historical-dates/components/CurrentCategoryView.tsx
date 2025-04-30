'use client';
import { useMediaQuery } from 'usehooks-ts';

import { useHistoricalDatesContext } from '../hooks/useHistoricalDatesContext';
import { CategoryTitleContainerSC } from './styled/CategoryTitleContainerSC';
import { capitalize } from '@/shared/lib/helpers/text/capitalize';
import { HeadingSC } from '@/shared/ui/typography/Heading';

const CurrentCategoryView = () => {
  const { currentCategory } = useHistoricalDatesContext();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const title = capitalize(currentCategory);

  return isMobile ? (
    <CategoryTitleContainerSC>
      <HeadingSC>{title}</HeadingSC>
    </CategoryTitleContainerSC>
  ) : null;
};

export default CurrentCategoryView;
