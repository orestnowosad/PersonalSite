import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import { DefaultLayout } from '../components'


function PostTemplate(props) {
  const { location } = props
  const { site, markdownRemark } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        markdownRemark {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featuredImage {
              childImageSharp {
                fluid {
                  originalImg
                }
              }
            }
          }
          excerpt
          html
        }
      }
    `
  )

  return (
    <DefaultLayout
      location={ location }
    >
      <Helmet>
        <title>{ markdownRemark.frontmatter.title } | { site.siteMetadata.title }</title>
        <meta name="description" content={ markdownRemark.excerpt } />

        <meta property="og:title" content={ markdownRemark.frontmatter.title } />
        <meta property="og:description" content={ markdownRemark.excerpt } />
        <meta property="og:image" content={ markdownRemark.frontmatter.featuredImage.childImageSharp.fluid.originalImg } />

        <meta name="twitter:title" content={ markdownRemark.frontmatter.title } />
        <meta name="twitter:description" content={ markdownRemark.excerpt } />
        <meta name="twitter:image" content={ markdownRemark.frontmatter.featuredImage.childImageSharp.fluid.originalImg } />
      </Helmet>

      <article className="post">
        <p className="post__date">{ markdownRemark.frontmatter.date }</p>
        <h1 className="post__title">{ markdownRemark.frontmatter.title }</h1>
        <div
          className="post__content"
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        />
      </article>

    </DefaultLayout>
  )
}

export default PostTemplate