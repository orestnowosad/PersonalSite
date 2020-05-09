import React from 'react'

import Footer from './Footer'
import SiteNav from './SiteNav'
import Social from './Social'

import './style.scss'

function Sidebar() {
  return (
    <aside className="sidebar">
      <SiteNav />
      <Social />
      <Footer />
    </aside>
  )
}

export default Sidebar