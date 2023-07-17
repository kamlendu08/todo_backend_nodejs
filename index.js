const app = require('./app');
const db = require('./config/db');
const model = require('./model/user.model');
const User = model.user;
const mongoose = require('mongoose');


main().catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/todo');
    console.log('database connected');
}

const port = 3000;
// app.get('/',(req,res)=>{
//    res.status(201).json({"status":"this app is running"});
// })
// app.post('/', async(req,res)=>{
//     const user = new User(req.body);
//     try{
//         await user.save();
//         console.log(user);
//         res.status(201).json(user);
//     }catch(err){
//         console.log(err);
//         res.status(401).json(err);
//     }
    
// })

app.listen(port,()=>{
    console.log(`Server Listening on Port http://localhost:${port}`);

})