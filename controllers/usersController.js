const Users = require('../models').Users;
const {ReS,ReE, to }=require('../responseHandler');
const { SUCCESS,ERROR } =require('../constants/messages');

const register = async (req,res)=>{
    let err,user;
    [err,user]=await to(Users.create(req.body));
    console.log(req.body);
    if(err){
        console.log(err);
        return ReE(res,{message:ERROR.INVALID_CREDENTIALS},500);
    }
        return ReS(res,{message:SUCCESS.CREATE_USER},200)
}
module.exports.register=register;


