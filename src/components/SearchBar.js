import React from "react";

class SearchBar extends React.Component {
  state = { item: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.item);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui field">
            <label>Image Search:</label>
            <input
              type="text"
              placeholder="Search ..."
              value={this.state.item}
              onChange={(e) => this.setState({ item: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
