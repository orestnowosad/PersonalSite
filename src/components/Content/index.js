import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

function Content(props) {
  const { isIndexPage } = props

  if (isIndexPage) {
    return (
      <div className="background"></div>
    )
  }

  return (
    <div className="content">
      <div className="content__container">

      </div>
    </div>
  )
}

export default Content