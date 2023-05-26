var xhr = new XMLHttpRequest(); //Para pedir los datos del JSON
xhr.open('GET', './flag.json', false);  // Configura la solicitud como síncrona
xhr.send();

var flags = JSON.parse(xhr.responseText);
const countries = flags.countries;
const countriesdic = flags.countriesdic;

var responded = false;
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
    if(btn.innerHTML == randflag){
        document.getElementById("result").innerHTML += "<h3>You got it right!</h3>";
        for(let i = 0; i < 4; i++){
            document.getElementsByName("bttn")[i].disabled = true;
            document.getElementsByName("bttn")[i].style.backgroundColor = "#C7B894";
        }
    }else{
        document.getElementById("result").innerHTML += "<h3>Whoops! You got it wrong. The correct answer is: <b>" + randflag + "</b>.</h3>";
        for(let i = 0; i < 4; i++){
            document.getElementsByName("bttn")[i].disabled = true;
            document.getElementsByName("bttn")[i].style.backgroundColor = "#C7B894";
        }
    }
    createrb();
}

function createrb(){
    var reboot = document.createElement("button");
    reboot.className = "button reboot";
    reboot.innerHTML = "Try Again";
    document.getElementById("result").appendChild(reboot);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    reboot.addEventListener("click", function(){
        if(this.className == "button reboot"){
            history.go(0);
        }
    });
}

setTimeout(function(){
    if(responded == false){
        for(let i = 0; i < 4; i++){
            document.getElementsByName("bttn")[i].disabled = true;
            document.getElementsByName("bttn")[i].style.backgroundColor = "#C7B894";
        }
        document.getElementById("result").innerHTML += "<h3>Whoops! Time is up. Correct answer is: " + randflag + "</h3>";
        createrb();
    }
}, 5000);