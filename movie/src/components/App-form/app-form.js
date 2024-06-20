import { Component } from "react";
import "./app-form.css";

class AppForm extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  updateTermHandler = (e) => {
    const term = e.target.value.toLowerCase();
    this.setState({ term });
    this.props.updateTermHandler(term);
  };

  render() {
    return (
      <div className="form">
        <input
          type="text"
          placeholder="Kinolarni qidirish"
          onChange={this.updateTermHandler}
          value={this.state.term}
        />
      </div>
    );
  }
}

export default AppForm;
