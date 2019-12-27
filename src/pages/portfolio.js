import React from "react"

import PageLayout from "../components/layouts/pageLayout"
import Image from "../components/image"
import SEO from "../components/seo/seo"

const PortfolioPage = () => (
  <PageLayout>
    <SEO title="About" />
    <h1>Portfolio</h1>
    <p>Cool shit that I've built in the past.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </PageLayout>
)

export default PortfolioPage