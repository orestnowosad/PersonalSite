import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import email from '../../../assets/images/icons/email.svg'
import twitter from '../../../assets/images/icons/twitter.svg'
import github from '../../../assets/images/icons/github-badge.svg'
import linkedin from '../../../assets/images/icons/linkedin-badge.svg'

import './style.scss'

function Social() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              email
              twitter
              github
              linkedin
            }
          }
        }
      }
    `
  )

  const links = {
    email: site.siteMetadata.social.email,
    twitter: site.siteMetadata.social.twitter,
    github: site.siteMetadata.social.github,
    linkedin: site.siteMetadata.social.linkedin,
  }

  return (
    <div className="social">
      <ul className="social__list">
        <li className="social__list-item">
          <a href={`mailto:${links.email}`}>
            <img src={email} />
          </a>
        </li>
        <li className="social__list-item">
          <a
            href={`https://twitter.com/${links.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} />
          </a>
        </li>
        <li className="social__list-item">
          <a
            href={`https://github.com/${links.github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} />
          </a>
        </li>
        <li className="social__list-item">
          <a
            href={`https://linkedin.com/in/${links.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Social