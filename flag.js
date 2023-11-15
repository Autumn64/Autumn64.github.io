var xhr = new XMLHttpRequest(); //Para pedir los datos del JSON
xhr.open('GET', './flag.json', false);  // Configura la solicitud como síncrona
xhr.send();

var flags = JSON.parse(xhr.responseText);
const countries = flags.countries;
const countriesdic = flags.countriesdic;

var responded = false;
var ii = 4; //Seconds
var timeout = false;
var randflag = countries[Math.floor(Math.random() * countries.length)];

let answers = [
    countries[Math.floor(Math.random() * countries.length)],
    randflag,
    countries[Math.floor(Math.random() * countries.length)],
    countries[Math.floor(Math.random() * countries.length)]
]

let answerss = answers
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

document.getElementById("flag").innerHTML += '<img src="https://flagpedia.net/data/flags/w702/' + countriesdic[randflag] + '.webp">';
document.getElementsByName("bttn")[0].innerHTML += answerss[0];
document.getElementsByName("bttn")[1].innerHTML += answerss[1];
document.getElementsByName("bttn")[2].innerHTML += answerss[2];
document.getElementsByName("bttn")[3].innerHTML += answerss[3];

function check(btn){
    responded = true;
    let correct;
    clearInterval(count);
    if(btn.innerHTML === randflag){
        correct = true;
        document.getElementById("result").innerHTML += `<h3>You got it right! The correct answer is: <b>${randflag}</b>.</h3>`;
    }else{
        correct = false;
        document.getElementById("result").innerHTML += `<h3>Whoops! You got it wrong. The correct answer is: <b>${randflag}</b>.</h3>`;
    }
    createrb();
    for(let i = 0; i < 4; i++){
        document.getElementsByName("bttn")[i].disabled = true;
        if (correct === false){
            if (document.getElementsByName("bttn")[i].innerHTML === btn.innerHTML){
                document.getElementsByName("bttn")[i].style.backgroundColor = "#FFA1A1";
            }else if (document.getElementsByName("bttn")[i].innerHTML === randflag){
                document.getElementsByName("bttn")[i].style.backgroundColor = "#A1EB90";
            }else{
                document.getElementsByName("bttn")[i].style.backgroundColor = "#C7B894";
            }
        }
        else{
            if (document.getElementsByName("bttn")[i].innerHTML === btn.innerHTML){
                document.getElementsByName("bttn")[i].style.backgroundColor = "#A1EB90";
            }else{
                document.getElementsByName("bttn")[i].style.backgroundColor = "#C7B894";
            }
        }
    }
}

function createrb(){
    var reboot = document.createElement("button");
    reboot.className = "button reboot";
    reboot.innerHTML = "Try Again";
    document.getElementById("result").appendChild(reboot);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    reboot.addEventListener("click", function(){
        if(this.className === "button reboot"){
            history.go(0);
        }
    });
}

var count = setInterval(() => { //It'll be executed each second until the timer gets to zero.
    if (ii === 0){
        timeout = true
        clearInterval(count);
    }
    document.getElementById('count').innerHTML = `<br>You have ${ii} seconds to answer.`;
    ii--; //Reduce timer by one.
    if(timeout === true && responded === false){
        for(let i = 0; i < 4; i++){
            document.getElementsByName("bttn")[i].disabled = true;
            document.getElementsByName("bttn")[i].style.backgroundColor = "#C7B894";
        }
        document.getElementById("result").innerHTML += `<h3>Whoops! Time is up. Correct answer is: ${randflag}</h3>`;
        createrb();
    }
}, 1000);