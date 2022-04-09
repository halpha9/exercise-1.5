import React from "react";
import "./Checkout.scss";
import Items from "./Items";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

function Checkout() {
  let subTotal = Items.data.reduce(function (prev, current) {
    return prev + +current.price * current.quantity;
  }, 0);

  return (
    <div className="checkout">
      <div className="checkout__box">
        <div className="checkout__title">
          <h2>Your Basket</h2>
          <p>
            Items you have added to your basket are shown below. Adjust the
            quantities or remove items before continuing purchase.
          </p>
        </div>
        <div>
          <table>
            <thead>
              <tr className="table__title">
                <th>Product</th>
                <th className="table__row2">Price</th>
                <th className="table__row3">Quantity</th>
                <th className="table__row4">Cost</th>
              </tr>
            </thead>
            <tbody>
              {Items.data.map((item, index) => {
                return (
                  <tr className="table__body" key={index}>
                    <td>{item.title} </td>
                    <td className="table__row2">£{item.price}</td>
                    <td className="table__row3 checkout__quantity">
                      <button type="button" className="checkout__quantity-btn">
                        -
                      </button>
                      <p className="checkout__quantity-value">
                        {item.quantity}
                      </p>
                      <button type="button" className="checkout__quantity-btn">
                        +
                      </button>
                    </td>
                    <td className="table__row4">
                      £{item.price * item.quantity}
                    </td>
                    <td>
                      <DeleteOutlinedIcon className="checkout__icon" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="checkout__summary">
            <div className="checkout__summaries checkout__subtotal">
              <h4>Subtotal</h4>
              <h4>£{subTotal}</h4>
            </div>
            <div className="checkout__summaries checkout__vat">
              <h4>VAT at 20%</h4>
              <h4>£{Math.round(subTotal * 0.2 * 100) / 100}</h4>
            </div>
            <div className="checkout__summaries checkout__total">
              <h4>Total Cost</h4>
              <h4>£{Math.round(subTotal * 1.2 * 100) / 100}</h4>
            </div>
            <button className="standard__btn">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
