const Pay = require("../models/pay");
const stripe =require("stripe")(process.env.STRIPE_PRIVATE_KEY)
exports.createPay = (request, response, next) => {
  console.log(request.body)
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
      let error = new Error();
      error.status = 422;
      error.message = errors
        .array()
        .reduce((current, object) => current + object.msg + " ", "");
      throw error;
    }
/*
    try{
const session = await stripe.checkout.session.create({
  payment_method_types:['card'],
  payment:'payment',
  success_url:'${process.env.SERVER_URL}/success.html',
  cancel_url:'${process.env.SERVER_URL}/cancel.html',

})
    }
    catch{

    }
    */
    let object = new order({
      items: request.body.items
    });
    object
      .save()
      .then((data) => {
        response.status(201).json({ message: "payment added", data });
      })
      .catch((error) => next(error.message));
  };