import React from "react"

import PageLayout from "../components/layouts/pageLayout"
import SEO from "../components/seo/seo"

import styles from "./projects.module.scss";

const ProjectsPage = () => (
  <PageLayout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <div className={styles.intro}>
      <p>I'm currently organizing my projects to push to GitHub.</p>
      <p>Stay tuned.</p>
    </div>
  </PageLayout>
)

export default ProjectsPage