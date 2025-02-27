const express = require("express")
const app = express()

app.get("/", (req, res) =>{
    res.json([
        {"id": 1, "name": "John"},
        {"id": 2, "name": "Jane"}
    ])
})

app.listen(4000)