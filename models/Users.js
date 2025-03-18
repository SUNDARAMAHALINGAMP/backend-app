const bcrypt=require('bcrypt');
const crypto=require('crypto')
module.exports = (sequelize,Datatypes)=>{
    const Model = sequelize.define( 'Users',{
        id:{
            type:Datatypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        name:{
          type:Datatypes.STRING,
          allowNull:false,  
        },
        email:{
            type:Datatypes.STRING,
            allowNull:false
        },
        password:{
            type:Datatypes.STRING,
            allowNull:false,
        },
        refreshtoken:{
            type:Datatypes.TEXT,
            defaultValue:null
        },
    },
       {tableName:'Users'});

       Model.beforeSave(async (Model)=>{
            if(Model.changed('password'))
            {
                let salt,hash;
                let rounds = crypto.randomInt(4,10);
                salt=await bcrypt.genSalt(rounds);
                hash=await bcrypt.hash(Model.password,salt);
                Model.password=hash;
            }
       });

    return Model;
}