import { HistoryEvent } from '@/shared/types/historical-dates';
import { queryOptions } from '@tanstack/react-query';

export const historicalDatesOptions = queryOptions<
  Record<string, HistoryEvent[]>
>({
  queryKey: ['historicalDates'],
  queryFn: async () => {
    try {
      const response = await fetch(
        `https://funnymans.github.io/OnlyDigitalTask/historical-dates.json`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
});
