import styles from '../../styles/Navbar.module.scss'

// className={styles.navContainer} style={navbarOff ? {width: '60%', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)'} : {}}

const Navbar = ({ navbarOff }: {navbarOff:Boolean}) => {
  return (
      <nav className={styles.nav}>
        <div className={`${styles.navContainer} ${navbarOff ? styles.off : ''}`}>
          {/* Logo */}
          <h2 className={styles.logo}>Portfolio</h2>

          {/* Links */}
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact" className={styles.navbtn}>Contact</a></li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
