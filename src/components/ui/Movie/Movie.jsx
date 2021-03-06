import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import './movie.css'

const Movie = ({ movie }) => {
    const [img, setImg] = useState();

    const mountedRef = useRef(true);

    useEffect(() => {
        const image = new Image();
        image.src = `https://image.tmdb.org/t/p/original/${movie.poster_path}`; 
        image.onload = () => {
            setTimeout(() => {
                if (mountedRef.current) {
                    setImg(image);
                }
            }, 300);
        }
        return () => {
            mountedRef.current = false;
        }
    })

    return (
        <div className="display-movie">
            {
                img ? (
                    <>
                        <Link to={`/movie/${movie.id}`}>
                            <figure className="movie__img--wrapper">
                                <img
                                    src={img.src}
                                    alt=""
                                    className="movie__img" />
                            </figure>
                        </Link>
                    </>
                ) : (
                    <>
                        <div className="movie__img--skeleton"></div>
                    </>
                )
            }
        </div>
    )
}

export default Movie