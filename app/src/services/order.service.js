const Order = require("../models/order.model");

exports.getOrders = () =>
    Order.getAllOrders();

exports.getOrder = (id) =>
    Order.getOrderById(id);

exports.addOrder = (data) =>
    Order.createOrder(data);

exports.editOrder = (id, data) =>
    Order.updateOrder(id, data);

exports.removeOrder = (id) =>
    Order.deleteOrder(id);