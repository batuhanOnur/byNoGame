import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Card = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await axios.get("https://picsum.photos/v2/list?page=1&limit=12");
            setMovies(res.data);
        }

        fetchMovies();

    }, [])




    return (
        <div className="container">
            {movies.map(movie => (
                <div className="card" key={movie.id}>
                    <div className="card-header">
                        <img src={movie.download_url} alt="" />
                    </div>
                    <div className="card_body">
                        <div className="author">
                            <img src={movie.download_url} alt="" />
                            <div>
                                <small className="tag tag-teal">Author</small>
                                <h5>{movie.author}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;