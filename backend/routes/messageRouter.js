const express = require("express");
const router = express.Router();
const { body, query, param } = require("express-validator");
const controller = require("./../controllers/messageController");

router.route("/message")
.post(
  [
    body("name").isString().withMessage("invalid name."),
    body("Email address").isString().withMessage("invalid Email address."),
    body("Your Message").isString().withMessage("invalid Message."),

  ],
  controller.addMessage
)
router
  .route("/message")
  .get(controller.showMessage)

  .delete(
    [body("name").notEmpty().withMessage("name is required")],
    controller.deleteMessage
  )

