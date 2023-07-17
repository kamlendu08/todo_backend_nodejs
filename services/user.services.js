const usermodel = require('../model/user.model');
const UserModel = usermodel.user;
const jwt = require('jsonwebtoken');
class UserService{
    static async registerUser(email,password){
        const user = new UserModel({email,password});
        try{
            await user.save();
            console.log(user);
            return user;

        }catch(err){
            throw err;
        }
    }

    static async checkuser(email){
        try{
           return await UserModel.findOne({"email":email});
        }catch(err){
            throw err;
        }
    }
    static async generateToken(tokenData,secretKey,jwt_expire){
        return jwt.sign(tokenData,secretKey,{expiresIn:jwt_expire});
    }
}
module.exports = UserService;