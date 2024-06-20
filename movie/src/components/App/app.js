import { Component } from "react";
import AppFilter from "../App-filter/app-filter";
import AppForm from "../App-form/app-form";
import AppInfo from "../App-info/app-info";
import MovieList from "../Movie-list/movie-list";
import MoviesAddForm from "../Movies-add-form/movies-add-form";
import "./app.css";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Empire of Osman",
          viewers: "989",
          favourite: false,
          like: false,
          id: 1,
        },
        {
          name: "Ertugrul",
          viewers: "899",
          favourite: false,
          like: false,
          id: 2,
        },
        {
          name: "Ichkarida",
          viewers: "1000",
          favourite: false,
          like: false,
          id: 3,
        },
        {
          name: "Chuqur",
          viewers: "990",
          favourite: false,
          like: false,
          id: 4,
        },
      ],
      term: "",
      filter: "all",
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((c) => c.id !== id),
    }));
  };

  addForm = (item) => {
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      id: uuidv4(),
      favourite: false,
      like: false,
    };
    this.setState(({ data }) => ({
      data: [...data, newItem],
    }));
  };

  onToggleFavourite = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.map((item) => {
          if (item.id === id) {
            return { ...item, favourite: !item.favourite };
          }
          return item;
        }),
      };
    });
  };

  onToggleLike = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.map((item) => {
          if (item.id === id) {
            return { ...item, like: !item.like };
          }
          return item;
        }),
      };
    });
  };

  searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }

    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };

  filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((c) => c.like);
      case "mostViewers":
        return arr.filter((c) => c.viewers > 900);
      default:
        return arr;
    }
  };

  updateTermHandler = (term) => this.setState({ term });

  updateFilterHandler = (filter) => this.setState({ filter });

  render() {
    const { data, term, filter } = this.state;
    const allMoviesCount = data.length;
    const favouriteMoviesCount = data.filter((c) => c.favourite).length;
    const visiableData = this.filterHandler(
      this.searchHandler(data, term),
      filter
    );
    return (
      <div className="app">
        <div className="content">
          <AppInfo
            allMoviesCount={allMoviesCount}
            favouriteMoviesCount={favouriteMoviesCount}
          />
          <div className="search-form">
            <AppForm updateTermHandler={this.updateTermHandler} />
            <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler} />
          </div>
          <MovieList
            onToggleFavourite={this.onToggleFavourite}
            onToggleLike={this.onToggleLike}
            data={visiableData}
            onDelete={this.onDelete}
          />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
