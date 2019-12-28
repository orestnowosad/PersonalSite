import React from "react"

import PageLayout from "../components/layouts/pageLayout"
import Image from "../components/image"
import SEO from "../components/seo/seo"

import pageStyles from "./page.module.scss";

const ExperiencePage = () => (
  <PageLayout>
    <SEO title="About" />
    <h1 className={pageStyles.pageHeader}>Experience</h1>
    <p>Cool places I've worked at.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </PageLayout>
)

export default ExperiencePage