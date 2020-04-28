import React from 'react'
import PropTypes from 'prop-types'

import Hero from './Hero'
import SiteNav from './SiteNav'
import Social from './Social'

import './style.scss'

function Sidebar() {
  return (
    <div>
      <Hero />
      <SiteNav />
      <Social />
      <div>
        <p>&copy; { new Date().getFullYear() } &mdash; Orest Nowosad</p>
      </div>
    </div>
  )
}

export default Sidebar