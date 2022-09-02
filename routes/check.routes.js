const express = require("express")

const checksRouter = express.Router()

//Controllers

const {
    getAllChecks,
    getACheck,
    createNewCheck,
    updateCheck,
    cancellCheck,


} = require("../controllers/check.controller")

checksRouter.get("/", getAllChecks);

checksRouter.get("/:id", getACheck);

checksRouter.post("/", createNewCheck);

checksRouter.patch("/:id", updateCheck);

checksRouter.delete("/:id", cancellCheck);

module.exports = { checksRouter }