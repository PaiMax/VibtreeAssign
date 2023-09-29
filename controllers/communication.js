require('dotenv').config({path:"../.env"});

const accSid=process.env.TWILIO_ACC_ID;
const token=process.env.TWILIO_TOKEN;
const client=require('twilio')(accSid,token);

exports.smsSend=(req,res)=>{
    console.log("to========================"+req.body.to);
    const number=req.body.to;
    
    client.messages 
    .create({ 
       body: 'helllo', 
       from: '+13343779690', 
        
       to: number
     }) 
    .then(message => {console.log(message.sid);
      
      res.status(200).send({message:'sms sent'})})
    .catch(err=>{
      console.log(err);
      res.status(400).send({message:'NOt a valid number'});
    })
    
    




}
exports.call=(req,res)=>{
  const number=req.body.to;
  
  client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: number,
         from: '+13343779690'
       })
      .then(call => {console.log(call.sid);
        res.status(200).send({message:'sms sent'})})
      .catch(err=>{
        console.log(err);
        res.status(400).send({message:'NOt a valid number'});
      });

}
exports.whatsapp=(req,res)=>{
  const number=req.body.to;

  client.messages
      .create({
         from: 'whatsapp:+13343779690',
         body: 'Your appointment is coming up on July 21 at 3PM',
         to: `whatsapp:${number}`
       })
      
      .then(message => {console.log(message.sid);
      
        res.status(200).send({message:'sms sent'})})
      .catch(err=>{
        console.log(err);
        res.status(400).send({message:'NOt a valid number'});
      })
  
}

