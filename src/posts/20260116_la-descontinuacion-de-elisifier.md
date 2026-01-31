---
layout: post.njk
title: 'Cerrando ciclos: La descontinuación de "Elisifier"'
date: 2026-01-16
permalink: "/blog/la-descontinuacion-de-elisifier/"
featured: "/static/posts/20260116_la-descontinuacion-de-elisifier/featured.png"
tags: post
---

Comencé el proyecto "[Elisifier](https://codeberg.org/Autumn64/Elisifier)" en junio de 2025 como respuesta a una necesidad que surgió a raíz de que me propuse abandonar las plataformas de _streaming_. En ese tiempo, la manera en la que escuchaba música era mediante listas de reproducción (y no acostumbraba escuchar álbumes completos), y estaba buscando la forma de descargar las _playlists_ que tenía en YouTube Music, de modo que pudiera replicar la misma estructura en local. Así, hice un _script_ en Bash que descarga música junto a sus metadatos mediante `yt-dlp`, y que con `kid3-cli` agrega las correspondientes portadas.

En un principio me funcionó de maravilla, y entonces quise compartir esto con la comunidad, aunque con una GUI para que fuera más fácil de usar y para que no necesitara que cada usuario instalara el entorno necesario en su computadora. Era como una suerte de SaaS libre que hacía todo el trabajo sucio y entregaba _en bandeja de plata_ la música, lista para reproducirse.

Al inicio desarrollé a Elisifier en Streamlit —porque quería que quedara rápido y eso era lo único que realmente sabía usar—, pero luego la migré a Flask en el _backend_, y Bootstrap en el _frontend_. En un inicio estaba muy emocionada por el proyecto, pero desde entonces ocurrieron las siguientes 3 situaciones:

1. Prácticamente _nadie_ utiliza el servicio. Yo soy la persona que más lo ha utilizado, y en todo caso para mí es más práctico simplemente usar el _script_ que ya tenía hecho. Estoy consciente de que Elisifier no descarga con la calidad máxima, ya que mismo YouTube almacena las canciones con una calidad más bien inferior, y pienso que eso, entre otras cosas, pudo haber influido mucho en esta falta de apoyo por parte de la comunidad.

2. El haber [migrado mis servicios de la Raspberry Pi a la VPS](https://mast.lat/@autumn64/115268111998616743) significó un aumento considerable en el tiempo y el esfuerzo que debo emplear en el mantenimiento del servidor, y esto afectó sobre todo a Redlib y a Elisifier. Cuando Elisifier funcionaba desde la red de mi casa YouTube prácticamente lo dejaba pasar sin problema, pero la cosa deja de ser tan amigable cuando se trata de una de las miles de VPS de algún Datacenter en Alemania. YT se volvió _extremadamente_ agresivo con sus CAPTCHAs y, si bien la manera que propone `yt-dlp` para evadir este bloqueo es [mediante cookies](https://github.com/yt-dlp/yt-dlp/wiki/FAQ#how-do-i-pass-cookies-to-yt-dlp), este método sólo era efectivo durante algunas horas —ni siquiera un día—, y es muy pesado tener que estar constantemente descargando las cookies de mi navegador para enviarlas al servidor.

3. Levanté una instancia privada de Navidrome, y por ende empecé a buscar álbumes completos en lugar de sólamente _playlists_. Aprendí a copiar música de los CDs originales, y también comencé a utilizar sitios como SoulSeek o Qobuz, lo que provocó que ya ni siquiera yo misma utilice mi servicio. Conseguí prácticamente la totalidad de mi biblioteca de música actual mediante métodos que no involucran ni a `yt-dlp`, ni mucho menos a Elisifier, y parece que eso seguirá siendo así a largo plazo.

Por causa de todo esto, Elisifier dejó de ser un proyecto que me emocionara, y terminó convirtiéndose en una carga. Esto me ha llevado a tomar la decisión de descontinuar el proyecto desde este momento, y del mismo modo daré de baja la instancia que estuve manteniendo los últimos meses.

Lo que yo me llevo de esto son los aprendizajes y la práctica tan grandes que adquirí: comunicación entre procesos, gestión de archivos desde Python, programación concurrente, e incluso manejo de WebSockets. Es innegable que he aprendido mucho con este proyecto, y me siento con la confianza de que podré aplicar estos nuevos conocimientos cuando sean necesarios en algún proyecto futuro. Pero mientras tanto, me parece que lo mejor será cerrar este capítulo, y dejar espacio para nuevas oportunidades que puedan ser más útiles o beneficiosas para la comunidad.

Quiero finalizar agradeciendo a la comunidad por el apoyo que he recibido hasta ahora. Ha sido un camino bastante largo, pero aún me falta mucho por hacer y aún hay muchas oportunidades para las que deseo estar lista. ¡Espero seguir contando con ustedes para proyectos futuros!
