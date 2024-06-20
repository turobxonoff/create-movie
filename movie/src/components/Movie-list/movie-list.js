import MovieListItem from "../Movie-list-item/movie-list-item";
import "./movie-list.css";

const MovieList = ({ data, onDelete, onToggleFavourite, onToggleLike }) => {
  return (
    <ul className="movie-list">
      {data.map((item) => (
        <MovieListItem
          name={item.name}
          viewers={item.viewers}
          favourite={item.favourite}
          like={item.like}
          key={item.id}
          onDelete={() => onDelete(item.id)}
          onToggleFavourite={() => onToggleFavourite(item.id)}
          onToggleLike={() => onToggleLike(item.id)}
        />
      ))}
    </ul>
  );
};

export default MovieList;
