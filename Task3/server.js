const express = require("express");
const app = express();

// Import user routes
const userRouter = require("./Users/user");

app.use("/", userRouter); // Mount the router

app.listen(4002, () => {
    console.log("Server is running on port 4002");
});
