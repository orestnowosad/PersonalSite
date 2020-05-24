import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import { DefaultLayout } from '../components'


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

      <article className="post">
        <h1 className="post__title">Page Not Found</h1>
        <div className="post__content">
          <p>
            Looks like you've followed a broken link or entered a URL that doesn't exist.
          </p>
        </div>
      </article>

    </DefaultLayout>
  )
}

NotFoundRoute.propTypes = {
  location: PropTypes.node.isRequired,
}

export default NotFoundRoute