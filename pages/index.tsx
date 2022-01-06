import type { NextPage } from 'next';
import { Hero, About, Contact, Skills, Footer } from '../components/layout';
const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
