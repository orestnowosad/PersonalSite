/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"

import Header from "../header/header"
import Footer from "../footer/footer"
import SideNav from "../sidenav/sideNav"

import styles from "./pageLayout.module.scss"

const PageLayout = ({ children }) => {
  const siteTitle = "Orest Nowosad"
  const siteDescription = "Software Developer"

  const [sideNavOpen, setSideNavOpen] = useState(false)

  return (
    <>
      <Header setSideNavOpen={setSideNavOpen} />
      <SideNav sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} />
      <div className={styles.container}>
        <main>{children}</main>
      </div>
      <Footer siteTitle={siteTitle} siteDescription={siteDescription} />
    </>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout