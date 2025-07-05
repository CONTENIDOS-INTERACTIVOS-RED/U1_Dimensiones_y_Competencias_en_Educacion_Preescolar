<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno(subTitulo="Introducción")
    .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-md-5.pt-4
  
      .row.mb-3
        .col-lg-8
  
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            p.mb-0 En esta unidad, se profundizará en la orientación estatal para el diseño de los currículos en programas dirigidos a la primera infancia y la educación preescolar. Esta orientación parte de una base normativa sólida conformada por documentos legales como la #[b Ley General de Educación (Ley 115 de 1994)], el #[b Decreto 1860 de 1994], el #[b Decreto 1411 de 2022] y el #[b Plan Nacional de Atención Integral a la Primera Infancia (PAI)]. Estos instrumentos delinean un marco que promueve el desarrollo integral de los niños y niñas desde un enfoque de derechos, inclusión, participación y juego como eje articulador.
          
          p(data-aos="fade-right") Al finalizar esta unidad, se espera que los estudiantes logren #[b analizar e interpretar los marcos normativos que sustentan el currículo de la educación inicial y preescolar], comprendiendo su interrelación con los #[b lineamientos curriculares] y los #[b Derechos Básicos de Aprendizaje (DBA)]. Además, se busca reconocer cómo estos elementos orientan la planeación educativa y fortalecen procesos pedagógicos centrados en el niño, sin reemplazar los estándares, pero sí enriqueciéndolos con una mirada diferencial acorde con la formación integral.
  
        .col-lg-4
          figure
            img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")


      p Durante el desarrollo de la unidad, se abordarán temas como:

      .bg-full-width.bg-fondo-5.mb-5
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.mb-5
            .col-lg-4
              figure
                img(src='@/assets/curso/intro/2.png', alt='')
      
            .col-lg-8
      
              SlyderF(columnas="col-12 col-lg-6")
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/intro/3.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  p.text-center La estructura y principios fundamentales de la Ley 115 de 1994 y los decretos reglamentarios.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/intro/4.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  p.text-center El papel del Plan Nacional de Atención Integral a la Primera Infancia (PAI) como articulador de políticas educativas.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/intro/5.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  p.text-center El sentido y función de los Derechos Básicos de Aprendizaje (DBA) en los grados iniciales.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/intro/6.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  p.text-center La relación entre estos marcos normativos y los lineamientos curriculares del MEN.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/intro/7.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  p.text-center Estrategias para integrar estos fundamentos en propuestas pedagógicas inclusivas y centradas en el juego, la participación y el desarrollo de todas las dimensiones del niño.
      
  
      .bg-full-width.bg-color-2
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/intro/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-2 Este recorrido formativo permitirá a los futuros educadores y agentes pedagógicos construir propuestas curriculares pertinentes y contextualizadas, que respondan a las características y necesidades de la infancia en Colombia.

              p.mb-0 #[b ¡Comencemos este camino de comprensión y transformación educativa para la primera infancia!].
  </template>
