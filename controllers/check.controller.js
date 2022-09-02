//Models

const { Check } = require("../models/check.model")

const getAllChecks = async (req, res) => {
    try {
        const checks = await Check.findAll();

        res.status(200).json({
            status: "sucess",
            data: {
                checks,
            }
        })


    } catch (error) {
        console.log(error)

    }
}
const getACheck = async (req, res) => {
    try {
        const { id } = req.params;

        //Check if the check exists before update
        const check = await Check.findOne({
            where: { id }
        })

        if (!check) {
            return res.status(404).json({
                status: "error",
                message: "Check not found",
            })
        }

        res.status(200).json({
            status: "success",
            data: { check }
        });
    } catch (error) {
        console.log(error);

    }
};

const createNewCheck = async (req, res) => {
    try {

        const { id, entranceTime } = req.body;

        const newCheck = await Check.create({ id, entranceTime })

        res.status(201).json({
            status: "success",
            data: { newCheck },
        })

    } catch (error) {
        console.log(error)
    }
};
const updateCheck = async (req, res) => {
    try {
        const { exitTime } = req.body;
        const { id } = req.params;

        //Check if the check exists before update
        const check = await Check.findOne({
            where: { id }
        })

        if (!check) {
            return res.status(404).json({
                status: "error",
                message: "Check not found",
            })
        }
        await check.update({
            exitTime,
            status: "out",
        })

        res.status(200).json({
            status: "success",
            data: { check }
        });


    } catch (error) {
        console.log(error);
    }
};

const cancellCheck = async (req, res) => {
    try {
        const { id } = req.params;

        const check = await Check.findOne({
            where: { id }
        });
        if (!check) {
            return res.status(404).json({
                status: "error",
                message: "Check not found"
            })
        }

        await check.update({ status: "cancelled" });
        res.status(200).json({
            status: "success",
            data: { check }
        });

    } catch (error) {
        console.log(error)

    }
}





module.exports = {
    getAllChecks,
    createNewCheck,
    updateCheck,
    getACheck,
    cancellCheck
};