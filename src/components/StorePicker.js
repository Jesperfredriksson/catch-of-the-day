import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    event.preventDefault();

    const StoreName = this.myInput.current.value;

    this.props.history.push(`/store/${StoreName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="Submit">Visit store --> </button>
      </form>
    );
  }
}

export default StorePicker;
