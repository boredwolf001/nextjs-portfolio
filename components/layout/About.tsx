import type { NextPage } from 'next';
import { Flex, SectionHeading, SectionWrapper } from '../shared';
import styles from '../../styles/About.module.scss';

const About: NextPage = () => {
  return (
    <div id='about' className='container'>
      <SectionWrapper topMargin={70}>
        <div style={{ marginBottom: '50px' }}>
          <SectionHeading heading={'About Me'} />
        </div>

        <Flex>
          <div className={styles.flexCol1}>
            <img src='/assets/profile.jpg' alt='Profile pic' />
          </div>
          <div className={styles.flexCol2}>
            <h2>Hi, I am maneth</h2>
            <p>
              I am maneth, a full stack dev from Sri Lanka. I love experimenting
              with the newest technologies and always look to learn new things.
              With over 3 years of experience in web development, I am highly
              skilled in JavaScript, React and Node.
              <br /> <br /> I am an expert in developing robust and scalable web
              applications using all the modern technologies. I want to give a
              great experience to my users with design that work, code that is
              beautiful and user interaction that feels natural.
            </p>
          </div>
        </Flex>
      </SectionWrapper>
    </div>
  );
};

export default About;
