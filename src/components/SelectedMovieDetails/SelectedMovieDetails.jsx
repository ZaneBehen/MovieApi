import './selectedMovieDetails.css';

const SelectedMovieDetails = ({ movieDetails, base_url }) => {
    return (
        <div className="movie__selected" key={movieDetails.id}>
            <figure className="movie__selected--figure">
                <img src={`${movieDetails.poster_path === null || undefined ? base_url + movieDetails.poster_path : base_url + movieDetails.poster_path}`} alt="" className="movie__selected--img" />
            </figure>
            <div className="movie__selected--description">
                <h2 className="movie__selected--title">{movieDetails.title}</h2>
                <h5 className="movie__selected--release-date">{`Release Date: ${movieDetails.release_date}`}</h5>
                <div className="movie__summary">
                    <h3 className="movie__summary--title">
                        Summary
                    </h3>
                    <p className="movie__summary--para">
                        {movieDetails.overview}
                    </p>
                    <h3 className="movie__summary--title">
                        Runtime
                    </h3>
                    <p className="movie__summary--para">
                        {movieDetails.runtime} minutes
                    </p>
                    <h3 className="movie__summary--title">
                        IMDB page
                    </h3>
                    <a href ={
                    `https://www.imdb.com/title/${movieDetails.imdb_id}`}>{movieDetails.title}</a> 
                </div>
            </div>
        </div>
    )
}

export default SelectedMovieDetails
