let person;
let user = document.cookie;

xhr = new XMLHttpRequest();
xhr.open('GET', './ball.json', false);
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
            }while(person.trim() === "" || person === null);
            var expiration_date = new Date();
            expiration_date.setYear (expiration_date.getFullYear () + 1);
            expiration_date = expiration_date.toGMTString();
            var cookie_string = "username=" + person + "; path=/; expires=" + expiration_date;
            document.cookie = cookie_string;
        }
    }catch(e){
        getperson();
    }
}

function saveMessage(message){ //Save the chat history
    var chath = localStorage.getItem("chatHistory");
    var chata = chath ? JSON.parse(chath) : []; //Checks if chath returned null, if so, it creates a blank array; if not, it parses it to JSON.
    chata.push(message);
    if(chata.length > 50){ //We can't store the whole goddamn chat history in the local storage
        chata.shift(); //Delete the oldest message
    }
    localStorage.setItem("chatHistory", JSON.stringify(chata)); //Saves the array to the local storage with the key "chatHistory"
}

function displayHistory(){
    var chath = localStorage.getItem("chatHistory");
    if (chath && chath.trim() !== "") {
        var chatt = document.getElementById("chat");
        var chata = JSON.parse(chath);
        chatt.innerHTML = ""; //Cleans the chat if there were any unwanted stuff
        chata.forEach(function(message){
           chatt.innerHTML += message;
        });
        chatt.innerHTML += "<center><h3>This is where your new conversation with MOONSTAR's 8ball begins.</h3></center>";
        chatt.scrollTop = chatt.scrollHeight;
    }
}

function choose(){
    var choice = window.confirm("Choose an option:\n\n  - Change username.\n  - Clear chat history.")
    if(choice){ // If user clicks accept
        user="";
        getperson();
    }else{ // If user clicks cancel
        localStorage.removeItem("chatHistory");
        chatt = document.getElementById("chat");
        chatt.innerHTML = "";
        chatt.innerHTML += "<center><h3>This is where your chat with MOONSTAR's 8ball begins.</h3></center>";
    }
}

function doFunction(){
    var mess = document.getElementById("message").value;
    var chatt = document.getElementById('chat');
    if(mess.trim() != "" && mess != null){
        var randElement = responses[Math.floor(Math.random() * responses.length)];
        var message = "<br>" + person + ": " + mess
        document.getElementById("chat").innerHTML += message;
        saveMessage(message); //Saves the message to the local storage
        setTimeout(function() {
            var respd = "<br>MOONSTAR: " + randElement
            document.getElementById("chat").innerHTML += respd;
            saveMessage(respd);
            chatt.scrollTop = chatt.scrollHeight;
        }, 1000);
        chatt.scrollTop = chatt.scrollHeight;
        document.getElementById('message').value = "";
    }
}

function clickPress(event) {
    if (event.key == "Enter") {
        doFunction();
    }
}

getperson();
displayHistory();