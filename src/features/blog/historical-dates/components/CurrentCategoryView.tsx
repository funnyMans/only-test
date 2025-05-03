'use client';

import { useHistoricalDatesContext } from '../hooks/useHistoricalDatesContext';
import { CategoryTitleContainerSC } from './styled/CategoryTitleContainerSC';
import { capitalize } from '@/shared/lib/helpers/text/capitalize';
import { HeadingSC } from '@/shared/ui/typography/Heading';

const CurrentCategoryView = () => {
  const { currentCategory } = useHistoricalDatesContext();

  const title = capitalize(currentCategory);

  return (
    <CategoryTitleContainerSC>
      <HeadingSC>{title}</HeadingSC>
    </CategoryTitleContainerSC>
  );
};

export default CurrentCategoryView;
