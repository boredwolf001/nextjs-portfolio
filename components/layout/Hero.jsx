import { Flex, Button, SectionWrapper } from '../shared';
import styles from '../../styles/Hero.module.scss';
import { BiChevronRight } from 'react-icons/bi';

const Hero = () => {
  return (
    <div style={{ width: '1200px' }} className='container'>
      <SectionWrapper topMargin={50}>
        <Flex>
          <div id='col1' className={styles.flexCol1}>
            <h1 className={styles.heroHeading}>
              Modern and <span>Reliable</span> Web Apps
            </h1>
            <p className={styles.para}>
              I&apos;m a full stack developer from Sri Lanka. I love coding and
              experimenting with new technologies and solutions.
            </p>

            <Button variant='primary'>
              <a href='#work' style={{ color: '#fff' }}>
                Work
              </a>{' '}
              <BiChevronRight fontSize={30} />
            </Button>
          </div>
          <div id='col2' className={styles.flexCol2}>
            <img src='/assets/hero.png' alt='Coding' />
          </div>
        </Flex>
      </SectionWrapper>
    </div>
  );
};

export default Hero;
