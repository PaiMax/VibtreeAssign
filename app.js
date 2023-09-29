const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const cors=require('cors');
const commRoutes=require('./routes/communication');


app.use(cors());
app.use(bodyParser.json({extended:false}));
app.use('/',commRoutes);


app.listen(5000,()=>{console.log('server is running')});