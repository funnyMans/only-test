'use client';
import Link from 'next/link';
import Image from 'next/image';

import { ToolCardSC, ToolNameSC } from './styled/ToolsGallery';
import { ITool } from '@/shared/types/team';

const ToolSlideItemContent = ({
  slide,
  index,
}: {
  slide?: ITool;
  index?: number;
}) => {
  return (
    <ToolCardSC key={index}>
      <Image
        src={slide?.imgSrc || ''}
        alt={slide?.name || `logo-image-${index}`}
        width={100}
        height={100}
        priority
      />
      <ToolNameSC>
        <Link href={slide?.website || '/'} target='_blank'>
          {slide?.name}
        </Link>
      </ToolNameSC>
    </ToolCardSC>
  );
};

export default ToolSlideItemContent;
