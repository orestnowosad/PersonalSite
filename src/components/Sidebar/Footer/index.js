import React from 'react'

import './style.scss'

function Footer() {
  return (
    <div className="footer">
      <p className="footer__text">
        Copyright Orest Nowosad &copy; { new Date().getFullYear() }
      </p>
      <p className="footer__text">
        Built with <a className="footer__text-link" href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a>.
      </p>
    </div>
  )
}

export default Footer