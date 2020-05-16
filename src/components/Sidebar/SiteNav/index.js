import React from 'react'
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
      <h3 className="site-nav__title">Directory</h3>
      <ul className="site-nav__list">
        {siteNav.map(item => (
          <li className="site-nav__list-item" key={ item.path }>
            {item.path.startsWith('/')
              ? <Link to={ item.path } className="site-nav__list-item-link">{ item.label }</Link>
              : <a href={ item.path } className="site-nav__list-item-link" target="_blank" rel="noopener noreferrer">{ item.label }</a>
            }
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SiteNav