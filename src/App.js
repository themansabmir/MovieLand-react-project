
import { useState, useEffect } from 'react';

import './App.css';
import MovieCard from './MovieCard';

const url = 'http://www.omdbapi.com/?apikey=ff21345'


function App() {


  const [movies, setMovie] = useState([]);
  const [searchTerm, setSearchTerm]= useState("")

  const searchMovies = async (title) => {
    const response = await fetch(`${url}&s=${title}`)
    const data = await response.json();

    console.log(data.Search);
    setMovie(data.Search)
  }


  useEffect(() => {
    searchMovies('Bat');

  }, []);

  return (

    <div className='app'>
      <h1>MovieLand</h1>

      <div className="search">
        <input type='text' value={searchTerm} placeholder='Search for the movie' onChange={(e) => { setSearchTerm(e.target.value) }} />
        <img src="https://img.icons8.com/ios-glyphs/344/ffffff/search--v1.png" alt="search" onClick={() => { searchMovies(searchTerm) }} />

</div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}

          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>

        )}

     


    </div>
  );
};

export default App;
