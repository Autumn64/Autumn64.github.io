function setLanguage(page){
    if (page === "") page = "index";
    let language = "en";
    if(localStorage.getItem('language')) language = localStorage.getItem('language');
    document.getElementById("lang").value = language;
    fetch(`lang/${language}.json`).then(response => response.json())
    .then(langData =>{
        // nav element
        document.querySelectorAll('[data-i18n]').forEach(element =>{
            const key = element.getAttribute('data-i18n');
            if (!["nav.about", "nav.donate", "nav.contact"].includes(key)) return;
            element.innerHTML = langData["nav"][key];
        });

        // all other elements
        document.querySelectorAll('[data-i18n]').forEach(element =>{
            const key = element.getAttribute('data-i18n');
            if (["nav.about", "nav.donate", "nav.contact"].includes(key)) return;
            element.innerHTML = langData[page][key];
        });

        // footer element
        document.querySelectorAll('[data-i18n]').forEach(element =>{
            const key = element.getAttribute('data-i18n');
            if (key !== "footer.p") return;
            element.innerHTML = langData["footer"][key];
        });
    });
}