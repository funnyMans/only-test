import Link from 'next/link';
import { HomeBtnSC } from './styled/HomeBtnSC';

const HomePageBtn = () => {
  return (
    <Link href={'/'}>
      <HomeBtnSC>Home</HomeBtnSC>
    </Link>
  );
};

export default HomePageBtn;
