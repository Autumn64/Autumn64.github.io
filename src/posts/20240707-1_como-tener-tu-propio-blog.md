---
layout: post.njk
title: Cómo tener tu propio blog con tecnologías libres
date: 2024-07-07
permalink: "/blog/como-tener-tu-propio-blog/"
featured: "/static/posts/20240707_como-tener-tu-propio-blog/featured.jpeg"
tags: post
---

# ACTUALIZADO EL 2026-01-09

Existen dos tecnologías libres que para mí son las más sencillas y que, por ende, son mis preferidas, para poder hostear un blog. La primera es [WriteFreely](https://writefreely.org/), y la segunda es [BashBlog](https://github.com/cfenollosa/bashblog). También existe [WordPress](https://wordpress.com) y hay otras más, pero son un poco más complejas y pueden no ser del todo _beginner-friendly_.

## BashBlog

El caso de BashBlog es el más sencillo, ya que es básicamente un script de bash que, cuando lo ejecutas, genera en el directorio actual un conjunto de archivos `.html` y `.css` que le dan forma al blog, y entonces cada que queremos publicar una nueva entrada basta con poner `./bb.sh post`, y se nos abrirá un editor de texto en donde podremos crearla. La edición del estilo visual del blog se hace modificando los archivos `main.css` y `blog.css` al gusto, y se puede crear un archivo de configuración `.config` para poner cosas como el nombre del blog, su descripción, nuestro correo electrónico, etcétera. En la descripción del blog del archivo de configuración se pueden poner etiquetas HTML para agregar información adicional.

La edición se puede hacer mediante Markdown (en cuyo caso es necesario instalarlo en nuestra distribución), o mediante HTML. Ya que hemos terminado, basta con guardar el archivo y salir del editor para que el script genere la nueva entrada y modifique los archivos `.html` existentes para que estos reflejen los cambios. Parece que lo más adecuado es siempre usar el script para crear, modificar o eliminar entradas, ya que modificar los archivos manualmente puede provocar conflictos.

## WriteFreely

WriteFreely es una tecnología basada en ActivityPub (y por ende es parte del [Fediverso](https://es.wikipedia.org/wiki/Fediverso)) que sirve para crear blogs minimalistas y sencillos. Tiene la ventaja de que existen diversas [instancias](https://writefreely.org/instances) en las que el usuario se puede registrar, y entonces ya no necesita autohosteo. La edición del estilo visual del blog también es mediante CSS, pero en este caso se coloca en el apartado "Customize Blog", en donde también podemos configurar cosas como su nombre, su descripción, su formato, si federa o no, y un pie de página que es más fácil de configurar que en BashBlog. En la parte superior izquierda viene un "Menú", en el que podremos ver cosas como los suscriptores del blog, sus estadísticas, y podremos también escoger la opción "New Post" para crear una nueva entrada, que se hace y edita desde dentro del sitio. La edición también se puede hacer en Markdown o en HTML, y podemos guardar nuestras entradas en los borradores, para así no perder nuestro progreso y poder publicarlo después.

WriteFreely tiene también la característica de que podemos _fijar_ entradas a gusto, con lo cual ya quedan en la parte superior y no hay que hacer más cambios. También es muy fácil importar y exportar _posts_, con lo que podemos hacer respaldos y/o transferir entradas entre instancias distintas.

## Wordpress

Con Wordpress entramos en la liga de los Sistemas de Gestión de Contenidos, o [CMS](https://es.wikipedia.org/wiki/Sistema_de_gesti%C3%B3n_de_contenidos) por sus siglas en inglés. Wordpress es ridículamente fácil de usar, y no se necesita prácticamente ningún conocimiento previo en programación ni en diseño para hacer una página web bonita, que puede contener no solo un blog, sino que se puede hacer para prácticamente lo que sea: desde un sitio web personal hasta una tienda en línea.

Wordpress se maneja mediante _plugins_, que pueden modificar o aumentar la funcionalidad del sitio. La desventaja que yo le veo a esto es que una cantidad preocupante de estos es de pago, y entonces, si bien Wordpress en sí es Software Libre, la mayoría de componentes que lo rodean son privativos (ni siquiera libres de pago).

## Eleventy

Esta página web y este blog funcionan gracias a [Eleventy (o 11ty)](https://www.11ty.dev/), un generador de sitios web estáticos que funciona mediante plantillas: tú defines las plantillas dependiendo del contenido de cada página, en Markdown o en otro lenguaje soportado defines el contenido, y la herramienta te genera archivos HTML que ya vienen con todo listo y que puedes simplemente _soltar_ dentro de una carpeta de servidor. Del mismo modo que con Wordpress, puedes hacer no solamente blogs, sino páginas web de cualquier tipo con Eleventy.

Eleventy sí requiere más conocimientos técnicos, aunque también te permite utilizar _temas_ hechos por la comunidad para hacer que el trabajo sea menos tedioso.

#### Hosting
Para BashBlog, WriteFreely y Eleventy normalmente se requeriría autohostear. WriteFreely presenta una [documentación](https://writefreely.org/start) con los pasos de instalación, y quedaría sirviendo el contenido permanentemente, mientras que, para los otros dos, realmente no se hostea el servicio en sí, sino que simplemente se colocarían los archivos HTML y demás en la típica carpeta de un servidor Apache o nginx. 

En el caso de Wordpress, existe todo un mercado de servicios de alojamiento, los cuales incluyen a Hostinger, Hostgator, InfinityFree, PloxHost, etcétera, que ya se encargan de la parte técnica y entonces el cliente sólo se tiene que preocupar de diseñar su página web. En caso de querer autohostear, se requieren una base de datos MySQL, PHP y la instalación de Wordpress en sí, si bien personalmente prefiero tenerlo dockerizado, ya que de ese modo es más portable y me es más fácil mantener un servidor así.

Cualquiera de estos servicios ocupa poquísimos recursos &mdash;siendo Wordpress el que probablemente consuma más&mdash;, lo que significa que se pueden hostear prácticamente desde cualquier dispositivo: tu patata de 2002 con un Pentium 4, tu celular abandonado que no sabes qué uso darle, tu [Raspberry Pi que ganaste en una competencia](https://video.hardlimit.com/w/qDjSXvNwrVzSjjtvNw1PFV) pero que no tienes nada en qué usarla, etcétera. No hay prácticamente límites sobre dónde o cómo hostear.
