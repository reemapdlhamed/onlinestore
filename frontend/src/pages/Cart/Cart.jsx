import React, { useEffect } from "react";
import CartItems from "./CartItems";
import CartData from "./data";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_ITEMS, getCartTotal } from "../../redux/actions/cart";
import axios from "axios";

function makeOrder(userObject,totalQuantity) {
  console.log(userObject)

  userObject[0].productId='621a632bad8ce86685ebe869';
  userObject[1].productId='621b902e54d204a60b4feb9d';
  userObject[2].productId='621b64df3dbdabd704393e9c';
  userObject[3].productId='621b648d33d92788ecf3f5fe';
// it make order and pushes it in the database
//but we dont need it now
//we need it after the cliend make the payment first

/*
  try {
    axios.post(
      "http://127.0.0.1:8080/orders",
      {
        customerID: "621d33372944c150d916f17f",
        customerName: "admin",
        phoneNumber: "01012345678",
        paymentType: "cod",

        //here we put the user's cart into the order collection
        orderItems:userObject,

        shippingAddress: {
          country: "egypt",
          city: "mansoura",
          street: "street 1",
          postalCode: "37511",
          building: "building 1 ",
        },
        shippingPrice: 30,
        totalPrice:totalQuantity,
        orderStatus: "pending",
      },
     // { headers: { Authorization: request.get("Authorization") } }

    );
  } catch (error) {
        console.log("the error is",error);
  }
  */

}
function Cart() {
  const { cart, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  if (cart.length === 0) {
    return (
      <h3 className="fw-bold" style={{ marginTop: "20px" }}>
        empty cart
      </h3>
    );
  }
  return (
    <div>
      <h2 className="fw-bold">cart</h2>
      {cart.map((item) => {
        return <CartItems key={item.productId} {...item} />;
      })}
      <footer>
        <hr />
        <div>
          <h4
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginRight: "60px",
            }}
          >
          <button onClick={() => { } }> continue shopping</button>
            Total <span>${totalQuantity} </span>
            <button onClick={() => {makeOrder(cart,totalQuantity); } }> ادفع يا حماصة</button>
          </h4>
        </div>
        <button onClick={() => dispatch(CLEAR_ITEMS())}> clear cart</button>
      </footer>
    </div>
  );
}

export default Cart;
