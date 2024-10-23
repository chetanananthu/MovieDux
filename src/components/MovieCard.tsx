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
    movies: Movie[]; // Define the type of the movies prop
}

const MovieCard: React.FC<MovieCardProps> = ({ movies }) => {

    return (
        <div className='movies-grid'>
            {
                movies.map((movie) => (
                    <div key={(movie.id)} className="movie-card">
                        <img src={`images/${movie.image}`} alt={movie.title} />
                        <div className="movie-card-info">
                            <h3 className="movie-card-title">{movie.title}</h3>
                            <p className="movie-card-genre">{movie.genre}</p>
                            <p className="movie-card-rating">{movie.rating}</p>

                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default MovieCard;