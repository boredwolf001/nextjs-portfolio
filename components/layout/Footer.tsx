import type { NextPage } from 'next';
import { Flex } from '../shared';
import styles from '../../styles/Footer.module.scss';
import { BiCopyright, BiEnvelope } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';

const Footer = ({ darkMode }: { darkMode: Boolean }) => {
  return (
    <div
      id='contact'
      style={
        darkMode
          ? {
              backgroundColor: 'rgb(38, 38, 38)',
            }
          : {}
      }
      className={styles.footerWrapper}
    >
      <Flex>
        <div className={styles.col1}>
          <h2 className={styles.heading}>
            Any Collaborators? Let&apos;s have a chat.
          </h2>
          <p>
            I am always up for cool ideas and projects. If you want have a chat
            about any of the projects I worked on, or have an interesting
            project, feel free to get in touch!
          </p>

          <p className={styles.copyright}>
            <strong>
              Copright <BiCopyright /> {new Date().getFullYear()} - Maneth
            </strong>
          </p>

          <a
            href='https://github.com/manethyethmin'
            rel='noreferrer'
            target='_blank'
          >
            <AiFillGithub
              color={darkMode ? '#fff' : '#000'}
              fontSize={25}
              style={{ marginRight: '10px' }}
            />
          </a>
          <a href='mailto:hello@myethmin.com' rel='noreferrer' target='_blank'>
            <BiEnvelope color={darkMode ? '#fff' : '#000'} fontSize={25} />
          </a>
        </div>
        <div className={styles.col2}></div>
      </Flex>
    </div>
  );
};

export default Footer;
