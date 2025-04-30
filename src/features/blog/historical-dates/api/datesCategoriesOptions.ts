import { queryOptions } from '@tanstack/react-query';

export const dateCategoriesOptions = queryOptions<string[]>({
  queryKey: ['datesCategories'],
  queryFn: async () => {
    try {
      const url = `https://funnymans.github.io/OnlyDigitalTask/historical-dates.json`;

      const res = await fetch(url);
      const data = await res.json();

      const categories = Object.keys(data).map((item: string) => item);
      return categories;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
});
