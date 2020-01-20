import { Link } from "gatsby"
import React from "react"

import styles from "./header.module.scss"

import logo from "../../assets/images/brand/logo.svg"

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Brand icon" />
        </Link>
      </div>
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

export default Header
