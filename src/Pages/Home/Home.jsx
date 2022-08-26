import React,{ useEffect, useState } from 'react'
import './home.style.css'
import axios from 'axios'
import MovieCard from '../../Components/PopularMovie/MovieCard'

const Home = () => {
    const [popularMovies, setPopular] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
            .then((resp) => {
                setPopular(resp.data.results)
            }).catch((error) => console.log(error))
    }, [])

    return (
        <div className='container'>
            <h2>Popular Movies</h2>
            <div className='Homepage'>
                {popularMovies.length === 0 && <h4 style={{color:'#fff'}}>Loading...</h4>}
                {
                    popularMovies.map((movie) => (
                        <MovieCard key={movie.id} {...movie} />
                    ))
                }
            </div>
        </div>
    )
}
export default Home
