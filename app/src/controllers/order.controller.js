const OrderService = require("../services/order.service");

exports.getOrders = async (req, res, next) => {

    try {

        const orders = await OrderService.getOrders();

        res.json(orders);

    } catch (err) {

        next(err);

    }

};

exports.getOrder = async (req, res, next) => {

    try {

        const order = await OrderService.getOrder(req.params.id);

        if (!order) {

            return res.status(404).json({
                message: "Order not found"
            });

        }

        res.json(order);

    } catch (err) {

        next(err);

    }

};

exports.createOrder = async (req, res, next) => {

    try {

        const order = await OrderService.addOrder(req.body);

        res.status(201).json(order);

    } catch (err) {

        next(err);

    }

};

exports.updateOrder = async (req, res, next) => {

    try {

        const order = await OrderService.editOrder(
            req.params.id,
            req.body
        );

        res.json(order);

    } catch (err) {

        next(err);

    }

};

exports.deleteOrder = async (req, res, next) => {

    try {

        await OrderService.removeOrder(req.params.id);

        res.json({
            message: "Order deleted successfully"
        });

    } catch (err) {

        next(err);

    }

};