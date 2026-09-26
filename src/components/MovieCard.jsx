// card for each film in the map list movies

function MovieCard({id, title, img, year, genre, rating, director}) {
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
    </div>
    </>
  )
}

export default MovieCard