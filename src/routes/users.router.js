const express = require("express");
const users = require("../usecases/users.usecase");


const router = express.Router();

router.post("/", async (request, response) => {
    try {
        const userData = request.body;
        const newUser = await users.create(userData);

        response.status(201);
        response.json({
            message: " User created",
            data: {
                User: newUser
            },
        });
    } catch (error) {
        const status = error.name === "validationError" ? 400 : 500;
        response.status(status)

        response.json({
            message: "something went wrong",
            error: error.message,
        });
    }
});

router.get("/:id", async (request, response) => {
    try {
        const id = request.params.id;
        const user = await users.getById(id);

        response.json({
            message: `user ${user.id}`,
            data: { user },
        });

    } catch (error) {
        response.status(error.status || 500);
        response.json({
            message: "something went wrong",
            error: error.message
        });

    }

});

module.exports = router;