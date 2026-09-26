import { useState, useEffect } from 'react'
import './App.css'

// import data films
import films from "./data/films";

// components
import MovieCard from './components/MovieCard';

function App() {

  const fullList = () => {
    const list = films.map((f) => (
    <MovieCard
    key={f.id}
    id={f.id}
    title={f.title}
    year={f.year}
    img={f.image}
    />))
    return list;
  }

  return (
    <>
     <h1>Movie Explorer</h1>
     <p>Explore your favorites films</p>

      {/* list of films */}
      <div>
        {fullList()}
      </div>
    </>
  )
}

export default App
