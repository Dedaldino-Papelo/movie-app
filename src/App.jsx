import './App.css'
import Home from './Pages/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Search from './Pages/Search/Search'
import MovieDetails from './Pages/MovieDetails/MovieDetails'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='search' element={<Search />} />
      <Route path='/movie/:id' element={<MovieDetails />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
