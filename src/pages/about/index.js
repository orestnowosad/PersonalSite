import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import {
  Content,
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
      <div className="page">
        <div className="page__container">
          <article>
            <h1>Who is this guy?</h1>
            <p>Just your run-of-the-mill software engineer.</p>
          </article>
        </div>
      </div>
    </DefaultLayout>
  )
}

AboutRoute.propTypes = {
  location: PropTypes.node.isRequired,
}

export default AboutRoute