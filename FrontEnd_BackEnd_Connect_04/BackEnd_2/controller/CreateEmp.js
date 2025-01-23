const Emp = require("../model/emp");

const CreateEmp = async (req, res) => {
    try {
        const {name , age , salary , department}= req.body;
        const responce = await Emp.create({
            name: name,
            age: age,
            salary: salary,
            department: department
        });
        res.status(200).json(responce);
        console.log(responce);
       
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}
module.exports = {CreateEmp};