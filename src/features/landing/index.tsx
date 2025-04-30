import IntroContentWrapper from './intro/IntroContentWrapper';
import { GridLayoutSC } from '@/shared/ui/containers/GridLayout';

const LandingPageContent = () => {
  return (
    <GridLayoutSC
      $layoutSiftAt='1200px'
      $columns='minmax(auto, 1fr) minmax(600px, 6fr)  minmax(auto, 1fr)'
    >
      <IntroContentWrapper />
    </GridLayoutSC>
  );
};

export default LandingPageContent;
