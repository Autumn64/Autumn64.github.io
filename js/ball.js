// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0

let person;
let user = document.cookie;

xhr = new XMLHttpRequest();
xhr.open('GET', '../../js/ball.json', false);
xhr.send();
var json = JSON.parse(xhr.responseText);
var responses = json.responses;

function getperson(){
    try{
        if(user != ""){
            person = user.split(";")[0].substring(9)
        }else{
            do{
                person = prompt("Please enter a username.");
            }while(person.trim() === "");
            let expiration_date = new Date();
            expiration_date.setYear (expiration_date.getFullYear () + 1);
            expiration_date = expiration_date.toGMTString();
            let cookie_string = `username=${person}; path=/; expires=${expiration_date}`;
            document.cookie = cookie_string;
        }
    }catch(e){
        if (person === null) window.location.href = '../../index.html';
    }
}

function saveMessage(message){ //Save the chat history
    let chath = localStorage.getItem("chatHistory");
    let chata = chath ? JSON.parse(chath) : []; //Checks if chath returned null, if so, it creates a blank array; if not, it parses it to JSON.
    chata.push(message);
    if(chata.length > 50){ //We can't store the whole goddamn chat history in the local storage
        chata.shift(); //Delete the oldest message
    }
    localStorage.setItem("chatHistory", JSON.stringify(chata)); //Saves the array to the local storage with the key "chatHistory"
}

function displayHistory(){
    let chath = localStorage.getItem("chatHistory");
    if (chath && chath.trim() !== "") {
        let chatt = document.getElementById("chat");
        let chata = JSON.parse(chath);
        chatt.innerHTML = ""; //Cleans the chat if there were any unwanted stuff
        chata.forEach(function(message){
           chatt.innerHTML += message;
        });
        chatt.innerHTML += "<center><h3>This is where your new conversation with MOONSTAR's 8ball begins.</h3></center>";
        chatt.scrollTop = chatt.scrollHeight;
    }
}

function choose(){
    let choice = window.confirm("Choose an option:\n\n  - Accept: Change username.\n  - Cancel: Clear chat history.")
    if(choice){ // If user clicks accept
        user="";
        document.cookie = document.cookie = 'username=; path=/; expires=Thu, 01-Jan-70 00:00:01 GMT;';
        getperson();
    }else{ // If user clicks cancel
        localStorage.removeItem("chatHistory");
        chatt = document.getElementById("chat");
        chatt.innerHTML = "";
        chatt.innerHTML += "<center><h3>This is where your chat with MOONSTAR's 8ball begins.</h3></center>";
    }
}

function doFunction(){
    let mess = document.getElementById("message").value;
    let chatt = document.getElementById('chat');
    if(mess.trim() !== "" && mess !== null){
        let randElement = responses[Math.floor(Math.random() * responses.length)];
        let message = `<br>${person}: ${mess}`;
        document.getElementById("chat").innerHTML += message;
        saveMessage(message); //Saves the message to the local storage
        setTimeout(function() {
            let respd = `<br>MOONSTAR: ${randElement}`;
            document.getElementById("chat").innerHTML += respd;
            saveMessage(respd);
            chatt.scrollTop = chatt.scrollHeight;
        }, 1000);
        chatt.scrollTop = chatt.scrollHeight;
        document.getElementById('message').value = "";
    }
}

function clickPress(event) {
    if (event.key === "Enter") {
        doFunction();
    }
}

getperson();
displayHistory();

// @license-end