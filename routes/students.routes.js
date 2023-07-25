const express =require('express');
const Student = require('../models/student');
const { getStudent } = require('../controllers/student.controller');
const routes = express.Router();
routes.get('/',getStudent);
routes.get('/:id',async(req,res, next)=>{
    const id = req.params.id;
    try{
        const student = await Student.findById(id)
        res.send(Student)
    }
    catch(error){
        console.log(error.message);
    }
})
routes.post('/students',(req,res)=>{
    res.send({type:'post request'});
});
routes.put('/students/:Id',(req,res)=>{
    res.send({type:'update request'});
});
routes.delete('/students:/Id',(req,res)=>{
    res.send({type:'delete  request'});
});

routes.post('/',async(req,res,next)=>{
    try{
        const student = new Student(req.body)
        const result = await student.save();
        res.send(result)

    }catch (error){
        console.log(error.message);
    }
})
routes.patch('/:id',async(req,res,next)=>{
    try{
        const id =req.params.id;
        const update= req.body;
        const result = await Student.findByIdAndUpdate(Id,update.this.options)
    }
    catch(error){
        console.log(error.message)
    }
})
module.exports=routes;