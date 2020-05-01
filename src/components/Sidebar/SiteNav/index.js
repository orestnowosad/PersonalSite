import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link, useStaticQuery } from 'gatsby'

import './style.scss'

function SiteNav() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteNav {
              label
              path
            }
          }
        }
      }
    `
  )

  const siteNav = site.siteMetadata.siteNav

  return (
    <nav className="site-nav">
      <ul className="site-nav__list">
        {siteNav.map(item => (
          <li className="site-nav__list-item" key={ item.path }>
            <Link
              to={ item.path }
              className="site-nav__list-item-link"
            >
              { item.label }
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SiteNav