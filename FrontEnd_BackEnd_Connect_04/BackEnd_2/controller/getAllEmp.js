const Emp = require("../model/emp");

const getAllEmp = async (req, res) => {
    try {
        const allEmp = await Emp.find({});
        res.status(200).json(allEmp);
    }
    catch (err) {
        console.log(err);
    }
}
module.exports = {getAllEmp};