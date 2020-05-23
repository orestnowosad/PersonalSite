import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, Link, useStaticQuery } from 'gatsby'

import { DefaultLayout } from '../components'


function IndexRoute(props) {
  const { location } = props
  const { site, allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
        allMarkdownRemark(
          sort: {
            fields: [frontmatter___date]
            order: DESC
          }
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
              }
            }
          }
        }
      }
    `
  )

  const posts = allMarkdownRemark.edges

  return (
    <DefaultLayout
      location={ location }  
    >
      <Helmet>
        <title>{ site.siteMetadata.title }</title>
        <meta name="description" content={ site.siteMetadata.description } />

        <meta property="og:title" content={ site.siteMetadata.title } />
        <meta property="og:description" content={ site.siteMetadata.description } />

        <meta name="twitter:title" content={ site.siteMetadata.title } />
        <meta name="twitter:description" content={ site.siteMetadata.description } />
      </Helmet>

      <div className="post-list">
        {posts.map((node, index) => {
          const {
            node : {
              excerpt,
              fields : {
                slug
              },
              frontmatter : {
                date,
                title
              }
            }
          } = node

          return (
            <article className="post-list__item">
              <p className="post-list__item-date">{ date }</p>
              <h1 className="post-list__item-title">
                <Link to={`${slug}`} key={index}>
                  { title }
                </Link>
              </h1>
              <p className="post-list__item-excerpt">{ excerpt }</p>
            </article>
          )
        })}
      </div>

    </DefaultLayout>
  )
}

IndexRoute.propTypes = {
  location: PropTypes.node.isRequired,
}

export default IndexRoute