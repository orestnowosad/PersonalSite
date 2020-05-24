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

        <meta property="og:title" content={ 'About | ' + site.siteMetadata.title } />
        <meta property="og:description" content={ site.siteMetadata.description } />

        <meta name="twitter:title" content={ 'About | ' + site.siteMetadata.title } />
        <meta name="twitter:description" content={ site.siteMetadata.description } />
      </Helmet>

      <article className="post">
        <h1 className="post__title">About Me</h1>
        <div className="post__content">
          <p>
            Just a straight fucking beauty.
          </p>
        </div>
      </article>

    </DefaultLayout>
  )
}

AboutRoute.propTypes = {
  location: PropTypes.node.isRequired,
}

export default AboutRoute