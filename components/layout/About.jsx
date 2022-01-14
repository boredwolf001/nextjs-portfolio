import { Flex, SectionHeading, SectionWrapper } from '../shared'
import styles from '../../styles/About.module.scss'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Atropos from 'atropos/react'

const About = () => {
  const { inView, entry, ref } = useInView()
  const animationControl = useAnimation()

  if (inView) {
    animationControl.start({
      y: 0,
      opacity: 1,
      tranistion: {
        type: 'spring',
        delay: 0.3,
      },
    })
  }

  return (
    <div id='about' className='container'>
      <SectionWrapper topMargin={70}>
        <div style={{ marginBottom: '50px' }}>
          <SectionHeading heading={'About Me'} />
        </div>

        <Flex>
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={animationControl}
            ref={ref}
            className={styles.flexCol1}
          >
            <Atropos className='my-atropos'>
              <img src='/assets/profile.jpg' alt='Profile pic' />
            </Atropos>
          </motion.div>
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={animationControl}
            ref={ref}
            className={styles.flexCol2}
          >
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
          </motion.div>
        </Flex>
      </SectionWrapper>
    </div>
  )
}

export default About
