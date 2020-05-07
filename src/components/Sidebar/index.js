import React from 'react'

import SiteNav from './SiteNav'
import Social from './Social'

import './style.scss'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__container">
        <h2 className="sidebar__title">Quick Links</h2>
        <SiteNav />
        <Social />
        <div className="copyright">
          <p className="copyright__text">Copyright Orest Nowosad &copy; { new Date().getFullYear() }</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar