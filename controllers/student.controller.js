const Student = require('../models/student');

module.exports={
    getAllStudents: async(req, res ,next)=>{
        try{
            const result = await Student.find()
            res.send(result)
        }catch (error) {
            console.log(error.message);
        }
    },
    AddStudent: async(req, res,next)=>{
        try{
            const student = new Student(req.body)
            const result = await Student.save();
            res.send(result)

        }catch (error) {
            console.log
        }
    },
    getStudent:async(req,res, next)=>{
        try{
            const result = await Student.find()
            res.send(result)
        }
            catch(error){
                console.log(error.message);
            }
    },
    getAllStudents:async(req,res, next)=>{
        try{
            const result = await Student.find()
            res.send(results)
        }
            catch(error){
                console.log(error.message);
            }
    },
    UpdateStudent:async(req,res, next)=>{
        try{
            const result = await Student.find()
            res.send(results)
        }
            catch(error){
                console.log(error.message);
            }
    },
    DeleteStudent :async(req,res, next)=>{
        try{
            const result = await Student.find()
            res.send(results)
        }
            catch(error){
                console.log(error.message);
            }
    }
}