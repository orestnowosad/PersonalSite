/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import brand from '../../../assets/images/brand-icon.png'

import './style.scss'

function DefaultLayout(props) {
  const { children, location } = props
  const url = location.href ? location.href : ''
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
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        
        <meta property="og:title" content={ site.siteMetadata.title } />
        <meta property="og:description" content={ site.siteMetadata.description } />
        <meta property="og:image" content={ brand } />
        <meta property="og:url" content={ url } />

        <meta name="twitter:title" content={ site.siteMetadata.title } />
        <meta name="twitter:description" content={ site.siteMetadata.description } />
        <meta name="twitter:image" content={ brand } />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <div className="container">
        { children }
      </div>
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.node.isRequired,
}

export default DefaultLayout