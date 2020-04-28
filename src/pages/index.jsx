import React from 'react'

import PropTypes from 'prop-types'

import DefaultLayout from '../components/Layout'
import SideNav from '../components/SideNav'

function IndexRoute() {
  return (
    <DefaultLayout>
      <SideNav />
    </DefaultLayout>
  )
}

export default IndexRoute