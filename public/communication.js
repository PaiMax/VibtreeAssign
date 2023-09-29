


document.getElementById('smsbtn').addEventListener('click',sendSms);
async function sendSms(){
const number=document.getElementById('sms').value;
console.log(number);
const obj={to:number};
const response=await axios.post(' http://localhost:5000/sms ',obj);
console.log(response.message);



}

document.getElementById('callbtn').addEventListener('click',call);
async function call(){
    const number=document.getElementById('call').value;
console.log(number);
const obj={to:number};
const response=await axios.post(' http://localhost:5000/call',obj);
console.log(response.message);

}

document.getElementById('whatsappbtn').addEventListener('click',whatsapp);
async function whatsapp(){
    console.log('in wahtsapp');
const number=document.getElementById('whatsapp').value;
const obj={to:number};
const response=await axios.post(' http://localhost:5000/whatsapp',obj);
console.log(response.message);

}


