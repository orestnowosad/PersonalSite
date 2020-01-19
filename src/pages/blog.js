import React from "react"

import PageLayout from "../components/layouts/pageLayout"
import SEO from "../components/seo/seo"

import styles from "./page.module.scss";

const BlogPage = () => (
  <PageLayout>
    <SEO title="Blog" />
    <h1 className={styles.header}>Coming Soon.</h1>
  </PageLayout>
)

export default BlogPage