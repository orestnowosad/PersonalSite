import React from 'react'

import './style.scss'


function NotFoundError() {
  return (
    <main className="error">
      <div className="error__container">
        <h1 className="error__title">Page Not Found</h1>
        <p className="error__details">
          Looks like you've followed a broken link or entered a URL that doesn't exist.
        </p>
      </div>
    </main>
  )
}

export default NotFoundError