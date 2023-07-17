const userservice = require('../services/user.services');

exports.register = async(req,res,next) =>{
    try{
         const {email,password} = req.body;
         const successRes = await userservice.registerUser(email,password);
         res.json({status:true,"success":"successfully registrated"});
    }catch(err){
        throw err;
    }
}

exports.login = async (req,res,next) => {
    try{
         const {email,password} = req.body;
         const user = await userservice.checkuser(email);
         if(!user){
            throw new Error('user dont exist');
            // console.log('no user exist');
            // res.status(404).json({"res":"no user found"});
            // return ;
         }
         const isMatch = await user.comparePassword(password);
         if(isMatch == false){
            throw new Error('Password InValid');
         }
         let tokenData = {_id:user._id,email:user.email};

         const token = await userservice.generateToken(tokenData,"secretKey",'1h');

         res.status(200).json({status:true,token:token});
         console.log(user);

    }catch(err){
        throw err;
    }
}