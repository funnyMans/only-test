import { queryOptions } from '@tanstack/react-query';

// import { config } from '@/shared/lib/config/config';
import { IProject } from '@/shared/types/team';

export const generalInfoOptions = queryOptions<IProject>({
  queryKey: ['generalInfo'],
  queryFn: async () => {
    try {
      const url = `https://funnymans.github.io/OnlyDigitalTask/project.json`;

      const response = await fetch(url);
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
});
