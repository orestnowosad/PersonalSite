import React from "react"

import PageLayout from "../components/layouts/pageLayout"
import SEO from "../components/seo/seo"

import styles from "./404.module.scss"

const NotFoundPage = () => (
  <PageLayout>
    <SEO title="404: Page Not Found" />
    <h1>404: NOT FOUND</h1>
    <div className={styles.error}>
      <p>This page does not exist.</p>
    </div>
  </PageLayout>
)

export default NotFoundPage
