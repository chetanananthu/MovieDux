import './App.css';
import './styles.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  image: string; // Assuming you have an image URL
  genre: string;
  rating: number;
}

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [watchlist, setWatchlist] = useState<number[]>([]);

  useEffect(() => {
    fetch("movies.json")
      .then(response => response.json())
      .then(data => setMovies(data))
  }, [])  //[]here we are calling for one time only

  {/*here at first prev state is empty [] it checks wheather movieId is included or not in this case it is not
included then [] we are adding prev and movieId thenlist has now movie id[1]*/}

  const toggleWatchlist = (movieId: any) => {
    setWatchlist(prev =>
      prev.includes(movieId) ? prev.filter(id => id !== movieId) : [...prev, movieId]
    )
  }


  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<MoviesGrid watchlist={watchlist} movies={movies} toggleWatchlist={toggleWatchlist} />}></Route>
            <Route path="/watchlist" element={<Watchlist watchlist={watchlist} movies={movies} toggleWatchlist={toggleWatchlist} />} ></Route>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
