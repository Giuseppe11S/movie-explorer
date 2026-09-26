// card for each film in the map list movies
import { useState } from "react"

function MovieCard({id, title, img, year, genre, rating, director}) {

  // controlling the state of favorites
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <>
    <div className="film-card">
      {id}
      {title}
      {genre}
      {rating}
      {director}
      {<img src={img}/>}
      {year}
      <div>
        <button onClick={() => setIsFavorite(!isFavorite)}><span className={isFavorite && 'heart-icon'}>♡</span></button>
        {isFavorite ? 'Added to favorites' : 'Add to favorites'}
      </div>

    </div>
    </>
  )
}

export default MovieCard