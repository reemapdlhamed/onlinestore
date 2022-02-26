const mongoose = require("mongoose");
const order = require("./../models/order");
const express = require("express");
const { validationResult } = require("express-validator");


//create order
exports.createOrders = (request, response, next) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
        throw error;
    } 
      let object = new order({
        _id: request.body.id,
        customerName:request.body.customerName,
        customerID:request.body.user,
        phoneNumber:request.body.phoneNumber,
        shippingAddress:request.body.shippingAddress,
        orderItems:request.body.orderItems,
        orderDate:request.body.orderDate,
        orderStatus:request.body.orderStatus,
        totalPrice:request.body.totalPrice,
        shippingPrice:request.body.shippingAddress,
        // paymentStatus:request.body.paymentStatus,
        // paymentType:request.body.paymentType
      });
      object
        .save()
        .then((data) => {
          response.status(201).json({ message: "order added", data });
        })
        .catch((error) => next(error));  
  };


  //getMyOrdersByID //check
  exports.getMyOrdersByID = (request, response, next) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
        throw error;
    } 
  order.find({_id:request.body.customerID })
  .then((data) => {
    if (!orderItems && orderItems.length === 0) {
        next(new Error("order not found"));
    }
    response.status(200).json({ data });
  })
  .catch((error) => {
    next(error.message);
  });
};

//update orderStatus
exports.updateOrderStatus = (request, response, next) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
        throw error;
    } 
    order.findOneAndUpdate(
      { _id: request.body.id },
      {
        $set: {
            orderStatus: req.body.orderStatus

        },
      }
    )
      .then((data) => {
        
        response.status(201).json({ message: "order Status updated", data });
      })
      .catch((error) => {
        next(error);
      });
  };

//get Orders
exports.getOrders=(request,response,next)=>{
    order.find({})
        .then(date=>{
            response.status(200).json(data)
        })
        .catch(error=>{
            next(error);
        })
}  
  //delete order
//   exports.deleteOrder = async (request, response, next) => {
//         try {
//             let data = await order.findOneAndDelete({ orderItems: request.body.productId });
//             if (data == null) throw new Error("order not found");
//             response.status(200).json({ message: "deleted" })
//         }
//         catch (error) {
//             next(error)
//         }
   
// }