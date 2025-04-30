import { queryOptions } from '@tanstack/react-query';

// import { config } from '@/shared/lib/config/config';
import { IProject } from '@/shared/types/team';

export const generalInfoOptions = queryOptions<IProject>({
  queryKey: ['general-info'],
  queryFn: async () => {
    try {
      const response = await fetch(
        `https://github.com/funnyMans/only-test/blob/main/public/mock/project.json`
      );
      return response.json();
    } catch (error) {
      return JSON.stringify(error);
    }
  },
});
