import React from "react"

import PageLayout from "../components/layouts/pageLayout"
import Image from "../components/image"
import SEO from "../components/seo/seo"

import styles from "./page.module.scss";

const AboutPage = () => (
  <PageLayout>
    <SEO title="About" />
    <h1 className={styles.header}>Who is this guy?</h1>
    <p>Just someone that likes to build cool shit.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </PageLayout>
)

export default AboutPage