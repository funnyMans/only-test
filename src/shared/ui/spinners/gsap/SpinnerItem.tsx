import { useCallback } from 'react';
import {
  GsapSpinnerItemSC,
  SpinnerItemLabelSC,
  SpinnerItemContentSC,
} from './styled/GsapSpinnerItem';

interface IProps {
  size: number;
  item: string;
  index: number;
  isActive: boolean;
  activeRotation: number;
  rotation: { x: number; y: number };
  withLabel?: boolean;
  onClick: (index: number) => void;
}
const SpinnerItem = ({
  item,
  size,
  index,
  isActive,
  rotation,
  withLabel,
  activeRotation,
  onClick,
}: IProps) => {
  const handleItemClick = useCallback(() => onClick(index), [index, onClick]);

  return (
    <GsapSpinnerItemSC
      className={`dot dot-${index}`}
      title={item}
      $size={size}
      $rotation={rotation}
      $isIndexActive={isActive}
      $activeRotation={activeRotation}
      onClick={handleItemClick}
    >
      <SpinnerItemContentSC className='dot-content' $isActive={isActive}>
        {withLabel ? index + 1 : item}
      </SpinnerItemContentSC>
      {isActive && withLabel && <SpinnerItemLabelSC>{item}</SpinnerItemLabelSC>}
    </GsapSpinnerItemSC>
  );
};
export default SpinnerItem;
