const express= require("express");
require('dotenv').config();
require('./helpers/init_mongoDB')
const studentRoutes =require('./routes/students.routes')
const authRoutes =require('./routes/auth.route')
const app =express();
app.use(express.json())
app.use("/students",studentRoutes);
app.use('/auth',authRoutes);



app.use((req,res,next)=>{
    const err =new Error("not found");
    err.status=404;
    next(err)
}
)
//handling 404 error
app.use((err,req,res,next)=>{
    res.status(err.status || 500)
        res.send({
            error:{
               status: err.status || 500,
               message: err.message
            }
        })
})

//Error handler
app.use((err, req, res, next)=>{
    res.status(err.status || 500,
    res.send({
        error:{
            status:err.status || 500,
            message: err.message
        }
    }))
})

app.listen(process.env.port || 4000,() =>{
    console.log("now listening on :http://localhost:4000");
});