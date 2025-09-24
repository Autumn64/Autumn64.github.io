/*
Autumn64's pages
Copyright (C) 2023-2025 Mónica Gómez (Autumn64)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0

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
        <a href="https://jointhefediverse.net/" target="_blank"><img src="./res/badges/fediverse.png"></a>
        <a href="https://anarchistfaq.org/afaq/index.html" target="_blank"><img src="./res/badges/anarcotrans.png"></a>
        <a href="https://hillhouse.neocities.org/journal/notes/palestine" target="_blank"><img src="./res/badges/palestinebadge.png"></a>
        <a href="https://lernu.net/" target="_blank"><img src="./res/badges/esperanto.png"></a>
    </section>
    <section id="notbyai">
        <img src="./res/notbyai/en.svg">
        <img src="./res/notbyai/es.svg">
        <img src="./res/notbyai/eo.svg">
        <img src="./res/notbyai/kr.svg">
    </section>
    <p data-i18n="footer.p">Autumn64 &copy; 2023-${new Date().getFullYear()}. <a href="https://codeberg.org/Autumn64/pages" target="_blank">Source code</a></p>`;
}

// @license-end