---
layout: page.njk
title: Configuración
---

<style>
.buttons {
    display: none;
}
#theme-settings {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 500px;
    margin: auto;
}

#selected_theme {
  padding: 10px 20px;
  margin: 10px;
  background-color: var(--bg-color-2);
  color: var(--fg-color-1);
  font-family: "Sour Gummy", sans-serif;
  font-size: 20px;
  border-radius: 10px;
  border: none;
    cursor: var(--hachiware-pointer), auto;
  outline: 3px var(--border-color-normal) solid;
}

#selected_theme:hover {
  outline: 3px var(--border-color-hover) solid;
}

#selected_theme:active {
  outline: 3px var(--border-color-active) solid;
}
</style>

# Configuración

<div id="theme-settings">
<h2>Tema</h2>
<select title="Selector de tema" id="selected_theme">
<option value="auto" selected>Automático</option>
<option value="light">Claro</option>
<option value="dark">Oscuro</option>
</select>
</div>

## Acerca de

Este sitio web fue hecho a base de puro HTML y CSS, y su contenido se genera mediante <a href="https://www.11ty.dev/" target="_blank">Eleventy</a>, un generador de sitios web estáticos basado en Node.JS.

El único código JavaScript que se ejecuta en este sitio sirve para habilitar la funcionalidad de algunos botones, además de gestionar el tema visual del sitio. Todo lo demás, incluyendo animaciones, funcionan exclusivamente a base de HTML y CSS. Si tienes la ejecución de JavaScript deshabilitada, entonces no funcionarán el botón de volver atrás ni el de ir hasta arriba, ni la configuración de temas, pero todo lo demás debería funcionar sin problema alguno.

Es evidente que el diseño de este sitio está inspirado en la interfaz de usuario del menú principal de la Switch 2, aunque también incorpora muchos elementos de los diseños que tuvo este sitio en el pasado. Sin embargo, no hay ninguna intención de copiar ni plagiar a la Switch 2, y cualquier similitud con su interfaz gráfica es pura coincidencia. 

Este sitio web podría no funcionar correctamente si usas un navegador muy antiguo o desactualizado, cosa que es muy poco probable si eres un usuario común y corriente.

<script src="/static/js/theme.js"></script>
<script>
const themeSelect = document.getElementById("selected_theme");
themeSelect.value = localStorage.getItem('theme') || "auto";
</script>
