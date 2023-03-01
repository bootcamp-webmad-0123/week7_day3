import { useState } from "react";

const NewMovieForm = ({ addMovie }) => {

    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [IMDBRating, setIMDBRating] = useState(5);
    const [hasOscars, setHasOscars] = useState(true);

    const handleTitleChange = e => setTitle(e.target.value)
    const handleDirectorChange = e => setDirector(e.target.value)
    const handleRatingChange = e => setIMDBRating(e.target.value)
    const handleOscarsChange = e => setHasOscars(e.target.checked)

    const handleSubmit = e => {
        e.preventDefault()          // Evita el envío del formulario
        const newMovie = { title, director, IMDBRating, hasOscars }
        addMovie(newMovie)
    }

    return (
        <div className="AddMovie">

            <h4>Add a Movie</h4>

            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleTitleChange}
                />

                <label>Director: </label>
                <input
                    type="text"
                    name="director"
                    value={director}
                    onChange={handleDirectorChange}

                />

                <label>IMDB Rating: </label>
                <input
                    type="number"
                    name="IMDBRating"
                    value={IMDBRating}
                    onChange={handleRatingChange}

                />

                <label>Won Oscars: </label>
                <input
                    type="checkbox"
                    name="hasOscars"
                    checked={hasOscars}
                    onChange={handleOscarsChange}
                />

                <button type="submit">Add a Movie</button>
            </form>
        </div>
    )
}

export default NewMovieForm