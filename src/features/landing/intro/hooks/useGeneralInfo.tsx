import { useSuspenseQuery } from '@tanstack/react-query';
import { generalInfoOptions } from '../api/generalInfoOptions';

const useGeneralInfo = () => {
  const { data } = useSuspenseQuery(generalInfoOptions);
  const { company, tools } = data;
  return {
    company,
    tools,
  };
};

export default useGeneralInfo;
