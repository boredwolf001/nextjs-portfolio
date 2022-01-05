import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import {Navbar, Hero, About, Contact, Skills, Footer} from '../components/layout'

const Home: NextPage = () => {
  const [navbarOff, setNavbarOff] = useState(false)

  useEffect(() => {
    const doc = window.document.documentElement;
    let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  
    window.addEventListener('scroll', () => {
      top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

      if (top > 75) {
        setNavbarOff(true)
      } else {
        setNavbarOff(false)
      }
    })
  }, [])

  return (
   <>
    <Navbar navbarOff={navbarOff} />
    <Hero />
    {/* <About /> */}
    <Skills />
    <Contact />
    <Footer />
   </>
  )
}

export default Home
