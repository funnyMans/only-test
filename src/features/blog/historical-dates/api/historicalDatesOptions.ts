import { config } from '@/shared/lib/config/config';
import { HistoryEvent } from '@/shared/types/historical-dates';
import { queryOptions } from '@tanstack/react-query';

export const historicalDatesOptions = queryOptions<
  Record<string, HistoryEvent[]>
>({
  queryKey: ['historicalDates'],
  queryFn: async () => {
    const response = await fetch(`${config.apiUrl}/historical-dates`);

    return response.json();
  },
});
