const router = require("express").Router();

const controller = require("../controllers/order.controller");

const validate = require("../middlewares/validate");

const {
    orderSchema
} = require("../validations/order.validation");

router.get("/", controller.getOrders);

router.get("/:id", controller.getOrder);

router.post(
    "/",
    validate(orderSchema),
    controller.createOrder
);

router.put(
    "/:id",
    validate(orderSchema),
    controller.updateOrder
);

router.delete("/:id", controller.deleteOrder);

module.exports = router;