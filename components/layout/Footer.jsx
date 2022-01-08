import { Flex } from '../shared';
import styles from '../../styles/Footer.module.scss';
import { BiCopyright, BiEnvelope } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      style={
        darkMode
          ? {
              backgroundColor: 'rgb(35, 40, 42)',
            }
          : {}
      }
      className={styles.footerWrapper}
    >
      <Flex>
        <div className={styles.col1}>
          <p className={styles.repoLink}>
            If there is something to be fixed, feel free to make a pull request
            to{' '}
            <a href='https://github.com/manethyethmin/portfolio'>
              <AiFillGithub /> Github repo
            </a>
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
