const mongoose = require('mongoose')



const uri = 'mongodb://127.0.0.1:27017/studentAPI';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Perform operations on the database
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

mongoose.connection.on('connected', ()=>{
    console.log('Mongoose connected to db');
})
mongoose.connection.on('error', (err)=>{
    console.log(err.message);
})
mongoose.connection.on('disconnected', ()=>{
    console.log('Mongoose connection is disconnected')
})

process.on('SIGNINT', async()=>{
    await mongoose.connection.close()
    process.exit(0)
})