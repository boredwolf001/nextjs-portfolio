import { Button, Flex, SectionHeading, SectionWrapper } from '../shared'
import styles from '../../styles/Work.module.scss'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Work = () => {
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
    <div className='container' id='work'>
      <motion.div
        initial={{
          y: -200,
          opacity: 0,
        }}
        animate={animationControl}
        ref={ref}
        className={styles.wrapper}
      >
        <SectionWrapper topMargin={75}>
          <Flex>
            <div className={styles.col1}>
              <SectionHeading heading='My Work' />
              <p style={{ marginTop: '20px', marginBottom: '30px' }}>
                Looking other peoples&apos; projects can be a great way to learn
                and teach, share and gain experience. If you like feel free to
                check my Projects on Github.
              </p>
              <a
                rel='noreferrer'
                target='_blank'
                href='https://github.com/manethyethmin?tab=repositories'
              >
                <Button variant='primary'>
                  <a
                    href='https://github.com/manethyethmin?tab=repositories'
                    style={{ color: '#fff' }}
                  >
                    Explore
                  </a>
                </Button>
              </a>
            </div>
            <div className={styles.col2}>
              <img src='/assets/cat.gif' alt='Lazy cat' />
            </div>
          </Flex>
        </SectionWrapper>
      </motion.div>
    </div>
  )
}

export default Work
