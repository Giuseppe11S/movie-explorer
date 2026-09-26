// card for each film in the map list movies

function MovieCard({id, title, img, year, genre, rating, director}) {
  return (
    <>
    {id}
    {title}
    {genre}
    {rating}
    {director}
    {<img src={img}/>}
    {year}
    </>
  )
}

export default MovieCard