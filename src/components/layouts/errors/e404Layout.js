/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./e404Layout.scss"

const E404Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

E404Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default E404Layout