/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import styles from "./indexLayout.module.scss"

const IndexLayout = ({ children }) => {
  return (
    <>
      <div className={styles.layout}>
        <main>
          {children}
        </main>
      </div>
    </>
  )
}

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexLayout
