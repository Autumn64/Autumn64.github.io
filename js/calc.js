/**
 * 
 * @source: https://www.autumn64.xyz/js/calc.js
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

buttons1 = document.getElementsByClassName('button');
buttons2 = document.getElementsByClassName('button2');
buttons3 = document.getElementsByClassName('button3');
bequal = document.querySelector('.bequal');

var clear = false; //Clear the screen
var temp = 0; //Temporal value

function write(event){
    let display = document.getElementById('display');
    if (display.innerHTML === "&nbsp;" || clear === true){
        display.innerHTML = "";
        clear = false;
    }
    switch(event.target.innerHTML){
        case 'x':
            display.innerHTML += "*";
            break;
        case '÷':
            display.innerHTML += "/";
            break;
        case 'π':
            display.innerHTML += "(3.14159)";
            break;
        case '°':
            display.innerHTML += "deg";
            break;
        case '1/x':
            if (display.innerHTML === ""){
                display.innerHTML = "1/(";
            }else{
                display.innerHTML = `1/(${display.innerHTML})`;
            }
            break;
        case 'ANS':
            display.innerHTML += `${temp}`; //Get the value stores
            break;
        default:
            display.innerHTML += event.target.innerHTML;
            break;
    }
    display.scrollLeft = display.scrollWidth;
}

function cdisplay(event){
    let display = document.getElementById('display');
    if (event.target.classList[1] === 'clear'){ //Clear will clear the screen
        display.innerHTML = "&nbsp;";
    }else{ //Back will just remove one element
        if (display.innerHTML.length > 1 && clear === false){ //1 and 0 aren't greater than 1
            display.innerHTML = display.innerHTML.slice(0, -1);
            display.scrollLeft = display.scrollWidth;
        }else{
            display.innerHTML = "&nbsp;";
        }
    }
}

function writespecial(event){
    let display = document.getElementById('display');
    if (display.innerHTML === "&nbsp;" || clear === true){
        display.innerHTML = "";
        clear = false;
    }
    if(event.target.innerHTML === "√"){
        display.innerHTML += "sqrt(";
    }else{
        display.innerHTML += `${event.target.innerHTML}(`;
    }
    display.scrollLeft = display.scrollWidth;
}

function evaluate(){
    let display = document.getElementById('display');
    if (display.innerHTML === "&nbsp;"){
        display.innerHTML = "0";
    }
    try{
        let result = math.evaluate(display.innerHTML);
        display.innerHTML = `${result}`;
        temp = result;
    }catch({ name }){
        display.innerHTML = name;
    }
    clear = true;
    display.scrollLeft = display.scrollWidth;
}

for (let i = 0; i < buttons1.length; i++){
    buttons1[i].addEventListener('click', write);
}
for (let i = 0; i < buttons2.length; i++){
    buttons2[i].addEventListener('click', cdisplay);
}

for (let i = 0; i < buttons3.length; i++){
    buttons3[i].addEventListener('click', writespecial);
}

bequal.addEventListener('click', evaluate);