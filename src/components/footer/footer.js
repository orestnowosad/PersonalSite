import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./footer.module.scss"

import twitter from "../../assets/images/icons/twitter.svg"
import linkedin from "../../assets/images/icons/linkedin-badge.svg"
import github from "../../assets/images/icons/github-badge.svg"

import brandBlack from "../../assets/images/brand/brand-black.svg"

const Footer = ({ siteTitle, siteDescription }) => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div>
        <div className={styles.logo}>
          <img src={brandBlack} alt="Brand logo" />
        </div>
        <p className={styles.name}>{siteTitle}</p>
        <p className={styles.title}>{siteDescription}</p>
      </div>
      <div>
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
      <div>
        <p className={styles.heading}>Contact Me</p>
        <p>
          <span className={styles.email} data-user="tsero.dasowon" data-website="moc.liamg"></span>
        </p>
        <div className={styles.social}>
          <a className={styles.socialLink} target="_blank" rel="noopener noreferrer" href="https://twitter.com/orestnowosad">
            <img src={twitter} alt="Twitter" />
          </a>
          <a className={styles.socialLink} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/orestnowosad/">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a className={styles.socialLink} target="_blank" rel="noopener noreferrer" href="https://github.com/orestnowosad">
            <img src={github} alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Footer
