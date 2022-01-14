import styles from '../../styles/Navbar.module.scss'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { useContext, useState } from 'react'
import ThemeContext from '../../context/ThemeContext'

// Side menu
const SideMenu = ({ setShowSideMenu, show }) => {
  return (
    <div className={`${styles.sideMenu} ${show && styles.active}`}>
      <ul className={styles.navlinksHam}>
        <AiOutlineClose
          onClick={() => {
            setShowSideMenu(false)
          }}
          className={styles.hamMenuClose}
          fontWeight={1000}
          color='#fff'
        />

        <li>
          <a className={styles.navHover} href='#about'>
            About Me
          </a>
        </li>
        <li>
          <a className={styles.navHover} href='#work'>
            Work
          </a>
        </li>
        <li>
          <a className={styles.navHover} href='#skills'>
            Skills
          </a>
        </li>
        <li>
          <a className={styles.navHover} href='#contact'>
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

// Main navbar
const Navbar = ({ navbarOff }) => {
  const [showSideMenu, setShowSideMenu] = useState(false)
  const { darkMode } = useContext(ThemeContext)

  return (
    <>
      <nav className={styles.nav}>
        <div
          // className={`${styles.navContainer} ${navbarOff ? styles.off : ''} ${
          //   darkMode ? styles.dark : ''
          // }`}
          className={`${styles.navContainer} ${darkMode ? styles.dark : ''}`}
        >
          {/* Logo */}
          <h2 className={styles.logo}>
            <span>Port</span>folio
          </h2>

          {/* Links */}
          <ul className={styles.navlinks}>
            <li>
              <a className={styles.navHover} href='#about'>
                About Me
              </a>
            </li>
            <li>
              <a className={styles.navHover} href='#work'>
                Work
              </a>
            </li>
            <li>
              <a className={styles.navHover} href='#skills'>
                Skills
              </a>
            </li>
            <li>
              <a className={styles.navHover} href='#contact'>
                Contact
              </a>
            </li>
          </ul>

          {/* Ham */}
          <HiOutlineMenuAlt1
            onClick={() => setShowSideMenu(!showSideMenu)}
            className={styles.ham}
            fontSize={30}
            display='none'
          />
        </div>
      </nav>

      <SideMenu setShowSideMenu={setShowSideMenu} show={showSideMenu} />
    </>
  )
}

export default Navbar
