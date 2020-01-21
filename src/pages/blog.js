import React from "react"

import PageLayout from "../components/layouts/pageLayout"
import SEO from "../components/seo/seo"

import styles from "./blog.module.scss";

const BlogPage = () => (
  <PageLayout>
    <SEO title="Blog" />
    <h1>Coming Soon</h1>
    <div className={styles.intro}>
      <p>Got a few pieces of literature in the works.</p>
      <p>Stay tuned.</p>
    </div>
  </PageLayout>
)

export default BlogPage