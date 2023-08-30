const express = require("express");
const posts = require("../usecases/posts.usecase");

const router = express.Router();

router.post("/", async (request, response) => {
    try {
        const postData = request.body;
        const newPost = await posts.create(postData);

        response.status(201);
        response.json({
            message: "Post created",
            data: {
                post: newPost,
            },
        });
    } catch (error) {
        const status = error.name === "ValidationError" ? 400 : 500;
        response.status(status);
        response.json({
            message: "something went wrong",
            error: error.message,
        });
    }
});

router.get("/", async (request, response) => {
    try {
        const { titleFilter, user } = request.query;
        const allPosts = await posts.getAll(titleFilter, user);

        response.json({
            message: "Posts list",
            data: {
                posts: allPosts,
            },
        });
    } catch (error) {
        response.status(500);
        response.json({
            message: "something went wrong",
            error: error.message,
        });
    }
});


router.get("/search", async (request, response) => {
    try {
        const title = request.params.search;
        const post = await posts.getByTitle(title);

        response.json({
            message: `Post ${post.title}`,
            data: { post },
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            message: "something went wrong",
            error: error.message,
        });
    }
});

router.delete("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const postDelete = await posts.deleteById(id);

        response.json({
            message: "User deleted",
            data: {
                post: postDelete,
            },
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            message: "something went wrong",
            error: error.message,
        });
    }
});

router.patch("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const data = request.body;

        const postUpdateData = await posts.updateById(id, data);

        response.json({
            message: "post updated",
            data: {
                post: postUpdateData,
            },
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            message: "something went wrong",
            error: error.message,
        });
    }
});

module.exports = router;