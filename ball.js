let person;
let user = document.cookie;

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
    const responses = [
        "Ofc :)",
        "Yes.",
        "No.",
        "Omg yesss.",
        "Ofc what kind of question is that lmao.",
        "Yeah",
        "Nah.",
        "No XD.",
        "Yup.",
        "I don't think so.",
        "Haven't you realized it? lmao.",
        "There's no way it can be xD.",
        "There's no way it cannot be XD.",
        "Go ask them.",
        "Didn't get it, try again lmao.",
        "Sure.",
        "Wdym by that.",
        "Ew are you wahhabist.",
        "Viva Mexico carbones XD.",
        "I guess.",
        "Halal.",
        "Haraam.",
        "Be careful...",
        "Be careful about what you ask 'cause it can become true...",
        "Yesterday I bought it for you dw.",
        "Tomorrow.",
        "Imma tell you tomorrow.",
        "Respect trans rights, you punk >:(",
        "There's no LGB without the T you piece of shit /nbr",
        "Idk go ask them lmao.",
        "google.com",
        "bing.com",
        "yandex.com",
        "I told you yes.",
        "I told you no.",
        "Lemme ask Assim al Hakeem lmfao.",
        "Bruh I asked Assim al Hakeem and he <a href='https://en.wikipedia.org/wiki/Takfiri' target='_blank' rel='noopener noreferrer'>takfired</a> me :(",
        "._.XD",
        "Shut. /j /nsrs",
        "zao shang hao zhongguo xian zai wo you bing qilin wo hen xihuan bing qilin",
        "stop w this bullshit. Now. /lu",
        "xue hua piao piao bei feng xiao xiao tian di yi pian cang mang",
        "dansa med oss klappa era händer gör som vi gör ta några steg åt vänster lyssna och lär missa inte chansen nu är vi här med caramelldansen oa oa oa oooa",
        "oa oa oa oooa oooooa",
        "Hey, <a href='https://www.youtube.com/watch?v=PyoRdu-i0AQ' target='_blank' rel='noopener noreferrer'>here is a cool video</a> I think you might like :)",
        "Respect women's rights you bitch /nbr /t",
        "Die Erdoğan.",
        "Mexicanos al grito de guerra el acero a prestad y el bridón y retiemble en sus centros la tierra al sonoro rugir del cañón...",
        "...",
        "The worst thing could happen to STEM is Al-Khwarizmi. /hj",
        "x² - 1 = 0: ᕕ( ᐛ )ᕗ. x² + 1 = 0: (ﾉꐦ ⊙曲ఠ)ﾉ彡┻━┻",
        "早上好中国现在我有冰淇淋我很喜欢冰淇淋",
        "雪花飘飘北风潇潇天地一片苍茫",
        "雪花喵喵北风喵喵天地一片苍茫",
        "近前看其詳 上寫著 秦香蓮那三十二歲 那狀告當朝駙馬郎 他欺君王啊瞞皇上 那悔兒孫那狀子登朝 /ly",
        "putangina /j",
        "tremendo putanga que sos /j /nbr",
        "내가 뭘 어쩌겠니? 사랑이 그런 거지, 마음이 마음을 버린다는 게 다 이렇니? Baby don`t cry for me, 내게 잊으라고 말하지 마, 이별이 그래 다 그런 거니까~ /ly"
    ]
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