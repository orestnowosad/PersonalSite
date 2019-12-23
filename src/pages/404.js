import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not Found" />
    <h1>404: NOT FOUND</h1>
    <p>This page does not exist.</p>
  </Layout>
)

export default NotFoundPage
