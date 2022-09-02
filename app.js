
const express = require("express");

//Routers:
const { checksRouter } = require("./routes/check.routes")
//init express:
const app = express();
//Enable Express app to recive JSON data
app.use(express.json());
//define endpoints:
app.use("/api/v1/registrations", checksRouter)

//catch non - existing endpoints

app.all("*", (req, res) => {
    res.status(404).json({
        status: "error",
        message: `${req.method} ${req.url} does not exists in our server`,
    })
})



module.exports = { app }