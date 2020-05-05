import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import {
  DefaultLayout,
  NotFoundError,
  Sidebar
} from '../components'


function NotFoundRoute(props) {
  const { location } = props
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <DefaultLayout
      location={ location }
    >
      <Helmet>
        <title>404: Page Not Found</title>
        <meta name="description" content={ site.siteMetadata.description } />
      </Helmet>
      <Sidebar />
      <NotFoundError />
    </DefaultLayout>
  )
}

NotFoundRoute.propTypes = {
  location: PropTypes.node.isRequired,
}

export default NotFoundRoute