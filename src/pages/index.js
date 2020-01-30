import { Link } from "gatsby"
import React from "react"

import IndexLayout from "../components/layouts/indexLayout"
import SEO from "../components/seo/seo"

import styles from "./index.module.scss"

import twitter from "../assets/images/icons/twitter.svg"
import linkedin from "../assets/images/icons/linkedin-badge.svg"
import github from "../assets/images/icons/github-badge.svg"

import brandBlack from "../assets/images/brand/brand-black.svg"

const IndexPage = () => (
  <IndexLayout>
    <SEO title="Home" />
    <div className={styles.logo}>
      <img src={brandBlack} alt="Brand logo" />
    </div>
    <h1 className={styles.intro}>
      <span>I'm Orest &mdash;</span>
      <span>a software developer</span>
      <span>specialized in <strong className={styles.specialization}>full-stack</strong></span>
      <span className={styles.specialization}>web development.</span>
    </h1>
    <div className={styles.links}>
      <nav className={styles.nav}>
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
      </nav>
      <div className={styles.social}>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/orestnowosad">
            <img src={twitter} alt="Twitter" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/orestnowosad/">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/orestnowosad">
            <img src={github} alt="GitHub" />
          </a>
        </p>
      </div>
    </div>
  </IndexLayout>
)

export default IndexPage
