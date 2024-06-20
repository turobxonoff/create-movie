import { Component } from "react";
import "./movies-add-form.css";

class MoviesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      views: "",
    };
  }

  changeHandleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addFormHandler = (e) => {
    e.preventDefault();
    this.props.addForm({ name: this.state.name, viewers: this.state.views });
    this.setState({
      name: "",
      views: "",
    });
  };

  render() {
    const { name, views } = this.state;

    return (
      <div className="movies-add-form">
        <h3>Yangi kino qo'shish</h3>
        <form
          action=""
          className="d-flex add-form"
          onSubmit={this.addFormHandler}
        >
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Qanday kino?"
            onChange={this.changeHandleInput}
            name="name"
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Nechi marotaba ko'rilgan?"
            onChange={this.changeHandleInput}
            name="views"
            value={views}
          />
          <button className="btn btn-outline-dark" type="submit">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default MoviesAddForm;
