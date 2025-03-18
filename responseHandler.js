const pe = require('parse-error');

const to = (promise)=>{
    return promise
    .then((data)=>{
        return [null,data];
    }).catch((err)=>{
        return [pe(err)];
    });
};
module.exports.to = to;

const ReS = function (res,data,code){
    const response={
        success:true,
        data:data.data?data.data:null,
        message:data.message?data.message:null,
        code:code,
    };
    return res.json(response);
};

module.exports.ReS=ReS;

const ReE = function (res,data,code){
    const response={
        success:false,
        data:data.data?data.data:null,
        error:{
            code:code || ' No error code ',
            message:data.message?data.message:null,
        }
    };
    return res.json(response);
};
module.exports.ReE=ReE;