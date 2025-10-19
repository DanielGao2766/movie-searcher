import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/movieCard"

//page routing
function Favorites(){
    const {favorites} = useMovieContext()

    if(favorites){
        return(
            <div>
                <h2 className = "favorites">Favorites</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (<MovieCard movie={movie} key={movie.id} />))}
                </div>
            </div>
        )
    }
    return(
        <div className = "favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>Start adding movies to your Favorites and they will appear here</p>
        </div>
    )
    
}

export default Favorites