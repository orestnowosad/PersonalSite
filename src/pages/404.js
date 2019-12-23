import React from "react"

import IndexLayout from "../layouts/index/indexLayout"
import SEO from "../components/seo/seo"

const NotFoundPage = () => (
  <IndexLayout>
    <SEO title="404: Page Not Found" />
    <h1>404: NOT FOUND</h1>
    <p>This page does not exist.</p>
  </IndexLayout>
)

export default NotFoundPage
