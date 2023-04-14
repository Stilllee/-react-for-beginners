import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.large_cover_image} alt={movie.title} />
      <p>year : {movie.year}</p>
      <p>uploaded : {movie.date_uploaded}</p>
      <p>downloaded : {movie.download_count}</p>
      <p>rating : {movie.rating}</p>
    </div>
  );
}

export default Detail;
