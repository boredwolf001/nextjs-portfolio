import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { Flex, Button, SectionWrapper } from '../shared'
import styles from '../../styles/Hero.module.scss'

const Hero = () => {
  const { inView, entry, ref } = useInView()
  const animationControl = useAnimation()

  if (inView) {
    animationControl.start({
      opacity: 1,
      tranistion: {
        delay: 0.7,
      },
    })
  }

  return (
    <div style={{ width: '1200px' }} className='container'>
      <SectionWrapper topMargin={50}>
        <Flex>
          <motion.div
            ref={ref}
            id='col1'
            initial={{
              opacity: 0,
            }}
            animate={animationControl}
            className={styles.flexCol1}
          >
            <h1 className={styles.heroHeading}>
              Modern and <span>Reliable</span> Web Apps
            </h1>
            <p className={styles.para}>
              I&apos;m a full stack developer from Sri Lanka. I love coding and
              experimenting with new technologies and solutions.
            </p>

            <Button variant='primary'>
              <a href='#work' style={{ color: 'inherit' }}>
                My Work
              </a>{' '}
            </Button>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{
              opacity: 0,
            }}
            animate={animationControl}
            id='col2'
            className={styles.flexCol2}
          >
            <img src='/assets/hero.png' alt='Coding' />
          </motion.div>
        </Flex>
      </SectionWrapper>
    </div>
  )
}

export default Hero
