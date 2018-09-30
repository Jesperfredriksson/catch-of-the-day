import React from "react";

class Order extends React.Component {
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
        {orderIds}
        <div className="total">
          <strong>{total}</strong>
        </div>
      </div>
    );
  }
}
export default Order;
