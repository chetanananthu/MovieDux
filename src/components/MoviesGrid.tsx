import React, { useEffect } from "react";
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



const MoviesGrid: React.FC = () => {

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        fetch("movies.json")
            .then(response => response.json())
            .then(data => setMovies(data))
    }, [])  //[]here we are calling for one time only
    return (
        <div>
            <MovieCard movies={movies} />
        </div>
    )
}

export default MoviesGrid;