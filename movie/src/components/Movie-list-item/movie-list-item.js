import "./movie-list-item.css";

const MovieListItem = (props) => {
    const {
      name,
      viewers,
      onDelete,
      onToggleFavourite,
      onToggleLike,
      favourite,
      like,
    } = props;
    return (
      <li
        className={`list-group-item d-flex justify-content-between ${
          favourite ? "favourite" : ""
        } ${like ? "like" : ""}`}
      >
        <span className="list-group-item-label" onClick={onToggleLike}>
          {name}
        </span>
        <input
          type="number"
          className="list-group-item-input"
          defaultValue={viewers}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn-cookie btn-sm"
            type="button"
            onClick={onToggleFavourite}
          >
            <i className="fas fa-cookie"></i>
          </button>
          <button className="btn-trash btn-sm" type="button" onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-heart"></i>
        </div>
      </li>
    );
}

export default MovieListItem;
