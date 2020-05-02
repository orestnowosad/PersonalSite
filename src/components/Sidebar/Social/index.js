import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
          <a
            href={`${links.email}`}
            className="social__list-item-link"
          >
            <svg className="social__list-item-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path d="M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 8L24 26 8 16v-4l16 10 16-10v4z"/>
            </svg>
          </a>
        </li>
        <li className="social__list-item">
          <a
            href={`${links.twitter}`}
            className="social__list-item-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="social__list-item-link-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
            </svg>
          </a>
        </li>
        <li className="social__list-item">
          <a
            href={`${links.github}`}
            className="social__list-item-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="social__list-item-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512">
              <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/>
            </svg>
          </a>
        </li>
        <li className="social__list-item">
          <a
            href={`${links.linkedin}`}
            className="social__list-item-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="social__list-item-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Social