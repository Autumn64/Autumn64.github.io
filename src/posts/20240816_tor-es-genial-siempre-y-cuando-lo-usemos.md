---
layout: post.njk
title: ¡Tor es genial! Siempre y cuando lo usemos de forma ética
date: 2024-08-16
permalink: "/blog/tor-es-genial-siempre-y-cuando-lo-usemos/"
featured: "/static/posts/20240816_tor-es-genial-siempre-y-cuando-lo-usemos/featured.png"
activeLink: blog
tags: post
---

Hace mes y medio comencé a utilizar el navegador [Tor](https://www.torproject.org/es/). En esta entrada quiero contar mi experiencia utilizándolo, y quiero dar algunos consejos útiles para quienes, después de leerla, también se interesen.

## Al principio hubo... curiosidad, y mató al gato

Desde los 7 años tengo acceso a Internet, y a esa edad solía pasar el tiempo en YouTube y en Wikipedia. Tenía por lo menos 10 años cuando escuché hablar de Tor por primera vez, que fue en un video en el que se presentaba como "el navegador con el que se puede acceder a la _deep web_". Entre 2008 y 2017 eran muy populares los videos sobre las llamadas _creepypastas_, así como los de la _deep web_, que es un concepto que aclararemos más adelante en el post. Estos videos estaban destinados en muchas ocasiones a generar morbo debido a la manera en la que describen a esta red, y yo, siendo una niña de 10 años, sentí curiosidad de _entrar_ en ese sitio para saber si lo que decían los videos era verdad.

Mi experiencia aquella ocasión no fue grata en absoluto &mdash;si bien prefiero mantener las cosas que vi como un asunto privado&mdash; y nunca más volví a usar el programa. Se podría decir que mi idea sobre Tor durante muchos años fue la de "un navegador que permite entrar a un lugar lleno de cosas horribles"; me tardé muchos años en darme cuenta de aquello para lo que realmente sirve Tor.

### El Gran Hermano conoce el sistema

A partir de que me uní a distintos círculos de Software Libre y comencé a hacer activismo me encontré con algunas personas que utilizan Tor, y ahí supe que es un programa libre. Eso me llamó la atención, pero no le di más importancia.

Toda mi percepción sobre Internet cambió cuando leí el libro _El enemigo conoce el sistema_ de Marta Peirano. En él, de entre todas las cosas que se mencionan, la autora muestra como la Internet se ha convertido en el instrumento de vigilancia más grande del planeta. Desde cosas bien conocidas como las _cookies_ y los _trackers_ hasta técnicas de reconocimiento facial, [manipulación de las masas](https://es.wikipedia.org/wiki/Esc%C3%A1ndalo_de_datos_de_Facebook-Cambridge_Analytica), [censura](https://es.wikipedia.org/wiki/Protesta_contra_SOPA_y_PIPA), sistemas de [crédito social](https://es.wikipedia.org/wiki/Sistema_de_cr%C3%A9dito_social_chino), y muchas más cosas que terminaron provocándome asco. De repente las "maravillas" que le atribuía a Internet ya no existían y, si bien nunca he dejado de pensar que esta es una de las herramientas más importantes creadas por el ser humano en su historia, me pareció innegable el hecho de que se estaba utilizando para todo lo opuesto a aquello para lo que se originalmente se creó, cosa de la que hablo un poco más a fondo en mi entrada sobre la [democratización de la Internet](/blog/la-democratizacion-de-la-internet).

Entonces me propuse hacer algo al respecto. Ya no estaba dispuesta a permitir que se violara mi privacidad en mi cara.

## "No me importa mi privacidad, pues no tengo pensamientos propios"

Mucho tiempo fui de las personas que repiten el discurso de "no me importa mi privacidad, no tengo nada que ocultar", porque en la misma cultura mexicana y latinoamericana existe esa idea de que "si te ocultas, es porque hiciste algo malo". A partir de que aprendí sobre el Software Libre, y después de leer el libro, entendí que quien quiere preservar su privacidad no lo hace porque esté haciendo cosas malas; lo hace porque las intenciones de quienes quieren violar esa privacidad sí son malas.

La mayoría de la gente, sin embargo, sigue adoctrinada por esa idea de "no tengo nada que ocultar"; su pensamiento propio fue secuestrado y se les implantó esa idea ajena para que la repitieran sin entender lo que significa. Entonces, cuando alguien me dice eso, yo le respondo que es lo mismo decir "no me importa mi libertad de expresión, pues no tengo nada que decir".

## La red TOR y el enrutamiento de cebolla

Se puede comprender a la red TOR como un superconjunto de Internet. Tenemos a la red normal, y _encima_ de esta hay un montón de servidores y _relays_ que se comunican entre sí.

Cuando nos conectamos a Internet mediante la red TOR, primero nos conectamos a uno de estos servidores, éste nos redirecciona a otro servidor, y éste a otro. En total se nos redirecciona tres veces antes de conectarnos a la página web, además de que nuestra conexión se encripta por cada _salto_ que hacemos. Entonces, nuestro ISP sólo puede ver que nos conectamos a TOR, pero no puede ver a qué sitio accedimos; por otra parte, el sitio web sólo ve el último servidor al que nos conectamos, que se llama _nodo de salida_ o _exit node_, y que es de donde sale la conexión hacia el sitio, mas no puede ver nuestra dirección IP real ni nuestra ubicación.

<section class="post-image">
<img src="https://changelly.com/blog/wp-content/uploads/2020/06/tor-network-nodes.png" alt="Esquema de una conexión mediante TOR">
<p>Esquema de una conexión mediante la red TOR. Cada relay se encuentra en ubicaciones diferentes, muchas veces hasta en países distintos</p>
</section>

A esto se le conoce como "enrutamiento de cebolla" o _onion routing_, ya que cada _relay_ actúa como una _capa_ que cubre nuestra conexión, de manera similar a como las capas de una cebolla cubren su centro. Todos estos _relays_ y servidores son montados y mantenidos por voluntarios de todo el mundo, y no necesariamente dependen de una empresa ni son de carácter comercial.

## Navegación anónima

El _onion routing_ de la red TOR ya nos da un montón de anonimato; si diez personas se conectan a una página web mediante el mismo nodo de salida, entonces no será nada fácil identificar a cada usuario. Además, cada que cambiamos de página (incluso si es dentro del mismo sitio o del mismo dominio) nuestro nodo de salida cambia, por lo que tampoco se puede _rastrear_ lo que hacemos en la red.

Adicionalmente a todo esto, el navegador web Tor (no así la red TOR) tiene una serie de medidas que ayudan a navegar de forma anónima. Cosas como el tamaño y forma del cursor del _mouse_ o el tamaño del sitio web se _adaptan_ de tal manera que luzcan de forma idéntica para todas las personas que usan Tor. Entonces, al tener tantas conexiones que lucen exactamente igual se vuelve imposible rastrear a un usuario específico y, por consiguiente, éste navega de forma anónima.

Además, Tor no guarda ni la caché, ni las _cookies_, ni el historial de navegación, por lo que el navegador estará limpio cada vez que lo iniciemos.

Por supuesto hoy en día es imposible navegar de manera 100% anónima, pero es verdad que con Tor se puede alcanzar un grado muy alto de anonimato (no confundir eso con _privacidad_, que es diferente).

## La web profunda, la web oscura, lo que son, y lo que NO son

El término _deep web_ (en español _web profunda_) se volvió muy popular en la década del 2010 porque diversos _youtubers_ llenaron toda la plataforma de videos sobre eso, que muchas veces rozaban el borde entre un simple video informativo y una teoría conspirativa. Todo esto lo vi, no me lo contaron. Incluso se dividía a la _deep web_ en "niveles", en donde supuestamente, entre más profundo ibas, peores cosas encontrabas.

<section class="post-image">
<img src="http://i.ytimg.com/vi/9hUIbfQFrRU/maxresdefault.jpg" alt="Deep web representada como un iceberg">
<p>Esquema de la deep web representada como un iceberg, en donde acceder a cada nivel es más difícil. Este tipo de esquemas eran muy comunes en los videos de YouTube que hablaban sobre el tema</p>
</section>

La gran mayoría de cosas que dicen esos videos sobre la _deep web_ son únicamente para provocar morbo, y en muchas ocasiones también se exagera sobre la magnitud de las cosas que hay ahí. Eso también provoca que la mayoría de la gente crea que el navegador Tor sólo sirve para entrar en ese lugar, y ya aclaramos que eso no es así.

En realidad, la _deep web_ o web profunda no es más que el conjunto de sitios y recursos web que no se pueden acceder mediante los buscadores web comunes. Un ejemplo de web profunda es la _Academic Invisible Web_, que es nada más y nada menos que el conjunto de bases de datos con recursos de uso académico, que están disponibles en las universidades, pero que no se puede acceder a ellos buscándolos en _Google_ ni en ningún otro buscador tradicional [[1](https://es.wikipedia.org/wiki/Internet_profunda#Internet_acad%C3%A9mica_invisible)]. Entonces, la _deep web_ no es _per se_ algo malo, ni tampoco es algo imposible de acceder; simplemente es aquel contenido de Internet que no siempre está disponible para el público.

A lo que en realidad se refieren estos _youtubers_ es la _dark web_ o web oscura, que precisamente consiste en _superconjuntos_ de la web normal, los cuales requieren de un cliente especializado para poder acceder a sus contenidos [[2](https://es.wikipedia.org/wiki/Dark_web)]. Ejemplos de la _dark web_ son la red Tor, I2P, Freenet, redes P2P, etcétera. No nos dejemos engañar; el nombre _dark_ no tiene connotaciones negativas, y la web oscura tampoco es algo inherentemente malo.

### Los dominios .onion

Hace un momento mencioné que la red de TOR es un _superconjunto_ de Internet. Esto es, _contiene_ a la web normal de toda la vida, y _encima_ de esta web está TOR mismo, cuyos contenidos se representan mediante los dominios `.onion`.

Estos dominios son especiales. No se puede acceder a ellos desde un navegador web normal dado que no participan del DNS, pero sí podemos utilizarlos con el navegador Tor, o con cualquier navegador siempre y cuando utilicemos la red TOR. También tienen la peculiaridad de que su URL corresponde a la clave pública del dominio, lo que implica que, además de que no se necesita un DNS para poder acceder al sitio, la conexión también se encripta.

Levantar un sitio web `.onion` es tan fácil como descargar Tor, moverle un poco a su archivo de configuración, e iniciarlo como servicio. Después, con Apache o nginx se puede configurar el sitio para que _sirva_ en esa dirección `.onion`, haciendo que el proceso de creación de un sitio en la red TOR sea muchísimo más fácil que hacer lo mismo en la web normal. También se puede servir a un mismo sitio en la web normal y en la red TOR, teniendo incluso la posibilidad de agregar un _header_ para que, cuando un usuario acceda mediante Tor al sitio, se le notifique de que también está disponible en `.onion`.

<section class="post-image">
<img src="/static/posts/20240816_tor-es-genial-siempre-y-cuando-lo-usemos/header.png" alt=".onion available">
<p>Notificación que avisa al usuario de que el sitio web está disponible como .onion</p>
</section>

Personalmente prefiero utilizar las direcciones `.onion` cuando están disponibles ya que, al no participar del DNS, en cierto modo lo estamos _evadiendo_, con lo cual nuestro anonimato aumenta un poquito más.

### Las precauciones que se deben tener con las dark webs

Una parte de las cosas que mencionan los _youtubers_ sobre la _dark web_ es cierta. Ya vimos que **no** es un lugar lleno de cosas ilegales o asquerosidades. Sin embargo, [el hombre es un lobo para el hombre](https://es.wikipedia.org/wiki/Dark_web#Contenido), y entonces es verdad que, dado el anonimato de la web oscura, mucha gente (mas no _toda_ la gente) lo utiliza para propósitos ilegales. El principal problema que tiene la red TOR es la pornografía infantil, que abarca la mayoría de sitios `.onion`, seguida de sitios de mercado negro, alquiler de matones, botnets, piratas informáticos, noticias falsas, foros sin moderación y fraudes. De hecho, diría que abundan más los fraudes que todo lo demás, y una fracción bastante pequeña está comprendida por sitios web de redes sociales, blogs, instancias del fediverso y de Invidious, y en general cosas buenas y legales.

Desaconsejo totalmente el uso de wikis o colecciones de sitios de Tor, así como de cualquier indexador o buscador de onions, ya que son en gran medida los primeros lugares en donde se puede encontrar todo este contenido ilegal. Es mejor crear una lista personal de sitios `.onion` con páginas web que sean verdaderamente útiles y que estén libres de esas cosas lamentables.

Existe también una campaña, de la cual participo, llamada [STOP CP](http://stopcpozlbfa4s4fuhisthyaivzbewe2rihsadarlkvqv5gaphkrvvyd.onion/) que, como su nombre lo dice, aboga por el combate en contra de la pornografía infantil en la red TOR. Personalmente en ocasiones he _DDoSeado_ algunos de estos sitios web, y seguiré contribuyendo para que la red TOR sea utilizada para lo que fue hecha, y no para hacerle daño a personas ni para publicar cosas deleznables.

## Conclusión: Recomendaciones para el uso de la red TOR

Esperando que a algunos de los lectores de este blog les haya surgido el interés de probar Tor, dejaré algunas recomendaciones para usar esta red de la mejor manera, que son cosas que he aprendido conforme he utilizado este navegador en mi vida cotidiana.

1. No uses Tor para iniciar sesión en sitios web, pues con eso estás yendo en contra de la idea del "anonimato".
2. La lista de _relays_ de Tor es pública, y muchos sitios web a propósito impiden el acceso a conexiones que vienen de estos repetidores. Habrá entonces que hacer una lista de los sitios web que no se pueden acceder desde Tor.
3. Prioriza el uso de herramientas y _frontends_ libres y comunitarios, como [Redlib](https://github.com/redlib-org/redlib?tab=readme-ov-file#redlib) o [Invidious](https://invidious.io/), ya que estos son más amigables con la red TOR que los sitios web tradicionales.
4. Debido a los _saltos_ que hace Tor en cada _relay_, la conexión puede ser lenta. _Muy_ lenta.
5. Evita los indexadores de onions y las wikis, ya que usarlos te acerca mucho a los lugares en donde la ilegalidad y la degeneración proliferan.
6. Si bien los `.onion` tienen muchas ventajas, no son la única forma de usar Tor. Puedes acceder a la web normal sin problemas, y puedes incluso hacer como Richard Stallman, que [utiliza la red TOR y sin embargo nunca entra a la dark web](https://stallman.org/stallman-computing.html).
7. A causa de lo mencionado en el punto 2, muchos sitios web te dejan acceder, pero ponen un CAPTCHA que sólo aparece cuando estás usando Tor. Ante aviso no hay engaño.
8. Tor no guarda ni la caché, ni las _cookies_, ni el historial, por lo que cualquier configuración que hagas en un sitio web se perderá cuando cierres el navegador.
9. Cuídate muy bien de los sitios `.onion` dudosos, especialmente aquellos que vienen de los indexadores. Dado que sus URLs no son legibles, es fácil confundirlos con sitios de fraude. Si ves una página en la _dark web_ que pide un pago en criptomoneda para poder acceder, lo más seguro es que estés en un sitio fraudulento. Nunca dejes tus datos personales, y nunca hagas pagos en la red TOR.
10. ¡Comparte todo esto con los demás! Entre más personas quieran navegar de forma anónima, más se respetará nuestra privacidad, y más podremos luchar en contra de los malos usos que se dan a la _dark web_.

En conclusión, la red TOR es una cosa muy notable que tiene muchos beneficios en tanto tengamos cuidado en como lo usamos. ¡Tor es genial! Siempre y cuando lo usemos de forma ética.
