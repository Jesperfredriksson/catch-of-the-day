import React from "react";
import { formatPrice } from '../helpers';
class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish.status === 'available';
     if(!isAvailable) {
    return  <li key={key}>
     Sorry {fish ? fish.name : 'fish'} är slut.
      </li>
    }
    return <li key={key}>
    {count} lbs {fish.name}
    {formatPrice(count * fish.price)}
    </li>;
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    console.log(this.props);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      console.log(fish, count);
      const isAvailable = fish && fish.status === "available";
      console.log(isAvailable);
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    console.log(orderIds);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul>
        <ul className="order">{orderIds.map (this.renderOrder)}</ul>
        </ul>
        <div className="total">
          <strong>
          Total:
          {formatPrice(total)}
          </strong>
        </div>
      </div>
    );
  }
}
export default Order;
