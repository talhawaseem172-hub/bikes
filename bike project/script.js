function sendMessage(){
let input = document.getElementById("userInput");
let message = input.value;
if(message=="")
{
    return;
}
let chat = document.getElementById("chatBody");
// User message
chat.innerHTML += `
<p class="user">
${message}
</p>
`;
let reply="";
if(message.toLowerCase().includes("price"))
{
reply="Our bikes start from $75,000 to $155,000.";
}
else if(message.toLowerCase().includes("kawasaki"))
{
reply="Kawasaki Ninja H2R has a 998cc engine and amazing speed.";
}
else if(message.toLowerCase().includes("yamaha"))
{
reply="Yamaha R1 is a powerful 998cc superbike.";
}
else if(message.toLowerCase().includes("bmw"))
{
reply="BMW S1000RR is one of the fastest premium bikes.";
}
else
{
reply="Sorry, I don't understand. Please ask about bikes, price or models.";
}
// Bot reply
setTimeout(()=>{
chat.innerHTML += `
<p class="bot">
${reply}
</p>
`;
chat.scrollTop=chat.scrollHeight;
},500);
input.value="";
}