'use client';
import useHistoricalDatesQuery from '../hooks/useHistoricalDatesQuery';
import DateRangeView from '@/shared/ui/custom/DateRangeView';

const EventsDateRange = () => {
  const { currentCategory, historicalEvents } = useHistoricalDatesQuery();
  const category = historicalEvents[currentCategory];

  const length = category.length;
  const startDate = category[0].year;
  const endDate = category[length - 1].year;

  return <DateRangeView startDate={startDate} endDate={endDate} />;
};

export default EventsDateRange;
