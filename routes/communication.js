const express=require('express');
const router=express.Router();


const commController=require('../controllers/communication');
router.post('/sms',commController.smsSend);
router.post('/call',commController.call);
router.post('/whatsapp',commController.whatsapp);







module.exports=router;