<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Inteligencias Múltiples en la Educación Preescolar'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .bg-color-2.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") La aplicación de las inteligencias múltiples en el aula preescolar transforma el aprendizaje en un proceso dinámico, inclusivo y lleno de posibilidades. A través de esta teoría, es posible potenciar el desarrollo integral de cada niño y adaptar las estrategias pedagógicas a sus diferentes formas de aprender.


      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Teoría de las inteligencias múltiples
        
      .row.mb-5
        .col-lg-8
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Históricamente, la inteligencia se ha medido a través de habilidades lingüísticas y matemáticas. Sin embargo, Howard Gardner (1983) propuso la teoría de las inteligencias múltiples, redefiniendo este concepto al plantear que la inteligencia no es un atributo único, sino una combinación de diversas capacidades que se desarrollan de manera distinta en cada persona.

          p Este enfoque es clave en la educación preescolar, ya que permite reconocer y fortalecer las diferentes formas de aprendizaje que poseen los niños. Gardner identificó ocho tipos de inteligencia, cada una con características particulares:
        
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")


      .bg-full-width.bg-color-info.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.my-5
            .col-lg-10
              ImagenInfografica.color-secundario
                  template(v-slot:imagen)
                    figure
                      img(src='@/assets/curso/tema3/info1.png', alt='', style="max-width: 952px;").mx-auto

                  .bg-color-white.box-shadow.p-3(x="7%" y="86%" numero="+")
                    h5 1. Lingüística-verbal
                    p Facilidad para la lectura, escritura y narración de historias. Se pueden emplear juegos con palabras, lectura en voz alta y dramatizaciones.

                  .bg-color-white.box-shadow.p-3(x="0%" y="55%" numero="+")
                    h5 2. Lógico-matemática
                    p Habilidad para resolver problemas y reconocer patrones. Se recomienda el uso de juegos de clasificación, resolución de acertijos y secuencias numéricas.

                  .bg-color-white.box-shadow.p-3(x="9%" y="20.5%" numero="+")
                    h5 3. Espacial
                    p Capacidad de visualizar en tres dimensiones. Se pueden realizar actividades de arte, construcción con bloques y exploración de formas y tamaños.

                  .bg-color-white.box-shadow.p-3(x="22%" y="3%" numero="+")
                    h5 4. Musical
                    p Sensibilidad a los sonidos, ritmos y la música. Se pueden incluir canto, uso de instrumentos y juegos rítmicos.

                  .bg-color-white.box-shadow.p-3(x="92.5%" y="2%" numero="+")
                    h5 5. Corporal-kinestésica
                    p Aprendizaje mediante el movimiento y la acción. Se pueden desarrollar juegos al aire libre, danza y manipulación de objetos.

                  .bg-color-white.box-shadow.p-3(x="100%" y="20%" numero="+")
                    h5 6. Interpersonal
                    p Habilidad para comprender a los demás y comunicarse eficazmente. Se sugieren juegos colaborativos, actividades en grupo y dinámicas de cooperación.

                  .bg-color-white.box-shadow.p-3(x="100%" y="55%" numero="+")
                    h5 7. Intrapersonal
                    p Capacidad para reflexionar sobre pensamientos y emociones. Se pueden implementar actividades de autoobservación, diarios y momentos de reflexión.

                  .bg-color-white.box-shadow.p-3(x="94%" y="86%" numero="+")
                    h5 8. Naturalista
                    p Interacción con la naturaleza y el entorno. Se pueden realizar exploraciones al aire libre, observación de plantas y animales, y huertos escolares.




      .bg-full-width-2.bg-fondo-2
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.align-items-stretch
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/4.png" alt="Estudiantes trabajando juntos, incluyendo estudiante en silla de ruedas")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Fomenta un aprendizaje inclusivo
                  p.mb-0 Reconoce que cada niño tiene una combinación única de habilidades. Permite adaptar las estrategias pedagógicas a las necesidades individuales.
            
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/5.png" alt="Profesora con estudiantes mostrando trabajos artísticos")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Promueve un ambiente educativo diverso y motivador
                  p.mb-0 Brinda múltiples formas de enseñanza para captar el interés de los niños. Permite que cada estudiante se destaque en diferentes áreas del conocimiento.
            
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/6.png" alt="Profesora mostrando un globo terráqueo a estudiante")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Responde a distintos estilos de aprendizaje
                  p.mb-0 En lugar de evaluar la inteligencia de manera unidimensional, valora diferentes talentos. Genera experiencias de aprendizaje significativas y respetuosas con los ritmos de cada niño.


      .bg-full-width.bg-color-1.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Aplicar la teoría de las inteligencias múltiples en la educación preescolar abre oportunidades para un aprendizaje más creativo y personalizado. Al diseñar estrategias que integren estos principios, se fortalece la confianza de los niños en sus propias capacidades, permitiéndoles desarrollar su máximo potencial en un entorno donde cada forma de aprendizaje es valorada.




      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Aplicación de las inteligencias múltiples en el aula preescolar
        
      .row.mb-5
        .col-lg-8
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            p.mb-0 En un aula preescolar, es común encontrar niños con diversas formas de aprender: algunos destacan en el uso de las palabras, otros disfrutan resolviendo problemas matemáticos, mientras que algunos prefieren expresarse a través del arte o la música. En lugar de ver estas diferencias como obstáculos, la teoría de las inteligencias múltiples de Howard Gardner permite considerarlas como oportunidades para enriquecer el aprendizaje. Este enfoque reconoce que cada niño tiene una manera única de comprender el mundo y, por tanto, los educadores deben fomentar esas habilidades individuales.

          p Al reconocer las diversas formas de inteligencia en los niños, los docentes pueden diseñar estrategias pedagógicas más inclusivas y efectivas, promoviendo un desarrollo integral que abarque habilidades cognitivas, emocionales y sociales desde las primeras etapas educativas.
        
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")


      h3 Inteligencias múltiples y su aplicación en el aula

      p(data-aos="fade-up").mb-4 Gardner identificó ocho inteligencias diferentes, cada una con una manera particular de aprender e interactuar con el entorno. Aplicarlas en el aula preescolar permite a los niños expresar lo que saben a través de distintas actividades.


      .titulo-figura.mb-2
        h5 Tabla 1.
        span Aplicación de las inteligencias múltiples en el aula preescolar
      .tabla-a.color-acento-botones.mb-5
        table
          caption Tipos de inteligencias múltiples y estrategias
          thead
            tr
              th(style="background-color: #453179; color: #fff") Inteligencia
              th(style="background-color: #453179; color: #fff") Descripción
              th(style="background-color: #453179; color: #fff") Estrategias en el aula
          tbody
            tr
              td Lingüística-verbal
              td Disfrutan de las historias, rimas y el uso del lenguaje.
              td Juegos de palabras, lecturas en voz alta, dramatización con marionetas, canciones.
            tr
              td Lógico-matemática
              td Habilidad para resolver problemas y reconocer patrones.
              td Juegos de lógica, rompecabezas, actividades de clasificación y construcción con bloques.
            tr
              td Espacial
              td Capacidad para visualizar y manipular formas en 3D.
              td Dibujo, modelado con arcilla, construcción con bloques, exploración de figuras geométricas.
            tr
              td Musical
              td Sensibilidad para los sonidos, ritmos y la música.
              td Canto, uso de instrumentos, juegos rítmicos, coordinación con palmas y maracas.
            tr
              td Corporal-kinestésica
              td Aprendizaje a través del movimiento y la acción.
              td Juegos al aire libre, danza, actividades físicas con manipulación de objetos.
            tr
              td Interpersonal
              td Facilidad para comprender y comunicarse con los demás.
              td Juegos colaborativos, trabajo en equipo, resolución de conflictos mediante dinámicas grupales.
            tr
              td Intrapersonal
              td Capacidad de auto-reflexión y conocimiento personal.
              td Dibujar sentimientos, hablar sobre emociones, actividades de introspección.
            tr
              td Naturalista
              td Conexión con la naturaleza y el entorno.
              td Observación de plantas y animales, exploraciones al aire libre, creación de huertos escolares.


      h3(data-aos="fade-up").mb-4 Beneficios de aplicar la teoría de las inteligencias múltiples

      p(data-aos="fade-up").mb-4 Implementar esta teoría en el aula preescolar no solo permite adaptar la enseñanza a las necesidades de los niños, sino que también ofrece múltiples ventajas:

      .bg-full-width.bg-fondo-2
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/9.png" alt="Niña pintando y realizando actividades creativas")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Aprendizaje inclusivo
                  p.mb-0 Brinda diversas oportunidades para que todos los niños puedan expresarse y aprender según sus talentos.
            
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/10.png" alt="Maestra y niño trabajando juntos en una actividad educativa")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Mayor motivación y participación
                  p.mb-0 Cuando los niños realizan actividades alineadas con sus intereses, muestran mayor entusiasmo y compromiso con el aprendizaje.
            
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/11.png" alt="Maestra con grupo de niños trabajando con bloques de construcción")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Desarrollo integral
                  p.mb-0 Se fomenta un aprendizaje equilibrado que abarca habilidades cognitivas, sociales y emocionales.



      .row.mb-5
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in").mb-4.mb-lg-0

        .col-lg-8

          .bg-color-1.p-4(data-aos="fade-left").mb-4
            p.mb-0 Cada niño posee un potencial único, y muchas veces, el sistema educativo tradicional no fomenta todas las formas de inteligencia. Aplicar la teoría de las inteligencias múltiples en el aula preescolar permite que todos los niños encuentren su propio camino hacia el conocimiento, desarrollando sus habilidades de manera personalizada.

          p(data-aos="fade-left") Como educadores, alentar y nutrir todas las formas de inteligencia ayuda a los niños a descubrir nuevas maneras de aprender y expresarse. El aula preescolar es el espacio ideal para cultivar estas inteligencias, brindándoles herramientas que les permitan crecer no solo como estudiantes, sino también como individuos completos y felices. Implementar este enfoque transforma el aprendizaje en una experiencia enriquecedora, variada y significativa, donde cada niño tiene la oportunidad de brillar.


      .bg-full-width.bg-color-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Estrategias pedagógicas para integrar las inteligencias múltiples
              p.mb-4(data-aos="fade-right") Los invitamos a leer el documento Estrategias pedagógicas para integrar las inteligencias múltiples, donde se analizan enfoques innovadores para diseñar experiencias de aprendizaje inclusivas en preescolar. A través de actividades adaptadas a las distintas formas de aprender, este enfoque fomenta la motivación, el aprendizaje significativo y la equidad en el aula.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Estrategias pedagógicas para integrar las inteligencias múltiples
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/13.png', alt='')


      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
              
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="http://historico.upel.edu.ve:81/revistas/index.php/revinvest/article/view/4114" target="_blank" rel="noopener noreferrer") Guzmán, B., & Castro, S. (2017). Las inteligencias múltiples en el aula de clases. Revistas de investigación, 29(58).
              
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.polodelconocimiento.com/ojs/index.php/es/article/view/5705" target="_blank" rel="noopener noreferrer") Zambrano, M. E. Z., & Sacoto, J. H. C. (2023). La neurodidáctica como disciplina para potenciar las inteligencias múltiples en niños de preescolar. Polo del Conocimiento, 8(6), 664-689.
              
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=84Xa9Dkvq8M" target="_blank" rel="noopener noreferrer") Editorial Círculo Rojo. (2015, 24 de febrero). Inteligencias Múltiples - (Booktrailer) [Video]. YouTube.
              
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=PBj_7HtVdnE" target="_blank" rel="noopener noreferrer") Prensa Escuela EC. (2021, 30 de marzo). Inteligencias múltiples [Video]. YouTube.
            
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>
