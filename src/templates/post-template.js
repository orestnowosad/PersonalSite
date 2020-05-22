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
        <meta name="description" content={ site.siteMetadata.title } />
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