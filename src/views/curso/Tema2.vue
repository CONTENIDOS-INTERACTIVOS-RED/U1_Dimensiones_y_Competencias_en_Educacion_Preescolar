<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Derechos básicos de aprendizaje (DBA)'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


      .row.mb-4
        .col-lg-8
          .bg-color-1.p-4.mb-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/1b.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 En el marco de la normatividad curricular, es importante distinguir entre dos referentes clave del Ministerio de Educación Nacional (MEN): los Estándares Básicos de Competencias y los Derechos Básicos de Aprendizaje (DBA). Los Estándares Básicos de Competencias, emitidos en 2006 por el Ministerio de Educación Nacional, orientan lo que deben saber y saber hacer los estudiantes en el ciclo de educación básica en áreas como lenguaje, matemáticas y ciencias.

      
          p(data-aos="fade-left") Por su parte, los Derechos Básicos de aprendizaje (DBA) son una herramienta que complementa estos estándares, especialmente para grados iniciales (para los cuales aún no se han emitido estándares básicos), proponiendo aprendizajes esenciales que facilitan la planeación pedagógica y responden a los planteamientos de formación integral que orientan los procesos que atienden a la primera infancia en las diferentes dimensiones del desarrollo. Estos últimos fueron emitidos también por el Ministerio de Educación Nacional en 2016
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2b.png", data-aos="zoom-in")
      
  
      
      .bg-full-width-2.bg-fondo-3
        .px-4.px-md-5.pt-4.pt-md-5

          #t_2_1.titulo-segundo(data-aos="flip-up")
            h2 #[span 2.1] Concepto y objetivos de los DBA en preescolar
        
          p.mb-4 El Ministerio de Educación Nacional (MEN), en el marco de la Ley de Desarrollo Integral para la Primera Infancia, estableció los Derechos Básicos de Aprendizaje (DBA) para el grado de Transición. Estos constituyen un conjunto de aprendizajes esenciales que los niños adquieren mediante la interacción con su entorno, otras personas y consigo mismos. Dichos aprendizajes se fomentan a través de experiencias y ambientes pedagógicos que incluyen:


          div.row.justify-content-center.align-items-stretch.mb-5
            div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/2.svg"
                  alt="Icono de juego"
                  style="width: 95px"
                )
                h4.mb-3.text-center El juego
                p.mb-0.text-center Como estrategia principal para el aprendizaje.

            div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/3.svg"
                  alt="Icono de expresiones artísticas"
                  style="width: 95px"
                )
                h4.mb-3.text-center Las expresiones artísticas
                p.mb-0.text-center Que estimulan la creatividad y la comunicación.

            div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/4.svg"
                  alt="Icono de exploración del entorno"
                  style="width: 95px"
                )
                h4.mb-3.text-center La exploración del entorno
                p.mb-0.text-center Promoviendo el descubrimiento y la curiosidad.

            div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/5.svg"
                  alt="Icono de literatura"
                  style="width: 95px"
                )
                h4.mb-3.text-center La literatura
                p.mb-0.text-center Para el desarrollo del lenguaje y la imaginación

      h3(data-aos="fade-up") Importancia de los DBA en la educación preescolar

      p.mb-4 Los DBA desempeñan un papel crucial en la educación preescolar porque:

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-1.png")
              .col-lg-7
                h5 Proporcionan una guía estructurada
                p Permiten a los docentes definir qué deben aprender los estudiantes y cómo evaluar su progreso. Evitan la improvisación en la enseñanza, garantizando la adquisición de conocimientos y habilidades esenciales.
            
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-2.png")
              .col-lg-7
                h5 Fomentan el desarrollo integral
                p Se centran en áreas clave como la comunicación, la resolución de problemas y la interacción social. Sientan las bases para el desarrollo cognitivo, emocional y social, facilitando la adquisición de habilidades más complejas en el futuro (MEN, 2016).
            
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-3.png")
              .col-lg-7
                h5 Son flexibles y adaptables
                p No son estándares rígidos, sino que permiten ajustarse a las necesidades individuales de cada niño. Facilitan la personalización del aprendizaje y la aplicación de estrategias pedagógicas diferenciadas (Gardner, 1983).
            
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-4.png")
              .col-lg-7
                h5 Garantizan equidad educativa
                p Buscan que todos los niños, sin importar su contexto socioeconómico, tengan acceso a una educación de calidad. Favorecen la inclusión de aquellos en riesgo de exclusión social (Cucinotta, Molina Hernández y Sáenz de Jubera María Gómez-Mampaso, 2023).
                

      .bg-full-width-2.bg-fondo-4
        .px-4.px-md-5.pt-4.pt-md-5

          h3(data-aos="fade-up") ¿Cómo impactan los DBA en la práctica docente?

          p(data-aos="fade-up") Los DBA no solo establecen lo que debe enseñarse, sino que también proporcionan herramientas para mejorar la enseñanza y el aprendizaje. En este sentido, permiten a los docentes:


          div.row.justify-content-center.align-items-stretch.mb-5
            div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/icon-1.svg"
                  alt="Icono de orientación clara"
                  style="width: 95px"
                )
                h4.mb-3.text-center Orientación clara
                p.mb-0.text-center Los docentes cuentan con una guía estructurada para planificar sus clases y evaluar el progreso de los niños.

            div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/icon-2.svg"
                  alt="Icono de identificación de necesidades"
                  style="width: 95px"
                )
                h4.mb-3.text-center Identificación de necesidades
                p.mb-0.text-center Permiten detectar áreas donde los estudiantes requieren mayor apoyo.

            div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/icon-3.svg"
                  alt="Icono de flexibilidad pedagógica"
                  style="width: 95px"
                )
                h4.mb-3.text-center Flexibilidad pedagógica
                p.mb-0.text-center Favorecen la aplicación de estrategias diferenciadas según las habilidades y ritmos de aprendizaje de cada niño.

            div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/icon-4.svg"
                  alt="Icono de preparación para la vida"
                  style="width: 95px"
                )
                h4.mb-3.text-center Preparación para la vida
                p.mb-0.text-center No se enfocan solo en metas académicas, sino en el desarrollo de habilidades prácticas como la resolución de conflictos y el pensamiento crítico.



      .row.mb-5
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in").mb-4.mb-lg-0

        .col-lg-8
          p(data-aos="fade-left") Los DBA constituyen una herramienta clave para garantizar una educación de calidad en preescolar, asegurando que cada niño tenga acceso a oportunidades de aprendizaje que le permitan desarrollar su máximo potencial. Así, se contribuye a la construcción de una sociedad más equitativa, donde todos los estudiantes puedan crecer y aprender en igualdad de condiciones.

          .bg-color-3.p-4(data-aos="fade-left").mb-4
            p.mb-0 Al reflexionar sobre los DBA, es importante recordar que su propósito no es solo definir contenidos educativos, sino facilitar el crecimiento, desarrollo y éxito de cada niño. #[strong ¿Está listo para aplicar esta herramienta y transformar la educación preescolar?]



      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Relación de los DBA con las competencias preescolares


      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Los Estándares Básicos de Aprendizaje (DBA) son una herramienta esencial en la educación preescolar, ya que no solo definen qué se debe enseñar, sino que también brindan un marco para asegurar que los niños desarrollen habilidades clave. A través de estos estándares, los docentes pueden estructurar un aprendizaje que no se limite a la adquisición de conocimientos académicos, sino que también fomente el desarrollo emocional, social y físico.

          .bg-color-5.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Imaginemos un aula preescolar donde el docente debe garantizar que cada niño aprenda según sus necesidades y ritmos. En este contexto, los DBA establecen metas claras en áreas como la comunicación, la resolución de problemas y la interacción social. De este modo, proporcionan una guía estructurada para el aprendizaje, asegurando que todos los niños progresen de manera significativa.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")


      h3(data-aos="fade-up") Competencias clave en los DBA

      p(data-aos="fade-up") Los DBA se enfocan en habilidades fundamentales del desarrollo infantil, como:


      .bg-full-width.bg-color-2
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img(src="@/assets/curso/tema2/9.svg" alt="Educador explicando" style="max-width: 400px;").mx-auto.mb-4.mb-lg-0
            .col-lg-8
              ul.lista-ul--color
                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Comunicación verbal y no verbal:] desarrollo del lenguaje, comprensión de instrucciones y expresión de emociones.
                
                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Resolución de conflictos y trabajo en equipo:] aprendizaje de normas de convivencia y colaboración con otros niños.
                
                li.mb-4.mb-lg-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Desarrollo de la autonomía:] fortalecimiento de la independencia en actividades cotidianas.



      .bg-full-width.bg-fondo-5
        .px-4.px-md-5.pt-4.pt-md-5

          p(data-aos="fade-up") Además, los DBA promueven el juego como estrategia de aprendizaje, lo que permite que los niños:


          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/10.png" alt="Niños en clase atendiendo")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Primero
                  p.mb-0 Exploren conceptos a través de la simulación y la imaginación.
            
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/11.png" alt="Niños realizando actividades creativas")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Segundo
                  p.mb-0 Desarrollen la creatividad y la capacidad de resolver problemas.
            
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/12.png" alt="Clase con profesora y alumnos")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Tercero
                  p.mb-0 Aprendan de manera lúdica y participativa.



      h3(data-aos="fade-up") Inclusión y equidad en los DBA

      p(data-aos="fade-up") Los DBA favorecen un enfoque inclusivo en el aula, permitiendo que el docente adapte sus estrategias pedagógicas a las necesidades de cada niño. Esto garantiza:

      .bg-full-width.bg-color-5
        .p-4.p-md-5
          ul.lista-ul--color
            li.mb-3
              i.fas.fa-arrow-circle-right
              | #[strong Oportunidades de aprendizaje para todos], sin importar su contexto.

            li.mb-3
              i.fas.fa-arrow-circle-right
              | #[strong Diversidad en las metodologías de enseñanza], atendiendo distintos estilos de aprendizaje.

            li.mb-3
              i.fas.fa-arrow-circle-right
              | #[strong Un ambiente educativo equitativo], que favorece la participación de todos los estudiantes.


      .bg-full-width-2.bg-fondo-6
        .px-4.px-md-5.pt-4.pt-md-5

          h3(data-aos="fade-up") Evaluación y seguimiento del aprendizaje

          p(data-aos="fade-up") Los DBA también ofrecen una estructura clara para evaluar el progreso de los estudiantes. Esta evaluación permite que los docentes:


          div.row.justify-content-center.align-items-stretch.mb-5
            div.col-md-6.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/icon-1-2.svg"
                  alt="Icono de comunicación y expresión"
                  style="width: 95px"
                )
                h4.mb-3.text-center Comunicación y expresión
                p.mb-0.text-center Identificar avances en el lenguaje y la interacción verbal.

            div.col-md-6.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/icon-2-2.svg"
                  alt="Icono de interacción social"
                  style="width: 95px"
                )
                h4.mb-3.text-center Interacción social
                p.mb-0.text-center Evaluar la convivencia y el trabajo en equipo.

            div.col-md-6.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/icon-3-2.svg"
                  alt="Icono de desarrollo físico y emocional"
                  style="width: 95px"
                )
                h4.mb-3.text-center Desarrollo físico y emocional
                p.mb-0.text-center Verificar el crecimiento integral del niño.



          .row.mb-5
            .col-lg-4.d-none.d-sm-block
              figure
                img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in").mb-4.mb-lg-0

            .col-lg-8
              p(data-aos="fade-left") Gracias a esta guía, los docentes pueden ajustar sus estrategias pedagógicas según las necesidades del grupo.

              .bg-color-3.p-4(data-aos="fade-left").mb-4
                p.mb-0 Los DBA son una herramienta clave para garantizar una educación de calidad en preescolar. No solo orientan el proceso de enseñanza, sino que aseguran que cada niño tenga acceso a oportunidades de aprendizaje que favorezcan su desarrollo integral. A través de ellos, se busca que los niños crezcan en un entorno educativo inclusivo, equitativo y adaptado a sus necesidades individuales.



      .bg-full-width.bg-color-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Función de los DBA en el desarrollo de competencias
              p.mb-4(data-aos="fade-right") Los invitamos a leer el documento #[strong Función de los DBA en el desarrollo de competencias], donde se analiza el papel fundamental de los Estándares Básicos de Aprendizaje en la educación preescolar. A través de una enseñanza flexible y adaptativa, los DBA permiten que cada niño desarrolle competencias clave como la comunicación, la resolución de problemas y la colaboración, promoviendo la equidad educativa y el aprendizaje significativo.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Función de los DBA en el desarrollo de competencias

            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/14.png', alt='')

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
              
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://repositorio.beceneslp.edu.mx/jspui/handle/20.500.12584/770" target="_blank" rel="noopener noreferrer") Hernández García, J. G. (2021). El fortalecimiento de los dispositivos básicos de aprendizaje, en el pensamiento matemático, para alumnos de educación preescolar canalizados al servicio de apoyo CAPEP.
              
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://santillanaplus.com.co/pdf/comparacion-entre-los-dba-las-normas-tecnicas-curriculares.pdf" target="_blank" rel="noopener noreferrer") Peñas, C. A. (2016). Comparación entre los derechos básicos de aprendizaje (DBA) y otras normas técnicas curriculares. Fundación SIGE (Sistema Integral de Gestión Educativa). Colombia. Consultado el, 7(1), 2019.
              
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=gds9SCNGfrc" target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (2018, 24 de abril). COLOMBIA APRENDE - Primera Infancia [Video]. YouTube.
              
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=2OH_iw5q8Z0" target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (2015, 5 de julio). La Ministra de Educación presenta los Derechos Básicos de Aprendizaje [Video]. YouTube.
            
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
