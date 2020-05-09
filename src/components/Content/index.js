import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

function Content(props) {
  const {
    error,
  } = props

  if (error == 404) {
    return (
      <main className="content">
        <article>
          <h1>Page Not Found</h1>
          <p>
            Looks like you've followed a broken link or entered a URL that doesn't exist.
          </p>
        </article>
      </main>
    )
  }

  return (
    <main className="content">
      <article>
        <h1>Temp</h1>
      </article>
    </main>
  )
}

Content.propTypes = {
  error: PropTypes.number,
}

export default Content