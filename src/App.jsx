import './css/App.css'
import {Routes, Route} from "react-router-dom"
import  NavBar from "./components/NavBar"
import MovieCard from "./components/movieCard"  
import Home from "./pages/home"
import Favorites  from './pages/favorites'
import { MovieProvider } from './contexts/MovieContext'

//root component 
function App() {   //this function is a component: returns JSX code (JSX code just means only having one parent per thing)
  return(
    //fragment parent (allows for multile of something at the same level bc they all have the one fragment parent) 
      <MovieProvider>
        <NavBar />
       <main className = "main-content">
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/favorites" element = {<Favorites/>}/>
        </Routes>
       </main>
      </MovieProvider>
  )
}

  // example of conditional rendering (important topic)
  // const movieNumber = 2 
  //   {movieNumber === 1 ? (
  //     <MovieCard movie = {{title: "myFilm", release_date: "2025"}} />
  //   ) : (
  //     <MovieCard movie = {{title: "hisFilm", release_date: "2025"}} />
  //   )}


  
export default App
