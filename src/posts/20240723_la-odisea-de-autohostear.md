---
layout: post.njk
title: La odisea de autohostear
date: 2024-07-23
permalink: "/blog/la-odisea-de-autohostear/"
featured: "/static/posts/20240723_la-odisea-de-autohostear/featured.webp"
activeLink: blog
tags: post
---

_Hostear_ es un anglicismo que significa "hospedar" o "alojar", y que se refiere al dispositivo (que puede ser una computadora, una Raspberry Pi, un _smartphone_, o lo que sea) desde el cual se presta un sitio web o servicio por internet (es decir, que actúa de _servidor_). Este _host_ puede estar en cualquier ubicación, y puede ser que nosotros utilicemos una plataforma ajena, o que usemos una propia. A este último caso se le llama "autohostear".

Son muy populares los servicios de _hosting_, que ofrecen la capacidad de mantener un sitio web o un servicio _online_ por un precio. Wordpress ofrece este servicio, en el que todos los sitios tienen la terminación `wordpress.com`, Mastodon también ofrece el suyo propio con `masto.host`, y servicios como Hostinger permiten alojar páginas web. Incluso existen sitios como PloxHost o Sparkle Host, que ofrecen planes de _hosting_ para servidores de Minecraft, y para bots de Discord. Estos servicios tienen la ventaja de que requieren pocos o nulos conocimientos para utilizarse, además de que no hay que poner de nuestra propia tecnología, por lo que tendremos un soporte técnico casi automatizado y no habrá que preocuparnos por _nada_. Las desventajas son que, en primer lugar, estamos sujetos a las reglas y los términos de uso de estos proveedores, que en muchas ocasiones pueden ser desventajosos para el consumidor; en segundo lugar, si ocurren fallas que provoquen la pérdida total o parcial de nuestra información, difícilmente podremos hacer algo al respecto.

Después está el _autohosting_, que desde el principio nos da la ventaja de tener el control total y absoluto sobre la información que entra y sale de nuestro sitio o servicio, sin que tengamos que limitarnos por reglas o términos de uso (aunque sí por la legislación local). Sin embargo, la dificultad de autohostear es bastante alta, requiriendo, al menos, conocimientos básicos de redes y de servidores, además de que cosas como el soporte técnico, respaldos, configuraciones de firewall, y demás prácticas de _sysadmin_ son totalmente nuestra responsabilidad, y muchas veces nadie nos ayudará con ello. Esto significa que, en muchas ocasiones, debemos dedicar parte de nuestro tiempo a mantener nuestro servidor, cosa que muchas personas no pueden o no quieren hacer.

La primera vez que publiqué [mi página web](https://www.autumn64.xyz) lo hice mediante GitHub Pages, un servicio que permite hostear páginas web estáticas a partir de un repositorio especial. Después transferí el sitio a Codeberg Pages, que actualmente [sigue activo](https://autumn64.codeberg.page), y que funciona a manera de _sitio espejo_. Estos servicios son gratuitos, por lo que se puede tener a un sitio web ahí indefinidamente. Sin embargo, tienen la desventaja de que cosas como php no se pueden usar, además de que, para actualizar el sitio, se debe hacer un _commit_ cada vez.

El mes pasado decidí entonces contratar una VPS con el proveedor PloxHost, que por una modesta cantidad de 4 dólares al mes te dan 1 GB de RAM, 20GB de almacenamiento NVMe, y 4 TB de ancho de banda <sub>(¡Esto no es un sponsor!)</sub>. Eso me bastaba y me quedaba muy de sobra para el propósito inicial por el que la contraté, que era hostear unas cuantas instancias de mi bot de Discord [Keyes](https://codeberg.org/Autumn64/Keyes). Así estuve aproximadamente un mes, hasta que me di cuenta de que las _comunidades_ de Discord en las que estaba se volvieron muy inactivas y, por ende, dejaron de utilizar a los bots.

Tras ese rotundo fracaso di de baja los bots, pero no quería dar de baja también la VPS porque sabía que la podía usar para más cosas que simplemente mantener en segundo plano un puñado de scripts de python comunicándose con la API de Discord. Entonces me atreví a lo que para mí parecía impensable: [instalé nginx](/blog/que-bonito-es-nginx), y transferí mi sitio web de Codeberg hacia allí. El resultado fue tan satisfactorio que, además, me dieron ganas de montar un blog usando la tecnología WriteFreely, que ya está inactivo y fue sustituido por Eleventy.

Entonces, estoy en una situación de _semi-autohost_. Yo fui quien instaló, configuró y echó a andar la arquitectura de red, pero el espacio en sí es proporcionado por PloxHost. No autohosteo plenamente porque no tengo ningún lugar vacío en mi casa para poner un servidor ahí, además de que no tengo IP estática, y tampoco pienso que valga la pena el gasto de energía eléctrica.

ACTUALIZACIÓN 2026-01-09: Hoy en día utilizo el proveedor "netcup" en una VPS cortesía de [@categulario@mstdn.mx](https://mstdn.mx/@categulario).

Por un tiempo quise hostear una instancia de FunkWhale para ahí poner mi música, experiencia que cuento [en esta entrada](/blog/pongan-buena-documentacion-carajo), aunque esta tecnología sí que consume bastantes más recursos y ya no me estaba alcanzando con tan sólo 1 GB de RAM. 

Con todo esto he aprendido una infinidad de cosas; desde prestar servicio en un simple y sencillo sitio web estático, pasando por la creación y configuración de servicios en segundo plano con `systemd`, hasta configurar una _reverse proxy_, y encima pasarla por TOR. No sólo eso, sino que además aprendí a usar SSH, aprendí a crear claves para iniciar sesión con ellas en lugar de con contraseñas, aprendí a usar `cron`, aprendí más sobre los entornos multiusuario y la gestión de permisos, y aprendí a crear respaldos esporádicos que se suben a mi espacio de Nextcloud, con lo cual indirectamente aprendí un poco sobre las [API REST](https://www.geeksforgeeks.org/rest-api-introduction/). Además, aprendí mejor sobre cómo funcionan los servidores, los firewall, los puertos de red, las medidas de seguridad y el _sysadmin_ en general.

En resumen, el proceso en el que comencé a autohostear mis propios servicios web ha sido una verdadera odisea. ¡Y vaya odisea más divertida, pedagógica y fructífera!
