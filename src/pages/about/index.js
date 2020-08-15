import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, Link, useStaticQuery } from 'gatsby'

import { DefaultLayout } from '../../components'


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

        <meta property="og:title" content={ 'About | ' + site.siteMetadata.title } />
        <meta property="og:description" content={ site.siteMetadata.description } />

        <meta name="twitter:title" content={ 'About | ' + site.siteMetadata.title } />
        <meta name="twitter:description" content={ site.siteMetadata.description } />
      </Helmet>

      <article className="post">
        <h1 className="post__title">About Me</h1>
        <div className="post__content">
          <h3>Hey, I'm Orest.</h3>
          <ol>
            <li>I write code.</li>
            <li>Currently helping small businesses develop, and grow, their <a href="https://explore.agency/" target="_blank" rel="noopener noreferrer">online brands</a>.</li>
            <li>I sometimes enjoy <Link to="/blog">writing</Link>.</li>
            <li>Here's my <Link to="/me">mugshot</Link>.</li>
          </ol>
          <h3>Want to get in touch?</h3>
          <p>
            Just email me at <a href="mailto:nowosad.orest@gmail.com">nowosad.orest@gmail.com</a>. Or message 
            me on <a href="https://linkedin.com/in/orestnowosad" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
            Or <a href="https://twitter.com/orestnowosad" target="_blank" rel="noopener noreferrer">tweet</a> at me.
            I'm always hungry for conversation.
          </p>
        </div>
      </article>

    </DefaultLayout>
  )
}

AboutRoute.propTypes = {
  location: PropTypes.node.isRequired,
}

export default AboutRoute