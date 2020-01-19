import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <nav className={styles.container}>
      <h2 className={styles.siteLink}>
        <Link to="/" className={styles.siteTitle}>
          {siteTitle}
        </Link>
      </h2>
      <p className={styles.pageLinks}>
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
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
