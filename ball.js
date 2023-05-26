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

function changeUser(){
    user=""
    getperson();
}

function doFunction(){
    var mess = document.getElementById("message").value;
    var chatt = document.getElementById('chat');
    if(mess.trim() != "" && mess != null){
        var randElement = responses[Math.floor(Math.random() * responses.length)];
        document.getElementById("chat").innerHTML += "<br>" + person + ": " + mess;
        setTimeout(function() {document.getElementById("chat").innerHTML += "<br>MOONSTAR: " + randElement; chatt.scrollTop = chatt.scrollHeight;}, 1000);
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