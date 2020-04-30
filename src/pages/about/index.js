import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import {
  DefaultLayout,
  Sidebar
} from '../../components'


function AboutRoute(props) {
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
        <title>About | { site.siteMetadata.title }</title>
        <meta name="description" content={ site.siteMetadata.description } />
      </Helmet>
      <Sidebar />
    </DefaultLayout>
  )
}

AboutRoute.propTypes = {
  location: PropTypes.node.isRequired,
}

export default AboutRoute