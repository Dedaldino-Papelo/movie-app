import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import './Search.styles.css'
import axios from "axios";
import MovieCard from '../../Components/PopularMovie/MovieCard'


const Search = () => {
  const [popularMovies, setPopular] = useState([])
  let [searchParams] = useSearchParams();
  let query = searchParams.get("q")

  useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`)
          .then((resp) => {
              setPopular(resp.data.results)
          }).catch((error) => console.log(error))
  }, [query])

  return (
    <div className='Search'>
    <h2>Resultados Para: <span>{query}</span></h2>
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
export default Search