import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

import styles from "./sideNav.module.scss"

import close from "../../assets/images/icons/close.svg"

const SideNav = ({ sideNavOpen, setSideNavOpen }) => {
  let navClass = styles['sideNav']

  if (sideNavOpen) {
    navClass = styles['sideNavOpen']
  }

  return (
    <nav className={navClass}>
      <div className={styles.container}>
        <div className={styles.close}>
          <button className={styles.closeButton} onClick={() => setSideNavOpen(false)}>
            <img src={close} alt="Close button" />
          </button>
        </div>
        <div className={styles.navLinks}>
          <p>
            <Link to="/">
              Home
            </Link>
          </p>
          <p>
            <Link to="/about">
              About
            </Link>
          </p>
          <p>
            <Link to="/projects">
              Projects
            </Link>
          </p>
          <p>
            <Link to="/blog">
              Blog
            </Link>
          </p>
        </div>
      </div>
    </nav>
  )
}

SideNav.propTypes = {
  sideNavOpen: PropTypes.bool,
}

export default SideNav