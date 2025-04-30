import { queryOptions } from '@tanstack/react-query';

import { config } from '@/shared/lib/config/config';
import { IProject } from '@/shared/types/team';

export const generalInfoOptions = queryOptions<IProject>({
  queryKey: ['general-info'],
  queryFn: async () => {
    try {
      const response = await fetch(`${config.apiUrl}/general-info`);
      return response.json();
    } catch (error) {
      return JSON.stringify(error);
    }
  },
});
