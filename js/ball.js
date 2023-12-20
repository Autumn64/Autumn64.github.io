/**
 * 
 * @source: https://www.autumn64.xyz/js/ball.js
 * @licstart  The following is the entire license notice for the 
 *  JavaScript code in this page.
 * 
 * Copyright (c) 2023, Mónica Nayely Flores Gómez (Autumn64)
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 * 
*/

let person;
let user = document.cookie;

xhr = new XMLHttpRequest();
xhr.open('GET', './js/ball.json', false);
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
        if (person === null) window.location.href = '../autumnslab.html';
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