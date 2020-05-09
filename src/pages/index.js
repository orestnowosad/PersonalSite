import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import {
  Content,
  DefaultLayout,
  Sidebar
} from '../components'


function IndexRoute(props) {
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
        <title>{ site.siteMetadata.title }</title>
        <meta name="description" content={ site.siteMetadata.description } />
      </Helmet>
      <Content />
      <Sidebar />
    </DefaultLayout>
  )
}

IndexRoute.propTypes = {
  location: PropTypes.node.isRequired,
}

export default IndexRoute