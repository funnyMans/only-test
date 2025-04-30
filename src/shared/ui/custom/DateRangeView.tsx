import { DateRangeViewSC } from './styled/DateRange';
import AnimatedCountUpDown from '../sliders/counter/AnimatedCountUpDown';

interface IProps {
  startDate: string | number;
  endDate: string | number;
}
const DateRangeView = ({ startDate, endDate }: IProps) => {
  return (
    <DateRangeViewSC $width='fit-content' $height='5%'>
      <AnimatedCountUpDown
        targetYear={Number(startDate)}
        duration={1}
        countStyleProps={{ $textColor: 'blue' }}
      />
      <AnimatedCountUpDown
        targetYear={Number(endDate)}
        duration={1}
        countStyleProps={{ $textColor: 'purple' }}
      />
    </DateRangeViewSC>
  );
};

export default DateRangeView;
