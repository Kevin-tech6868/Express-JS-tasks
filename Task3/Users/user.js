    const express = require("express");

    const router = express.Router();

    router.get("/", (req, res) => {
        res.send("Don't panic.");
    });

    router.get("/users", (req, res) => {
        res.send("You're running on port number 4002");
    });

    router.get("/home", (req, res) => {
        res.send("Welcome to the home page");
    });

    router.get("/url", (req, res) => {
        res.json([
            {"id": 3, "name": "Alice"},
            
        ]);
    })
    router.get("/app", (req,res)=>{
        res.status(404).json({ error: "User not found" });
    })

    module.exports = router; // Corrected export statement
