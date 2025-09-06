document.addEventListener("DOMContentLoaded", () =>{
    setMenuNavigation();
    setFooter();
    setLanguage(location.href.split("/").slice(-1)[0].replace(".html", ""));
});

const setMenuNavigation = () =>{
    document.getElementById("main-nav").innerHTML = 
    `<a href="about.html" data-i18n="nav.about">About</a>
    <a href="donate.html" data-i18n="nav.donate">Donate</a>
    <a href="contact.html" data-i18n="nav.contact">Contact</a>`;

    document.getElementById("lang").addEventListener("change", (e)=>{
    localStorage.setItem('language', e.target.value);
    setLanguage(location.href.split("/").slice(-1)[0].replace(".html", ""));
});
}

const setFooter = () =>{
    document.getElementsByTagName("footer")[0].innerHTML = 
    `<section id="badges">
        <a href="https://www.fsf.org/" target="_blank"><img src="./res/badges/fsf_member.png"></a>
        <a href="https://www.gnu.org/" target="_blank"><img src="./res/badges/gnu.png"></a>
        <a href="https://www.bittorrent.org/" target="_blank"><img src="./res/badges/bittorrent.jpg"></a>
        <a href="https://www.torproject.org/" target="_blank"><img src="./res/badges/tor.png"></a>
        <a href="http://stopcpozlbfa4s4fuhisthyaivzbewe2rihsadarlkvqv5gaphkrvvyd.onion/" target="_blank"><img src="./res/badges/stopcp.png"></a>
        <a href="https://hillhouse.neocities.org/journal/notes/palestine" target="_blank"><img src="./res/badges/palestinebadge.png"></a>
    </section>
    <section id="notbyai">
        <img src="./res/notbyai/en.svg">
        <img src="./res/notbyai/es.svg">
        <img src="./res/notbyai/eo.svg">
        <img src="./res/notbyai/kr.svg">
    </section>
    <p data-i18n="footer.p">Autumn64 &copy; 2023-2025. <a href="https://codeberg.org/Autumn64/pages" target="_blank">Source code</a></p>`;
}