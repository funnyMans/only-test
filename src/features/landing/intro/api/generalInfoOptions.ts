import { queryOptions } from '@tanstack/react-query';

// import { config } from '@/shared/lib/config/config';
import { IProject } from '@/shared/types/team';
import { config } from '@/shared/lib/config/config';

export const generalInfoOptions = queryOptions<IProject>({
  queryKey: ['generalInfo'],
  queryFn: async () => {
    try {
      const response = await fetch(
        `${config.apiUrl}/general-info` // Replace with your API endpoin
      );
      const data = await response.json();

      return data;
    } catch (error) {
      return error;
    }
  },
});
