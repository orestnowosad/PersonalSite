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
      <div className=" brand">
        <Link to="/">
          <img className="brand-icon" src={ brand } alt="Brand Image" width="75" />
        </Link>
      </div>
      <h1>{ site.siteMetadata.title }</h1>
      <h2>{ site.siteMetadata.description }</h2>
    </div>
  )
}

export default Hero