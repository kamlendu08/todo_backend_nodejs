const todomodel = require('../model/todo.model');
const todo = todomodel.todo;

class TodoServices {
    static async createTodo(userId, title, desc) {
        try {
            const createTodo = new todo({ userId, title, desc });
            return await createTodo.save();
        } catch (err) {
            console.log(err);
        }
    }
    static async getTodoData(userId){
        try{
            const alltodo = await todo.find({userId});
            console.log(alltodo);
            return alltodo;
        }catch(err){
            console.log(err);
        }
    }
}

module.exports = TodoServices;