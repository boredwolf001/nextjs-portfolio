import { useEffect, useState } from 'react';
import {
  Hero,
  About,
  Work,
  Skills,
  Footer,
  Navbar,
  Contact,
} from '../components/layout';
import { ModeToggle } from '../components/shared';

const Home = () => {
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
  }, []);

  return (
    <>
      <Navbar navbarOff={navbarOff} />
      <ModeToggle className='mode-toggle' />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
