---
layout: post.njk
title: Como la transformada de Fourier ayudó a cambiar mi voz
date: 2024-08-10
permalink: "/blog/como-la-transformada-de-fourier/"
featured: "/static/posts/20240810_como-la-transformada-de-fourier/featured.jpg"
activeLink: blog
tags: post
---

Cuando empezaron mis vacaciones de verano una de las cosas que me propuse fue comenzar con el _voice training_, que consiste en una serie de ejercicios útiles para que las mujeres trans tengan una voz más femenina. Busqué tutoriales y cursos en Internet, y casi todo lo que encontré repetía la misma idea de que, como aspecto más básico, lo importante para cambiar la voz no es el _tono_, sino la _resonancia_.

Pero, ¿qué significa esto?

## Tono vs resonancia

La gente comúnmente comete el error de asumir que la _masculinidad_ o _feminidad_ de una voz depende únicamente de su _tono_. El _tono_ se refiere a qué tan aguda o grave es, cosa que en música y acústica se conoce como _nota_ o _altura_. Muchas mujeres trans &mdash;y también muchos imitadores de voces novatos&mdash; suben su tono de voz lo más que pueden, y como resultado terminan sonando como Mickey Mouse o como Elmo. Incluso hay quienes utilizan la nariz para alcanzar un tono altísimo, haciendo así involuntariamente una voz como la de Cepillín.

Entonces la cosa no va realmente por ahí. A lo que verdaderamente se le debe prestar atención es a la _resonancia_. Cualquier persona que haya tomado clases de canto y locución (como yo, que mi padre me enseñó a cantar cuando era adolescente) ha escuchado sobre esto. Las cuerdas vocales producen el sonido, que recorre la laringe y la garganta y sale por nuestra boca. La _resonancia_ de la voz tiene que ver directamente con la posición y el tamaño de la laringe, cosa que explicaremos más adelante.

<section class="post-image">
<img src="https://2.bp.blogspot.com/-zeyMo8MITqM/WPenDsrpOqI/AAAAAAAAD6w/i8afFydIf30Ql3Ay16-w2J2onKh7WKzXACLcB/s1600/infant-vs-adult-larynx.jpg" alt="Diagrama de laringe femenina y masculina">
<p>Diagrama de una voz femenina y masculina. La laringe femenina está más hacia arriba y ocupa menos espacio, produciendo una voz más fina, mientras que la laringe masculina está más hacia abajo y ocupa más espacio, produciendo una voz más gruesa.</p>
</section>

Podemos directamente modificar el tamaño y la posición de nuestra laringe, y ya habremos hecho la mitad del trabajo. Sin embargo, falta la parte que es menos intuitiva, pero que más efecto tiene.

## Todo es una suma de senos

En 1821 &mdash;no mucho antes de que el Ejército Trigarante entrara en la Ciudad de México para firmar el acta de independencia con Juan O'Donojú&mdash; un reconocido matemático y físico francés llamado Joseph Fourier afirmó una barbaridad que dejó a todo el mundo perplejo: dijo que "cualquier onda, señal o función está construida con una suma de senos" [[1](https://redirect.invidious.io/watch?v=N19yWwACfY8)] [[2](https://es.wikipedia.org/wiki/Transformada_de_Fourier#Historia)]. Sí, esa línea curva que constantemente iba hacia arriba y hacia abajo, y que tanto nos quebró el coco en la secundaria. Fourier se atrevió a desafiar todo lo que en ese momento se sabía, afirmando que podemos sumar la cantidad que queramos de senos, y así construiremos una onda o una señal cualquiera.

<section class="post-image">
<img src="/static/posts/20240810_como-la-transformada-de-fourier/seno1.png" alt="Función f(x) = \sin(x)">
<p>Una función seno sencillita, como las que veíamos en la secundaria. A saber, 
<math>
  <mrow>
    <mi>f</mi>
    <mo form="prefix" stretchy="false">(</mo>
    <mi>x</mi>
    <mo form="postfix" stretchy="false">)</mo>
    <mo>=</mo>
    <mrow>
      <mi>sin</mi>
      <mo>⁡</mo>
    </mrow>
    <mo form="prefix" stretchy="false">(</mo>
    <mi>x</mi>
    <mo form="postfix" stretchy="false">)</mo>
  </mrow>
