const express=require('express');
const dotenv=require('dotenv');
const { CONFIG } =require('./config/config');
const router=require('./routes/router');

dotenv.config();


const app=express();

app.use(express.json());

const models=require('./models');

models.sequelize.authenticate().then(()=>{
    console.log("Connected to sql database :",CONFIG.DB_NAME);
}).catch((err)=>{
    console.log("Unable to connect to sql database",CONFIG.DB_NAME,err);
});
models.sequelize.sync({alter:true},app.listen(CONFIG.PORT, (err) => {
    if (err) {
      throw err;
    }
    console.log("The server is running in port", CONFIG.PORT);
  })
  );

  app.use('/',router);



