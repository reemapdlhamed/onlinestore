import React from "react";
import "../App.css";
//Bootstrap for responsiveness
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Orders = (props) => {
  const { id } = useParams();

  const cartState = useSelector((state) => state.handleCart);
  const orderState = useSelector((state) => state.handleOrders);
  var orderStatus;
  var infoz = [];
  for (let i = 0; i < orderState.length; i++) {
    if (orderState[i]._id && id === orderState[i]._id) {
      orderStatus = orderState[i].orderStatus;
    }
  }
  var packed = "step",
    shipped = "step",
    delivered = "step",
    pending="step";
    
  if (orderStatus === "pending") {
    pending="step completed"
  } else if (orderStatus === "packed") {
    packed = "step completed";
    pending="step completed"
  } else if (orderStatus === "shipped") {
    packed = "step completed";
    pending="step completed"
    shipped = "step completed";
  } else if (orderStatus === "delivered") {
    packed = "step completed";
    pending="step completed"
    shipped = "step completed";
    delivered = "step completed";
  } else if (orderStatus === "cancelled") {
  }
  console.log("pending", pending);
  return (
    <div className="main_container min-vh-100 py-5">
      <div class="container padding-bottom-3x mb-1">
        <div class="card mb-3">
          <div class="p-4 text-center text-white text-lg bg-dark rounded-top">
            <span class="text-uppercase">Tracking Order No - </span>
            <span class="text-medium">001698653lp</span>
          </div>
          <div class="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
            <div class="w-100 text-center py-1 px-2">
              <span class="text-medium">Shipped Via:</span> DHL
            </div>
            <div class="w-100 text-center py-1 px-2">
              <span class="text-medium">Status:</span> {orderStatus}
            </div>
            <div class="w-100 text-center py-1 px-2">
              <span class="text-medium">Expected Date:</span> APR 27, 2021
            </div>
          </div>
          <div class="card-body">
            <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
              <div class="step completed" >
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    <i class="pe-7s-cart"></i>
                  </div>
                </div>
                <h4 class="step-title">Confirmed Order</h4>
              </div>
              <div class={pending}>
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    <i class="pe-7s-config"></i>
                  </div>
                </div>
                <h4 class="step-title">Processing Order</h4>
              </div>
              <div class={packed}>
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    <i class="pe-7s-shopbag"></i>
                  </div>
                </div>
                <h4 class="step-title">Packing</h4>
              </div>
              <div class={shipped}>
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    <i class="pe-7s-car"></i>
                  </div>
                </div>
                <h4 class="step-title">Product Dispatched</h4>
              </div>
              <div class={delivered}>
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    <i class="pe-7s-home"></i>
                  </div>
                </div>
                <h4 class="step-title">Product Delivered</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-sm-between align-items-center">
          <div class="custom-control custom-checkbox mr-3">
            <input
              class="custom-control-input"
              type="checkbox"
              id="notify_me"
              checked=""
            />
            <label class="custom-control-label" for="notify_me">
              Notify me when order is delivered
            </label>
          </div>
          <div class="text-left text-sm-right">
            <BrowserRouter basename="/calendar" />
            <NavLink
              to={`../order-details/${id}`}
              className="btn btn-outline-dark  ms-2 px-3 py-2"
            >
              view order details
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
