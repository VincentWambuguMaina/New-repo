const mongoose = require('mongoose');
const schema = mongoose.Schema;
const studentSchema = new schema({
    firstname:{
        type: String,
        required:[true,'Firstname is required']
    },
    Lastname:{
        type: String,
        required: [true,'Lastnsame is required']
    },
    gender:{
        type: String
    }
});

const Student = mongoose.model('student', studentSchema);
module.exports = Student;