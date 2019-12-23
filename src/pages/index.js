import React from "react"

import IndexLayout from "../layouts/index/indexLayout"
import Image from "../components/image"
import SEO from "../components/seo/seo"

const IndexPage = () => (
  <IndexLayout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </IndexLayout>
)

export default IndexPage