</math>
</p>
</section>

<section class="post-image">
<img src="/static/posts/20240810_como-la-transformada-de-fourier/seno2.png" alt="Función g(x) = \frac{\sin(4x)}{2}">
<p>Otra función seno un poco más rebuscada. A saber, 
<math>
  <mrow>
    <mi>g</mi>
    <mo form="prefix" stretchy="false">(</mo>
    <mi>x</mi>
    <mo form="postfix" stretchy="false">)</mo>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <mrow>
          <mi>sin</mi>
          <mo>⁡</mo>
        </mrow>
        <mo form="prefix" stretchy="false">(</mo>
        <mn>4</mn>
        <mi>x</mi>
        <mo form="postfix" stretchy="false" lspace="0em" rspace="0em">)</mo>
      </mrow>
      <mn>2</mn>
    </mfrac>
  </mrow>
</math>
</p>
</section>

<section class="post-image">
<img src="/static/posts/20240810_como-la-transformada-de-fourier/seno3.png" alt="Función h(x) = \frac{\sin(2x^2)}{\sqrt{\pi}}">
<p>Otra función seno más complicada. A saber, 
<math>
  <mrow>
    <mi>h</mi>
    <mo form="prefix" stretchy="false">(</mo>
    <mi>x</mi>
    <mo form="postfix" stretchy="false">)</mo>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <mrow>
          <mi>sin</mi>
          <mo>⁡</mo>
        </mrow>
        <mo form="prefix" stretchy="false">(</mo>
        <mn>2</mn>
        <msup>
          <mi>x</mi>
          <mn class="tml-sml-pad">2</mn>
        </msup>
        <mo form="postfix" stretchy="false" lspace="0em" rspace="0em">)</mo>
      </mrow>
      <msqrt>
        <mrow>
          <mi>x</mi>
          <mspace width="0pt" height="0.7143em"></mspace>
        </mrow>
      </msqrt>
    </mfrac>
  </mrow>
</math>
</p>
</section>

<section class="post-image">
<img src="/static/posts/20240810_como-la-transformada-de-fourier/seno4.png" alt="Las tres funciones superpuestas">
<p>Las tres funciones superpuestas, que a simple vista no parecen tener relación ni sentido.</p>
</section>

<section class="post-image">
<img src="/static/posts/20240810_como-la-transformada-de-fourier/seno5.png" alt="Suma de f(x) + g(x) + h(x)">
<p>La suma de las tres funciones 
<math>
  <mrow>
    <mi>f</mi>
    <mo form="prefix" stretchy="false">(</mo>
    <mi>x</mi>
    <mo form="postfix" stretchy="false">)</mo>
    <mo>+</mo>
    <mi>g</mi>
    <mo form="prefix" stretchy="false">(</mo>
    <mi>x</mi>
    <mo form="postfix" stretchy="false">)</mo>
    <mo>+</mo>
    <mi>h</mi>
    <mo form="prefix" stretchy="false">(</mo>
    <mi>x</mi>
    <mo form="postfix" stretchy="false">)</mo>
  </mrow>
</math>, que da como resultado esta barbaridad que no se parece en nada a un seno convencional.</p>
</section>

No es necesario ser un genio en matemáticas para darse cuenta de como visualmente a partir de funciones seno sin relación aparente entre sí construimos una señal similar a las que se usan en el sonido y las telecomunicaciones. Tampoco hay que prestar atención a las fórmulas; las puse por si alguien quiere experimentar. Eso significa que nosotros podemos tomar una onda culaquiera &mdash;como por ejemplo, nuestra voz&mdash; y podemos _descomponerla_ en un montón de funciones seno distintas.

La **transformada de Fourier** es una herramienta que nos permite justamente hacer eso; tomamos cualquier señal que queramos, y la _descomponemos_ en un montón de funciones seno.

<section class="post-image">
<img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Periodic_identity_function.gif" alt="Serie de Fourier">
<p>Conforme vamos sumando funciones seno distintas, la gráfica resultante se parece más y más a las líneas rectas.</p>
</section>

