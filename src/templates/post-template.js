import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import {
  DefaultLayout,
  Sidebar
} from '../../components'


function PostTemplate(props) {
  const { location } = props
  const { data } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
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
        <title>{ data.siteMetadata.title }</title>
        <meta name="description" content={ data.siteMetadata.title } />
      </Helmet>
      <Sidebar />
    </DefaultLayout>
  )
}

export default PostTemplate