import React from "react";
import '../styles.css';

interface Movie {
    id: number;
    title: string;
    image: string; // Assuming you have an image URL
    genre: string;
    rating: number;
}

interface MovieCardProps {
    movie: Movie; // Define the type of the movies prop
    isWatchlisted: boolean;
    toggleWatchlist: (movie: number) => void;
}


const MovieCard: React.FC<MovieCardProps> = ({ movie, isWatchlisted, toggleWatchlist }) => {

    const handleError = (e: any) => {
        e.targer.src = "images/default.jpg";
    }

    const getRatingClass = (rating: number): string => {
        if (rating >= 8) {
            return "rating-good";
        }
        else if (rating < 8 && rating >= 5)
            return "rating-ok";
        else
            return "rating-bad";
    }
    return (
        <div className='movies-grid'>


            <div key={(movie.id)} className="movie-card">
                <img src={`images/${movie.image}`} alt={movie.title} onError={handleError} />
                <div className="movie-card-info">
                    <h3 className="movie-card-title">{movie.title}</h3>
                    <div>
                        <span className="movie-card-genre">{movie.genre}</span>
                        <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</span>
                    </div>
                </div>
                <label className="switch">
                    <input type="checkbox" checked={isWatchlisted} onChange={() => toggleWatchlist(movie.id)}>
                    </input>
                    <span className="slider"></span>
                    <span className="slider-label">{isWatchlisted ? "In Watchlist" : "Add to Watchlist"}</span>
                </label>

            </div>
        </div>
    );
}

export default MovieCard;