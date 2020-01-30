import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

import styles from "./header.module.scss"

import brandBlack from "../../assets/images/brand/brand-black.svg"
import burger from "../../assets/images/icons/burger.svg"

const Header = ({ setSideNavOpen }) => (
  <header className={styles.header}>
    <nav className={styles.container}>
      <div className={styles.burger}>
        <button className={styles.burgerButton} onClick={() => setSideNavOpen(true)}>
          <img src={burger} alt="Burger button" />
        </button>
      </div>
      <div className={styles.logo}>
        <Link to="/">
          <img src={brandBlack} alt="Brand icon" />
        </Link>
      </div>
      <div className={styles.spacer}></div>
      <div className={styles.nav}>
        <p>
          <Link to="/about">
            About
          </Link>
          <Link to="/projects">
            Projects
          </Link>
          <Link to="/blog">
            Blog
          </Link>
        </p>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  setSideNavOpen: PropTypes.func,
}

export default Header
