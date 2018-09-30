import React from "react";

class Fish extends React.Component {
  render() {
    const { image, name, price, desc, status } = this.props.details;
    const IsAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">{name}</h3>
        <span className="price">{price}</span>
        <p>{desc}</p>
        <button
          disabled={!IsAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {!IsAvailable ? "Sold Out" : "Add to Order"}
        </button>
      </li>
    );
  }
}
export default Fish;
