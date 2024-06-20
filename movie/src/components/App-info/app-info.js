import "./app-info.css"

const AppInfo = ({allMoviesCount, favouriteMoviesCount}) => {
  return (
    <div className="info">
        <h1 className="fs-2">Barcha kinolar soni: {allMoviesCount}</h1>
        <h2 className="fs-3">Sevimli kinolar: {favouriteMoviesCount}</h2>
    </div>
  )
}

export default AppInfo