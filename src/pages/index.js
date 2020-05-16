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
              excerpt(pruneLength: 300)
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
      </Helmet>

      <article>
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
            <div>
              <Link to={`${slug}`} key={index}>
                <h1>{ title }</h1>
              </Link>
              <p>{ date }</p>
              <p>{ excerpt }</p>
            </div>
          )
        })}
      </article>

    </DefaultLayout>
  )
}

IndexRoute.propTypes = {
  location: PropTypes.node.isRequired,
}

export default IndexRoute