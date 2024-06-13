import Link from 'next/link';
import Image from 'next/image';
import logoimg from '@/assets/logo.png';
import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

export default function MainHeader() {
  // console.log('콘솔을 띄워보자');
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoimg} alt="A plate with a food on it" priority />
          {/* //- 🔸  Image : NextJs에서 반응형으로 각 기기에 최적화되게 이미지를 띄워주는 기능, priority: 먼저 띄워져야 하는 이미지의 경우 넣으면 경고 없에줌 */}
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
