import { config } from '@/shared/lib/config/config';
import { queryOptions } from '@tanstack/react-query';

export const dateCategoriesOptions = queryOptions<string[]>({
  queryKey: ['dates-categories'],
  queryFn: async () => {
    const response = await fetch(
      `${config.apiUrl}/historical-dates/categories`
    );

    return response.json();
  },
});
