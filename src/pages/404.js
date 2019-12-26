import React from "react"

import ErrorLayout from "../components/layouts/errorLayout"
import SEO from "../components/seo/seo"

const NotFoundPage = () => (
  <ErrorLayout>
    <SEO title="404: Page Not Found" />
    <h1>404: NOT FOUND</h1>
    <p>This page does not exist.</p>
  </ErrorLayout>
)

export default NotFoundPage
