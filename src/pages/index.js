import React from "react"

import IndexLayout from "../components/layouts/indexLayout"
import SEO from "../components/seo/seo"

import styles from "./index.module.scss"

const IndexPage = () => (
  <IndexLayout>
    <SEO title="Home" />
    <div className={styles.person}>
      <h1 className={styles.name}>Orest Nowosad</h1>
      <h2 className={styles.title}>Software Engineer</h2>
    </div>
  </IndexLayout>
)

export default IndexPage
