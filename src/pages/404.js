import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import {
  Content,
  DefaultLayout,
  Sidebar
} from '../components'


function NotFoundRoute(props) {
  const { location } = props
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
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
      <Content error={ 404 } />
      <Sidebar />
    </DefaultLayout>
  )
}

NotFoundRoute.propTypes = {
  location: PropTypes.node.isRequired,
}

export default NotFoundRoute