Esta herramienta tiene una cantidad infinita de aplicaciones, y es en gran medida la base de las telecomunicaciones modernas. Sin embargo, la parte que nos interesa en esta entrada tiene que ver con el sonido, y particularmente la voz. Por ejemplo, veamos cómo se ve un acorde de _Do Mayor_ tocado en un piano.

<section class="post-image">
<img src="/static/posts/20240810_como-la-transformada-de-fourier/domayor1.png" alt="Do Mayor representado en funciones seno superpuestas">
<p>El acorde de Do Mayor expresado como funciones seno superpuestas</p>
</section>

<section class="post-image">
<img src="/static/posts/20240810_como-la-transformada-de-fourier/domayor2.png" alt="Do Mayor representado como la suma de las funciones seno">
<p>La suma de las funciones seno, dando como resultado esta brutalidad que sin embargo luce bastante regular, y que se parece mucho a las ondas que se suelen ver en programas como Audacity</p>
</section>

Ahora _descompongámosla_, y veamos con qué nos encontramos.

<section class="post-image">
<img src="https://upload.wikimedia.org/wikipedia/commons/3/31/CQT-piano-chord.png" alt="Transformada de Fourier de Do Mayor">
<p>Transformada de Fourier del acorde. Las letras superiores son las notas en notación anglosajona. Las líneas más oscuras son los senos (es decir, las notas) más fuertes, volviéndose progresivamente más débiles.</p>
</section>

Podemos ver las notas principales del acorde (_Do-Mi-Sol_) perfectamente representadas, pero luego resulta que estas mismas notas se empiezan a repetir a menor intensidad. Lo verdaderamente interesante de esto es que en un punto vemos a notas como _Si_, _Re_ o hasta _La sostenido_ representadas, siendo que estas notas no forman parte del acorde. Si ampliamos la transformada, podremos darnos cuenta de que, al final, _todas_ las notas se involucran en el acorde; sólo que la mayoría son tan débiles que no las percibimos. La nota principal (en este caso _Do_) se denomina como _fundamental_, mientras que todas las demás notas se llaman _armónicos_. Toda señal tiene su _fundamental_ y sus _armónicos_, siendo estos últimos el resto de funciones seno que se suman y le _dan forma_.

Todo esto nos dice que _teóricamente_ podemos tener una _fundamental_ y una cantidad infinita de _armónicos_, lo cual _en teoría_ es cierto. Sin embargo, en la práctica los _armónicos_ se vuelven cada vez más débiles, por lo que deberemos tomar una cantidad finita de éstos para incorporarlos a la señal, cosa que se denomina como **ancho de banda** (¡no te confundas con la velocidad de una conexión de red!); entre más _ancho de banda_, más armónicos se están tomando en cuenta, y la señal tiene una mejor calidad. Entonces, un sonido con un ancho de banda muy corto tendrá una calidad de teléfono debido a la poca cantidad de _armónicos_, mientras que uno con un ancho de banda muy amplio tendrá una calidad de estudio.

Hace unos días un conocido me contaba como se dio cuenta de que en una canción en MP3 no lograba percibir unos sonidos de ambientación que deberían escucharse de fondo, mientras que, con la misma canción en FLAC, sí que los escuchaba claramente. Eso es debido a que MP3 _comprime_ el audio y, por ende, reduce el ancho de banda, eliminando entonces los armónicos de dichos sonidos ambientales, mientras que FLAC no comprime nada, por lo que todos los armónicos están disponibles.

Además, también podemos darnos cuenta de que una misma _fundamental_ puede, de hecho, generar distintos _armónicos_, lo cual se conoce como **resonancia**. Entonces, la _resonancia_ se refiere a la relación entre una _fundamental_ con sus _armónicos_, que pueden ser (y son) distintos en cada caso. Es esta la razón por la que somos capaces de diferenciar el sonido de una guitarra y de un piano, incluso si ambos instrumentos tocan la misma nota; dado que los _armónicos_ son diferentes, el sonido producido es distinto, y sin embargo no deja de ser coherente gracias a que la _fundamental_ es la misma.

