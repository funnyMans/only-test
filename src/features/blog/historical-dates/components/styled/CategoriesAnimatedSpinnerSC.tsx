import styled from 'styled-components';
import { SelfCenteredBoxSC } from '@/shared/ui/containers/SelfCenteredBox';

export const CategoriesAnimatedSpinnerSC = styled(SelfCenteredBoxSC)`
  @media (max-width: 768px) or (max-height: 768px) {
    & .circle {
      display: none;
    }
  }
`;
