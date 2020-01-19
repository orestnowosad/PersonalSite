import React from "react"

import PageLayout from "../components/layouts/pageLayout"
import Image from "../components/image"
import SEO from "../components/seo/seo"

import styles from "./page.module.scss";

const ProjectsPage = () => (
  <PageLayout>
    <SEO title="Projects" />
    <h1 className={styles.header}>Cool shit that I've built.</h1>
    <p>Real cool shit.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </PageLayout>
)

export default ProjectsPage