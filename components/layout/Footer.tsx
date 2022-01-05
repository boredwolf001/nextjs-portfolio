import type { NextPage } from 'next';
import { Flex } from '../shared';
import styles from '../../styles/Footer.module.scss'
import { BiCopyright, BiEnvelope } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';

const Footer: NextPage = () => {
  return (
    <div className={styles.footerWrapper}>
      <Flex>
        <div className={styles.col1}>
          <h2 className={styles.heading}>Any Collaborators? Let's have a chat.</h2>
          <p>
            I am always up for cool ideas and projects. If you want have a chat about any of the projects I worked on, or have an interesting project, feel free to get in touch!
          </p>

          <p className={styles.copyright}><strong>Copright <BiCopyright /> {new Date().getFullYear()} - Maneth</strong></p>

          <a href="https://github.com/manethyethmin" target="_blank">
            <AiFillGithub fontSize={25} style={{marginRight: '10px'}} />
          </a>
          <a href="mailto:hello@myethmin.com" target="_blank">
            <BiEnvelope fontSize={25} />
          </a>
        </div>
        <div className={styles.col2}>
        </div>
      </Flex>
    </div>
  );
};

export default Footer;
