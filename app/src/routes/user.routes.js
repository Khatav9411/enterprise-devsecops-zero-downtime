const router = require("express").Router();

const controller = require("../controllers/user.controller");

const validate = require("../middlewares/validate");

const {
    createUserSchema,
    updateUserSchema
} = require("../validations/user.validation");

router.get("/", controller.getUsers);

router.get("/:id", controller.getUser);

router.post(
    "/",
    validate(createUserSchema),
    controller.createUser
);

router.put(
    "/:id",
    validate(updateUserSchema),
    controller.updateUser
);

router.delete("/:id", controller.deleteUser);

module.exports = router;