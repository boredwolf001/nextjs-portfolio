import { useEffect, useState } from 'react';
import {
  Hero,
  About,
  Contact,
  Skills,
  Footer,
  Navbar,
} from '../components/layout';
import DarkModeToggle from 'react-dark-mode-toggle';
import styles from '../styles/Index.module.scss';
import useLocalStorageState from '../hooks/useLocalStorageState';

const Home = () => {
  const [darkMode, setDarkMode] = useLocalStorageState('dark', true);
  const [navbarOff, setNavbarOff] = useState(false);

  useEffect(() => {
    const doc = window.document.documentElement;
    let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    window.addEventListener('scroll', () => {
      top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

      if (top > 75) {
        setNavbarOff(true);
      } else {
        setNavbarOff(false);
      }
    });

    // Darkmode stuff
    darkMode
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  }, [darkMode]);

  return (
    <>
      <DarkModeToggle
        className={styles.darkMode}
        onChange={setDarkMode}
        checked={darkMode}
        size={80}
      />
      <Navbar navbarOff={navbarOff} darkMode={darkMode} />

      <Hero />
      <About />
      <Skills darkMode={darkMode} />
      <Contact />
      <Footer darkMode={darkMode} />
    </>
  );
};

export default Home;
