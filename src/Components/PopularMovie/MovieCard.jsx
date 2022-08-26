import React from 'react'
import './movieCard.style.css'
import { Link } from 'react-router-dom'

const MovieCard = ({ title, poster_path,id }) => {
  return (
    <div className='box'>
      <Link to={`/movie/${id}`}>
        <img src={`http://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
        <div className='grid-body'>
          <h4 className='title'>{title}</h4>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard
