import React from "react";
import { useState } from "react";
import '../styles.css';
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
    toggleWatchlist: (movie: any) => void;
}

const MoviesGrid: React.FC<Movies> = ({ movies, watchlist, toggleWatchlist }) => {
    const [search, setSearch] = useState<string>("");

    const [genre, setGenre] = useState("All Genres");
    const [rating, setRating] = useState("All");



    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGenre(e.target.value);
    }

    const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRating(e.target.value);
    }

    const matchesGenre = (movie: Movie, genre: string) => {
        return genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();
    }

    const searchTerm = (movie: Movie, search: string) => {
        return movie.title.toLowerCase().includes(search.toLowerCase())
    }

    const mactchesRating = (movie: Movie, rating: string) => {
        switch (rating) {
            case 'All':
                return true;
            case 'Good':
                return movie.rating >= 8;
            case 'OK':
                return movie.rating <= 8 && movie.rating >= 5;
            case 'Bad':
                return movie.rating < 5;

            default:
                return false;
        }
    }

    const filterMovies = movies.filter(movie =>
        matchesGenre(movie, genre) && mactchesRating(movie, rating) && searchTerm(movie, search)
    );
    return (
        <div>
            <input type="text"
                className="search-input"
                placeholder="search movies.."
                value={search}
                onChange={handleSearchChange} />

            <div className="filter-bar">
                <div className="filter-slot">
                    <label>Genre</label>
                    <select className="filter-dropdown" value={genre} onChange={handleGenreChange}>
                        <option>All Genres</option>
                        <option>Action</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                    </select>
                </div>

                <div className="filter-slot">
                    <label>Rating</label>
                    <select className="filter-dropdown" value={rating} onChange={handleRatingChange}>
                        <option>All</option>
                        <option>Good</option>
                        <option>Bad</option>
                        <option>Ok</option>
                    </select>
                </div>
            </div>
            <div className="movies-grid">
                {filterMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} toggleWatchlist={toggleWatchlist} isWatchlisted={watchlist.includes(movie.id)} />
                ))}
            </div>
        </div>
    )
}

export default MoviesGrid;