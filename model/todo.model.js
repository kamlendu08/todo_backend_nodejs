const mongoose = require('mongoose');
const usermodel = require('./user.model');
const user = usermodel.user;
const { Schema } = mongoose;

const todoSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: user.modelName
    },
     title:{
        type:String,
        required:true
     },
     desc:{
        type:String,
        required:true
     }
});

exports.todo = mongoose.model('todo',todoSchema);