import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import { DefaultLayout } from '../components'


function PostTemplate({ data, location }) {
  const {
    markdownRemark: {
      frontmatter: {
        title,
        date,
        featuredImage: {
          childImageSharp: {
            fluid: {
              originalImg
            }
          }
        }
      },
      excerpt,
      html
    }
  } = data

  return (
    <DefaultLayout
      location={ location }
    >
      <Helmet>
        <title>{ title } | Orest Nowosad</title>
        <meta name="description" content={ excerpt } />
        <meta name="author" content="Orest Nowosad" />

        <meta property="og:title" content={ title } />
        <meta property="og:description" content={ excerpt } />
        <meta property="og:image" content={ originalImg } />

        <meta name="twitter:title" content={ title } />
        <meta name="twitter:description" content={ excerpt } />
        <meta name="twitter:image" content={ originalImg } />
      </Helmet>

      <article className="post">
        <p className="post__date">{ date }</p>
        <h1 className="post__title">{ title }</h1>
        <div
          className="post__content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

    </DefaultLayout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              originalImg
            }
          }
        }
      }
    }
  }
`