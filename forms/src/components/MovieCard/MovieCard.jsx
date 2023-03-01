const MovieCard = ({ IMDBRating, title, director, removeMovie, _id, hasOscars }) => {

    return (
        <div className="MovieCard">
            <h3>{title}</h3>
            <p>Director: {director}</p>
            <p>Rating: {IMDBRating} | {hasOscars ? 'Sí ganó Oscar 🏆' : 'No ganó Oscar 💩'}</p>
            <button className="btn-delete" onClick={() => removeMovie(_id)}>Delete</button>
        </div>
    )
}

export default MovieCard