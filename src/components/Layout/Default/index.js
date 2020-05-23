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

import Header from '../../Header'
import Sidebar from '../../Sidebar'

import brand from '../../../assets/images/brand-icon.png'

import './style.scss'

function DefaultLayout(props) {
  const { children, location } = props
  const url = location.href ? location.href : ''

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />

        <meta property="og:image" content={ brand } />
        <meta property="og:url" content={ url } />

        <meta name="twitter:image" content={ brand } />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <Header />
      <div className="page">
        <div className="page__container">
          <main className="content">
            { children }
          </main>
          <Sidebar />
        </div>
      </div>
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.node.isRequired,
}

export default DefaultLayout