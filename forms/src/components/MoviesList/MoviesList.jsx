import { useState } from "react"
import { moviesArray } from "../../fakeAPI"
import MovieCard from "../MovieCard/MovieCard"
import NewMovieForm from "../NewMovieForm/NewMovieForm"
import MoviesFilter from "../MoviesFilter/MoviesFilter"

const MoviesList = () => {

    const [movies, setMovies] = useState(moviesArray)
    const [moviesBackup, setMoviesBackup] = useState(moviesArray)

    const removeMovie = movieToDelete => {
        const newMovies = movies.filter(elm => elm._id != movieToDelete)
        setMovies(newMovies)
    }

    const addMovie = newMovie => {
        const moviesCopy = [newMovie, ...movies]
        setMovies(moviesCopy)

        const moviesBackupCopy = [newMovie, ...moviesBackup]
        setMoviesBackup(moviesBackupCopy)
    }

    const filterMovies = firstLetter => {

        if (firstLetter === 'All') {
            setMovies(moviesBackup)
        } else {
            const filteredMovies = moviesBackup.filter(elm => elm.title.startsWith(firstLetter))
            setMovies(filteredMovies)
        }
    }

    return (
        <>
            <MoviesFilter filterMovies={filterMovies} />
            {
                movies.map(elm => {
                    return <MovieCard key={elm._id} {...elm} removeMovie={removeMovie} />
                })
            }
            <NewMovieForm addMovie={addMovie} />
        </>
    )
}

export default MoviesList