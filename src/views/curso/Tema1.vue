<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Introducción a los Lineamientos Curriculares'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Esta unidad inicia con el estudio de los lineamientos curriculares, un aspecto esencial para comprender la estructura educativa que orienta la educación preescolar en Colombia. Se explorarán los principios que sustentan estos lineamientos establecidos por el Ministerio de Educación Nacional (MEN) y su impacto en el desarrollo integral de los niños. Con ello, se adquirirán herramientas clave para reconocer la importancia de un currículo flexible y adaptado a las necesidades y ritmos de aprendizaje en la primera infancia.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Definición y objetivos de los lineamientos curriculares
      
    p.mb-4 Los lineamientos curriculares son directrices fundamentales que orientan el proceso de enseñanza en la educación preescolar. Definen qué debe aprender un niño, cómo debe hacerlo y qué habilidades debe desarrollar en sus primeros años. En Colombia, el MEN establece estos lineamientos con el objetivo de asegurar una educación de calidad, ajustada a las necesidades y características individuales de cada niño.

    .bg-full-width-2.bg-fondo-2
      .p-4.p-md-5
        .row.mb-5
          .col-lg-8
            .bg-color-1.p-4(data-aos="fade-left").mb-4
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 La Ley 115 de 1994 subraya la educación preescolar como el primer nivel de educación formal, estableciendo la necesidad de generar lineamientos generales para los procesos curriculares. Estos buscan brindar autonomía a las instituciones educativas, promoviendo la mejora continua de la calidad educativa y adaptando los procesos de enseñanza a los diversos contextos nacionales (MEN, 1994).

            p Asimismo, el MEN destaca la importancia de garantizar condiciones óptimas para la socialización y el desarrollo integral de los niños desde su concepción hasta los siete años. Este enfoque involucra a la familia, el grupo social, la escuela y el Estado, con el propósito de valorar y desarrollar todas las potencialidades de la infancia.

            p.mb-3 #[strong Los principales objetivos de los lineamientos curriculares son:]

            ul.lista-ul
              li 
                i.fas.fa-arrow-circle-right
                | Desarrollar competencias básicas en cuatro áreas fundamentales:
          
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")


        div.row.justify-content-center.align-items-stretch
          div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/4.svg"
                alt="Icono de habilidades cognitivas"
                style="width: 95px"
              )
              h4.mb-3.text-center Cognitivas
              p.mb-0.text-center Pensamiento crítico, resolución de problemas y curiosidad por aprender.

          div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/5.svg"
                alt="Icono de habilidades comunicativas"
                style="width: 95px"
              )
              h4.mb-3.text-center Comunicativas
              p.mb-0.text-center Expresión oral y escrita, comprensión de instrucciones y participación en conversaciones.

          div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/6.svg"
                alt="Icono de habilidades socioemocionales"
                style="width: 95px"
              )
              h4.mb-3.text-center Socioemocionales
              p.mb-0.text-center Regulación de emociones, establecimiento de relaciones saludables y reconocimiento de la diversidad.

          div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/7.svg"
                alt="Icono de habilidades físicas"
                style="width: 95px"
              )
              h4.mb-3.text-center Físicas
              p.mb-0.text-center Coordinación motora gruesa (correr, saltar, bailar) y fina (dibujar, escribir, manipular objetos), junto con la promoción de hábitos saludables.



    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            ul.lista-ul--color
              li.mb-3
                i.fas.fa-arrow-circle-right
                | #[strong Promover una educación inclusiva y equitativa]. Garantizando igualdad de oportunidades, sin importar el contexto cultural, económico, social o físico de los niños.
              
              li.mb-3
                i.fas.fa-arrow-circle-right
                | #[strong Fomentar la autonomía y el pensamiento crítico]. A través de la exploración, la experimentación y el aprendizaje significativo, evitando la simple memorización.
              
              li.mb-4.mb-lg-0
                i.fas.fa-arrow-circle-right
                | #[strong Fortalecer la convivencia y el respeto]. Promoviendo el aprendizaje del respeto por la diversidad y la importancia del cuidado del medioambiente.
          
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1/8.svg" alt="" style="max-width: 400px;").mx-auto.mb-4.mb-lg-0

    p.mb-4 Además de definir qué deben aprender los niños, los lineamientos curriculares establecen cómo deben hacerlo. Los educadores desempeñan un papel clave en la creación de ambientes de aprendizaje con las siguientes características:


    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Lúdico y participativo" :icon="require('@/assets/bullets/icon-tab-c-1.svg')")
        .row.align-items-start
          .col-md-5.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/tema1/tab-1.png", alt="").img-fluid
          .col-md-7
            h4.mb-3 Lúdico y participativo
            p.mb-3 El juego es la principal herramienta pedagógica en preescolar. A través de actividades lúdicas, los niños exploran conceptos, experimentan y desarrollan su creatividad.

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Adaptado al ritmo individual" :icon="require('@/assets/bullets/icon-tab-c-1.svg')")
        .row.align-items-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/tema1/tab-2.png", alt="").img-fluid
          .col-md-7
            h4.mb-3 Adaptado al ritmo individual
            p.mb-3 Cada niño aprende a su propio ritmo, por lo que los docentes deben adaptar las actividades para garantizar la participación y el progreso de todos.

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Basado en experiencias significativas" :icon="require('@/assets/bullets/icon-tab-c-1.svg')")
        .row.align-items-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/tema1/tab-3.png", alt="").img-fluid
          .col-md-7
            h4.mb-3 Basado en experiencias significativas
            p.mb-3 El aprendizaje debe estar conectado con la realidad y el entorno del niño, permitiéndole relacionar lo que aprende con su vida cotidiana.


    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Los lineamientos curriculares buscan formar niños capaces, responsables y felices, en un ambiente de respeto, colaboración y amor por el aprendizaje. Además, garantizan que los primeros años de educación sienten bases sólidas para su desarrollo integral, preparándolos para enfrentar retos, construir relaciones positivas y convertirse en ciudadanos conscientes y comprometidos con su comunidad y el mundo.



    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Importancia de los lineamientos en la educación preescolar
      
    p.mb-4 Los lineamientos curriculares son esenciales para orientar el proceso educativo en la educación preescolar. Funcionan como una guía que permite a los docentes organizar y planificar sus actividades, asegurando que todos los estudiantes, independientemente de su contexto, tengan acceso a una educación de calidad.

    p.mb-4 #[strong Su importancia radica en los siguientes aspectos:]

    .row.mb-4
      .col-lg-8
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Garantizan coherencia y consistencia en la enseñanza")
            .col-12
              p Permiten establecer un marco común que orienta la educación hacia el aprendizaje inclusivo y equitativo (Padilla, Gallego y Carchi, 2023). Aseguran que los procesos formativos respondan a las necesidades individuales de los estudiantes.
          
          .row(titulo="Fomentan una educación integral")
            .col-12
              p Según Rodríguez Vega, Hadad Larios y Rodríguez Vega (2013), los lineamientos buscan desarrollar la condición humana mediante la formación de personas conscientes y comprometidas con la convivencia, la justicia y la preservación del entorno. No se limitan a los primeros conceptos académicos, sino que promueven el desarrollo cognitivo, emocional, social y físico a través de actividades lúdicas y orientadas al aprendizaje significativo.
          
          .row(titulo="Promueven la equidad en la educación")
            .col-12
              p En Colombia, el MEN (2009) enfatiza que los lineamientos garantizan igualdad de oportunidades para todos los niños, sin importar su contexto socioeconómico. La educación se convierte en una herramienta para reducir brechas sociales en lugar de profundizar desigualdades.
          
          .row(titulo="Facilitan enfoques flexibles y creativos en la enseñanza")
            .col-12
              p Los docentes pueden adaptar sus estrategias pedagógicas para atender la diversidad de estilos de aprendizaje. Según Gardner (1998), las inteligencias múltiples permiten diferentes formas de pensar y aprender, por lo que los lineamientos curriculares favorecen la personalización del proceso educativo.
      
      .col-lg-4.d-none.d-lg-block.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png" alt="Profesor explicando en el aula").img-fluid



    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Estos lineamientos no solo orientan la práctica docente, sino que constituyen un pilar fundamental para garantizar una educación de calidad, inclusiva y equitativa. Su propósito es dar a cada niño la oportunidad de desarrollarse plenamente y sentar bases sólidas para su futuro académico y personal.

        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Una vez comprendida la importancia de los lineamientos curriculares, es necesario profundizar en los Estándares Básicos de Aprendizaje (DBA), los cuales están estrechamente relacionados con estos lineamientos.
    
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repository.javeriana.edu.co/handle/10554/12361" target="_blank" rel="noopener noreferrer") Medina, B. L. (2012). Pedagogía de los sentidos, un pretexto didáctico desde el arte, la expresión y el lenguaje, para construir significado en los niños y niñas de educación preescolar.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redacademica.edu.co/sites/default/files/2022-08/1%20Lineamiento%20para%20la%20ed%20inicial.pdf" target="_blank" rel="noopener noreferrer") del Distrito, A. S. D. E. E. (s/f). Lineamiento pedagógico y curricular para la educación inicial en el distrito. Edu.co. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=yF4pG5rckbI" target="_blank" rel="noopener noreferrer") Universidad Pedagógica Nacional. (2015, 2 de diciembre). Lineamientos de educación inicial [Video]. YouTube.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=75mfvrTY8As" target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (2014, 2 de junio). Presentación Lineamientos para el mejoramiento de la Educación Inicial [Video]. YouTube.
          
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
