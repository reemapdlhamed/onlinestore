import React from "react";
// import { NavLink } from 'react-router-dom'

function OrderDetails() {
  return (
    <div className=" row order-products justify-content-between">
      <div className="col-lg-8 mt-5 mx-5">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="col-lg-3 d-flex align-items-end flex-column mt-5  px-5  subtotal-order">
        <table className="table table-striped ">
          <tbody>
            <tr>
              <td>
                <strong>Products</strong>
              </td>
              <td>$50</td>
            </tr>
            <tr>
              <td>
                <strong>Shipping</strong>
              </td>
              <td>$50</td>
            </tr>
            <tr>
              <td>
                <strong>Tax</strong>
              </td>
              <td>$50</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>$10000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderDetails;
