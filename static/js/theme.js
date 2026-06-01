// Autumn64's pages
// Copyright (C) 2023-2026 Mónica Gómez (Autumn64)
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

// Este código guarda el tema escogido por el usuario, aunque si selecciona el tema oscuro entonces la configuración guardada se borra ya que ese es el tema predeterminado. El esquema de colores cambia gracias a la configuración del CSS.

const selectedTheme = document.getElementById("selected_theme");

selectedTheme.addEventListener('change', () =>{
  if (selectedTheme.value === "light"){
    document.documentElement.dataset.theme = "light";
    localStorage.setItem("theme", "light");
    return;
  } else if (selectedTheme.value === "dark"){
    document.documentElement.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
    return;
  }
  // Si el código llega hasta acá es porque se seleccionó la opción del tema automático.
  localStorage.removeItem("theme");
  location.reload();
});