También, cuando utilizamos un ecualizador, lo que estamos haciendo es _amplificar_ los armónicos del sonido que estamos reproduciendo, para así lograr darle una mejor calidad. ¿Alguna vez has visto este tipo de visualizadores?

<section class="post-image">
<img src="https://media1.tenor.com/m/zL7a0t8wP20AAAAC/%E0%B6%8B%E0%B6%AD%E0%B7%8A%E0%B6%9A%E0%B7%98%E0%B7%82%E0%B7%8A%E0%B6%A8%E0%B6%BA%E0%B7%92.gif" alt="Visualizador de audio">
</section>

Bueno, pues no es más que una representación hecha mediante la transformada de Fourier de los armónicos que suenan al reproducir una canción.

### Los resonadores

Entonces, para conseguir una voz más femenina o más masculina, lo más importante que hay que hacer es _cambiar la resonancia_ de nuestra voz. Esto lo podemos lograr alterando la altura y el espacio de nuestra laringe, como mencioné al principio. Esta entrada no es un tutorial de como hacer eso, pero pondré como ejemplo que, para levantar la laringe, podemos fingir que vamos a toser y fijarnos en la posición de nuestra garganta justo antes de hacerlo; para bajarla, podemos fingir que vamos a bostezar y fijarnos en la posición de nuestra garganta en el proceso.

Una laringe alta y que ocupa poco espacio producirá un sonido fino y suave, mientras que una laringe baja y que ocupa mucho espacio producirá el sonido opuesto. De este modo, al _cambiar la resonancia_ de nuestra voz, estamos alterando su _calidad_ sin necesidad de cambiar el tono.

También existe lo que en canto se conoce como "voz de pecho" y "voz de cabeza", que en locución se llaman "resonador de pecho" y "resonador de cabeza", siendo ambas ideas lo mismo. Estos conceptos se refieren al lugar en donde la voz se _amplifica_, y donde adquiere mayor nitidez. Tampoco explicaré cómo usar ambos resonadores, pero aplicando los ejercicios de subir y bajar la laringe podemos hacernos una idea de cómo funciona. No es que literalmente la resonancia se dé en el pecho o en la cabeza; simplemente es que esas partes _vibran_ con mayor fuerza como reflejo de nuestra voz. Si ponemos nuestra mano en el pecho y hablamos o cantamos, y éste vibra con fuerza, entonces estamos usando voz de pecho; si no vibra o vibra poco, estamos usando voz de cabeza.

### Conclusión

Si bien es cierto que todo lo anteriormente mencionado juega un papel fundamental en la construcción de una voz, tampoco obtendremos mágicamente la voz deseada con tan sólo aplicar eso. Cosas como la entonación, los ademanes, el vocabulario y el "sentimiento" influyen muchísimo en la _masculinidad_ o _feminidad_ de una voz, que por supuesto se basa en estereotipos. Además, estamos hablando de un músculo, y como tal hay que entrenarlo.

Las primeras veces podría sonar muy forzado y podríamos terminar cansándonos, e incluso nos podría doler la garganta. Debemos practicar constantemente con el fin de _acostumbrarnos_ a esa voz. El consumo de agua también es primordial, y también es preciso evitar el consumo de sustancias como el alcohol o el tabaco.

Esta ha sido una historia muy larga, y me ha tomado mucho tiempo estudiar &mdash;y sobre todo entender&mdash; todo esto. Aunque es cierto que las matemáticas no son necesarias para lograr cambiar nuestra voz, es innegable que gracias a ellas yo logré hacerlo.

Cuando los demás me preguntan sobre _tips_ para cambiar la voz, no les suelo mencionar la parte matemática; les explico lo de la tos y el bostezo, y más cosas sencillas de aplicar para hacerse una idea de cómo funciona. Sin embargo, aquí quise sí mencionarla porque, además de que esto me enseñó que las matemáticas están en _todo_ aunque no las percibamos, también me llevo el aprendizaje de que a veces una necesidad o un deseo nos puede llevar a lugares que nunca antes habíamos imaginado. ¡Sigamos aprendiendo, y sigamos compartiendo el conocimiento!
