import styles from '../../styles/Contact.module.scss';
import { Button, Flex, SectionHeading, SectionWrapper } from '../shared';
import { HiOutlineMail } from 'react-icons/hi';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMessage,
} from 'react-icons/ai';
import { useContext, useEffect } from 'react';
import ThemeContext from '../../context/ThemeContext';
import kwesforms from 'kwesforms';

function Contact() {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <div
      className={`container ${!darkMode && styles.light}`}
      id='contact'
      style={{ marginBottom: '100px' }}
    >
      <SectionWrapper>
        <SectionHeading heading='Contact' />

        <Flex>
          <div className={styles.flexCol1}>
            <h2>
              Any <span>Collaborators</span>? Let&apos;s have a chat.
            </h2>

            <p>
              I am always up for cool ideas and projects. If you want to have a
              chat about any of the projects I worked on feel free to get in
              touch!
            </p>

            <div className={styles.detailBox}>
              <AiOutlineMessage fontSize={30} />
              <span>+94 78 112 7220</span>
            </div>

            <div className={styles.detailBox}>
              <HiOutlineMail fontSize={30} />
              <span>hello@maneth.me</span>
            </div>
          </div>

          <div className={styles.flexCol2}>
            <form
              className={`${styles.form} kwes-form`}
              action='https://kwesforms.com/api/foreign/forms/Bm1GcgHMY2VZz9fuLAF8'
            >
              <label htmlFor='name'>Name</label>
              <input
                rules='required'
                name='name'
                type='text'
                className={styles.formControl}
              />
              <label htmlFor='email'>Email</label>
              <input
                rules='required'
                name='email'
                type='text'
                className={styles.formControl}
              />
              <label htmlFor='message'>Message</label>
              <textarea
                rules='required'
                name='message'
                type='text'
                className={styles.formControl}
                style={{ marginBottom: '20px' }}
              />

              <Button
                type='submit'
                block={true}
                className={styles.button}
                variant='primary'
              >
                Send
              </Button>
            </form>
          </div>
        </Flex>
      </SectionWrapper>
    </div>
  );
}

export default Contact;
