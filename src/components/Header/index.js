import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import './style.scss'

function Header() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `
  )

  return (
    <header className="header">
      <div className="header__container">
        <Link className="brand" to="/">
          <svg className="brand__image" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12.34L4.23 6.45L6.47 7.35L10.34 2.13L12.69 5.33L14.18 4.19L16.39 7.68L19.15 5.73L21.31 8.23L22.33 7.45L24 10.23L22.33 8.48L22.14 11.30L19.15 7.48L17.83 8.48L17.83 14.45L13.99 6.25L12.69 6.71L10.24 3.45L9.03 15.67L6.12 8.96L4.23 7.98L0 12.34"/>
          </svg>
          <div className="brand__text">
            <h1 className="brand__text-title">
              { site.siteMetadata.title }
            </h1>
            <h2 className="brand__text-subtitle">
              { site.siteMetadata.subtitle }
            </h2>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header