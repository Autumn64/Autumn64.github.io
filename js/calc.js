// @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause

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

// @license-end