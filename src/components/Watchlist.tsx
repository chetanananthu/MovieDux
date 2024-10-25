import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

interface Movie {
    id: number;
    title: string;
    image: string; // Assuming you have an image URL
    genre: string;
    rating: number;
}

interface Movies {
    movies: Movie[];
    watchlist: number[];
    toggleWatchlist: (movieId: number) => void;
}

const Watchlist: React.FC<Movies> = ({ movies, watchlist, toggleWatchlist }) => {
    return (
        <div>
            <h1 className="title">Your Watchlist</h1>
            <div className="watchlist">
                {
                    watchlist.map(id => {
                        const movie = movies.find(movie => movie.id === id);
                        if (!movie) return null;
                        return <MovieCard key={movie?.id} movie={movie} toggleWatchlist={toggleWatchlist} isWatchlisted={true} />
                    })
                }
            </div>

        </div>
    )
}

export default Watchlist;

