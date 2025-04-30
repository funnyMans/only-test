'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { dateCategoriesOptions } from '../api/datesCategoriesOptions';
import { historicalDatesOptions } from '../api/historicalDatesOptions';
import { useHistoricalDatesContext } from './useHistoricalDatesContext';

const useHistoricalDatesQuery = () => {
  const { data: historicalEvents } = useSuspenseQuery(historicalDatesOptions);
  const { data: categories } = useSuspenseQuery(dateCategoriesOptions);
  const { currentCategory, handleCategorySelection } =
    useHistoricalDatesContext();

  return {
    historicalEvents,
    categories,
    currentCategory,
    handleCategorySelection,
  };
};

export default useHistoricalDatesQuery;
