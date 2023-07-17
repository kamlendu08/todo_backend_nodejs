const TodoServices = require('../services/todo.services');

exports.todocontroller = async (req,res,next) =>{
    try{
        const {userId,title,desc} = req.body;
        let todo = await TodoServices.createTodo(userId,title,desc);
        console.log(todo);
        // res.status(201).json(todo);
        res.status(201).json({status:true,success:todo});
    }catch(err){next(err);}
}

exports.getUserTodo =async (req,res,next) => {
    try{
        const {userId} = req.body;
        const todo = await TodoServices.getTodoData(userId);
        res.json({status:true,success:todo});
    }catch(err){
        throw err;
    }
}