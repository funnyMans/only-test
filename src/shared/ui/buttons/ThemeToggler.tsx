import { useDarkMode } from 'usehooks-ts';
import { ThemeTogglerSC } from './styled/ThemeTogglerSC';

const ThemeToggler = () => {
  const { isDarkMode, toggle } = useDarkMode({ initializeWithValue: false });
  return (
    <ThemeTogglerSC onClick={toggle}>
      {isDarkMode ? 'Light' : 'Dark'}
    </ThemeTogglerSC>
  );
};

export default ThemeToggler;
