/*
Autumn64's pages
Copyright (C) 2023-2026 Mónica Gómez (Autumn64)

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

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

document.addEventListener("DOMContentLoaded", setTheme);

darkThemeMq.addEventListener("change", e => {
    if (localStorage.getItem("darkmode") !== null) return;

    localStorage.setItem("darkmode", e.matches ? true : false);
    setTheme();
});

function setTheme() {
    const currentTheme = localStorage.getItem("darkmode") === "true" ? true : false;
    document.body.classList.toggle("darkmode", currentTheme);
    setFooter();
}

function changeTheme() {
    if (localStorage.getItem("darkmode") === "true") localStorage.setItem("darkmode", false);
    else localStorage.setItem("darkmode", true);
    
    setTheme();
}

// @license-end