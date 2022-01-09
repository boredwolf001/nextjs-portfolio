import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import styles from '../../styles/Skills.module.scss';
import { SectionHeading, SectionWrapper } from '../shared';

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);

  const images = [
    '/skills/python.png',
    '/skills/html.png',
    '/skills/css.png',
    '/skills/sass.png',
    '/skills/bootstrap.png',
    '/skills/javascript.png',
    '/skills/nodejs.png',
    '/skills/mongodb.png',
    '/skills/react.png',
    '/skills/svelte.png',
    '/skills/react-native.png',
    '/skills/wordpress.png',
    '/skills/mysql.png',
    '/skills/django.png',
    '/skills/git.png',
  ];

  return (
    <div className='container' id='skills'>
      <SectionWrapper topMargin={75}>
        <SectionHeading heading='Skills' />

        <div className={styles.grid}>
          {images.map((img, idx) => (
            <div
              key={idx}
              style={
                darkMode
                  ? {
                      backgroundColor: 'rgb(35, 40, 42)',
                      boxShadow: '2px 2px 4px rgba(36, 36, 36, 0.1)',
                    }
                  : {}
              }
              className={styles.gridItem}
            >
              <img src={img} alt='Skill' />
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Skills;
