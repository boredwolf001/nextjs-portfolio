import styles from '../../styles/Navbar.module.scss';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import Link from 'next/link';

const SideMenu = ({
  setShowSideMenu,
  show,
}: {
  setShowSideMenu: Function;
  show: Boolean;
}) => {
  return (
    <div className={`${styles.sideMenu} ${show && styles.active}`}>
      <ul className={styles.navlinksHam}>
        <AiOutlineClose
          onClick={() => {
            setShowSideMenu(false);
          }}
          className={styles.hamMenuClose}
          fontWeight={1000}
          color='#fff'
        />

        <li>
          <a href='#about'>About Me</a>
        </li>
        <li>
          <a href='#work'>Work</a>
        </li>
        <li>
          <a href='#skills'>Skills</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  );
};

const Navbar = ({ navbarOff }: { navbarOff: Boolean }) => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div
          className={`${styles.navContainer} ${navbarOff ? styles.off : ''}`}
        >
          {/* Logo */}
          <h2 className={styles.logo}>Portfolio</h2>

          {/* Links */}
          <ul className={styles.navlinks}>
            <li>
              <a href='#about'>About Me</a>
            </li>
            <li>
              <a href='#work'>Work</a>
            </li>
            <li>
              <a href='#skills'>Skills</a>
            </li>
            <li>
              <a className={styles.navbtn} href='#contact'>
                Contact
              </a>
            </li>
          </ul>

          {/* Ham */}
          <HiOutlineMenuAlt1
            onClick={() => setShowSideMenu(!showSideMenu)}
            className={styles.ham}
            fontSize={30}
            display='none'
          />
        </div>
      </nav>

      <SideMenu setShowSideMenu={setShowSideMenu} show={showSideMenu} />
    </>
  );
};

export default Navbar;
