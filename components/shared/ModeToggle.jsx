import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import styles from '../../styles/ModeToggle.module.scss';
import { BsMoon, BsSun } from 'react-icons/bs';

const ModeToggle = ({ className }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setDarkMode((prevDark) => !prevDark);
      }}
      className={`${styles.modeContainer} ${className}`}
    >
      <BsMoon
        style={{ transition: '.3s ease' }}
        className={darkMode && styles.hide}
      />
      <BsSun
        style={{ transition: '.3s ease' }}
        className={!darkMode && styles.hide}
      />
    </div>
  );
};

export default ModeToggle;
