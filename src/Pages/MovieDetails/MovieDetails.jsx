import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieCard from '../../Components/PopularMovie/MovieCard'
import './move-detail.style.css'
import axios from 'axios'

const MovieDetails = () => {
    const [movie, setMovie] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
            .then((resp) => {
                setMovie(resp.data)
                console.log(resp.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className='move-detail'>
            {movie && (
                <>
                    <div className='move-img'>
                        <MovieCard poster_path={movie.poster_path} />
                    </div>
                    <div className='move-info'>
                        <h2 className='title'>{movie.title}</h2>
                        <div className='overview'>
                            <p>{movie.overview}</p>
                        </div>
                        <h5 className='subtitle'>Average: {movie.vote_average}</h5>
                        <h5 className='subtitle'>Data de Lançamento: {movie.release_date}</h5>
                        <h5 className='subtitle'>Budget: {movie.budget}</h5>
                    </div>
                </>
            )}
        </div>
    )
}

export default MovieDetails
