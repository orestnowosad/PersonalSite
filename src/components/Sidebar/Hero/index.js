import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link, useStaticQuery } from 'gatsby'

import brand from '../../../assets/images/brand/brand.svg'

import './style.scss'

function Hero() {
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
    <div className="hero">
      <Link to="/">
        <img className="hero__brand-image" src={ brand } alt="Brand Image" width="75" />
      </Link>
      <h1 className="hero__brand-title">
        { site.siteMetadata.title }
      </h1>
      <h2 className="hero__brand-description">
        { site.siteMetadata.description }
      </h2>
    </div>
  )
}

export default Hero