import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, Link, useStaticQuery } from 'gatsby'

import { DefaultLayout } from '../../components'

function BlogRoute(props) {
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
        <title>Archive | { site.siteMetadata.title }</title>
        <meta name="description" content={ site.siteMetadata.description } />
      </Helmet>

      <article>
        <h1>Archive</h1>
        <p>
          Archived posts.
        </p>
        <div>
          {posts.map((node, index) => {
            const {
              node : {
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
              <Link to={`${slug}`} key={index}>
                {date} &middot; {title}
              </Link>
            )
          })}
        </div>
      </article>

    </DefaultLayout>
  )
}

BlogRoute.propTypes = {
  location: PropTypes.node.isRequired,
}

export default BlogRoute