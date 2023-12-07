const express = require("express");
const mongoose = require("mongoose")
const app = express();
const PORT = 8000;


app.get("/hello", (req,res) => {
    console.log("hello");
    res.send("hello")
})

app.listen(PORT, () => {
    console.log("Server started on server " + PORT);
})