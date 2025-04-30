import { ProgressCounterSC } from './styled/ProgressCounter';

interface IProps {
  progress: number;
  total: number;
}
const ProgressCounter = ({ progress, total }: IProps) => {
  const currProgress = progress + 1 < 10 ? `0${progress + 1}` : progress + 1;
  const currTotal = total < 10 ? `0${total}` : total;
  return (
    <ProgressCounterSC>
      {currProgress} / {currTotal}
    </ProgressCounterSC>
  );
};

export default ProgressCounter;
