import React from 'react'
import { Link } from 'gatsby'

import './style.scss'

function Card(props) {
  const {
    slug,
    index,
    date,
    title,
    excerpt,
    featuredImage
  } = props

  return (
    <Link
      to={`${slug}`}
      key={index}
    >
      <article className="card">
        <img src={ featuredImage } alt="Post featured image" />
        <div className="card__details">
          <p className="card__details__date">{ date }</p>
          <h1 className="card__details__title">{ title }</h1>
          <p className="card__details__excerpt">{ excerpt }</p>
        </div>
      </article>
    </Link>
  )
}

export default Card