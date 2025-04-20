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
let mode = "";

document.addEventListener("DOMContentLoaded", () =>{
    if (localStorage.getItem('darkmode')) {
        document.body.classList.add('darkmode');
        mode = "-dark";
    }
    if (location.href.split("/").slice(-1)[0] === "index.html" || location.href.split("/").slice(-1)[0] === "") aiBadges();
    setLanguage(location.href.split("/").slice(-1)[0].replace(".html", ""));
});

document.getElementById("theme").addEventListener("click", (e) =>{
    e.preventDefault();

    if(!document.body.classList.contains("darkmode")){
        document.body.classList.add("darkmode");
        localStorage.setItem("darkmode", true);
        mode = "-dark";
    }else {
        document.body.classList.remove("darkmode");
        localStorage.removeItem("darkmode");
        mode = "";
    }
    if (location.href.split("/").slice(-1)[0] === "index.html" || location.href.split("/").slice(-1)[0] === "") aiBadges();
});

document.getElementById("lang").addEventListener("change", (e)=>{
    localStorage.setItem('language', e.target.value);
    setLanguage(location.href.split("/").slice(-1)[0].replace(".html", ""));
});

const aiBadges = () =>{
    document.getElementById("notbyai-en").src = `res/notbyai-en${mode}.svg`;
    document.getElementById("notbyai-es").src = `res/notbyai-es${mode}.svg`;
    document.getElementById("notbyai-eo").src = `res/notbyai-eo${mode}.svg`;
}


// @license-end