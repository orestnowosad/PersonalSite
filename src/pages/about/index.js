import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import { DefaultLayout } from '../../components'


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

      <article>
        <h1>About Me</h1>
        <p>
          Just a straight fucking beauty.
        </p>
      </article>

    </DefaultLayout>
  )
}

AboutRoute.propTypes = {
  location: PropTypes.node.isRequired,
}

export default AboutRoute