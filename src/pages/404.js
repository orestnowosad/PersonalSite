import React from "react"

import E404Layout from "../components/layouts/errors/e404Layout"
import SEO from "../components/seo/seo"

const NotFoundPage = () => (
  <E404Layout>
    <SEO title="404: Page Not Found" />
    <h1>404: NOT FOUND</h1>
    <p>This page does not exist.</p>
  </E404Layout>
)

export default NotFoundPage
