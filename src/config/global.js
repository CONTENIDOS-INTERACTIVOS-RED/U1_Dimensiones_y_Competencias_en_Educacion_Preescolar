export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Lineamientos curriculares',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción a los Lineamientos Curriculares',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición y objetivos de los lineamientos curriculares',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Importancia de los lineamientos en la educación preescolar',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estándares Básicos de Aprendizaje (DBA) en Preescolar',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto y objetivos de los DBA en preescolar',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Relación de los DBA con las competencias preescolares',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Inteligencias Múltiples en la Educación Preescolar',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Teoría de las inteligencias múltiples',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Aplicación de las inteligencias múltiples en el aula preescolara',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Estándares de Aprendizaje en el Grado Preescolar',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Definición y objetivos de los estándares de aprendizaje en preescolar',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Relación entre los estándares y el currículo preescolar',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ministerio de Educación Nacional de Colombia. (2009). Lineamientos curriculares para la educación preescolar. Bogotá: MEN.',
      link:
        'https://www.mineducacion.gov.co/portal/micrositios-preescolar-basica-y-media/Direccion-de-Calidad/Referentes-de-Calidad/339975:Lineamientos-curriculares',
    },
    {
      referencia:
        'Ministerio de Educación Nacional [MEN]. (1994). Ley 115 de 1994: Ley General de Educación.',
      link:
        'https://www.mineducacion.gov.co/1621/articles-85906_archivo_pdf.pdf',
    },
    {
      referencia:
        'Gardner, H., & Asensio, M. T. M. N. M. (1998). Inteligencias múltiples. Barcelona: Paidós.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/4690236.pdf',
    },
    {
      referencia:
        'Padilla,J., Gallego, A. & Carchi, K.(2023). Importancia de los lineamientos curriculares para instituciones multigrados. Runae.',
      link: 'https://revistas.unae.edu.ec/index.php/runae/article/view/857',
    },
    {
      referencia:
        'Rodríguez Vega, D. Hadad Larios, I. & Rodríguez Vega, D. (2013). Ideas pedagógicas: análisis de la normatividad sobre Educación Preescolar en Colombia: (1 ed.). Universidad del Norte.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69916',
    },
    {
      referencia:
        'Ministerio de Educación Nacional (MEN). (2017). Estándares Básicos de Competencia.',
      link:
        'http://mineducacion.gov.co/portal/Preescolar-basica-y-media/Referentes-de-calidad/340021:Estandares-Basicos-de-competencia',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2013). Lineamientos curriculares para la educación preescolar.',
      link:
        'https://www.mineducacion.gov.co/1759/articles-339975_recurso_11.pdf',
    },
    {
      referencia: 'Derechos básicos de aprendizaje. (s/f). Edu.co.',
      link:
        'https://www.colombiaaprende.edu.co/contenidos/coleccion/derechos-basicos-de-aprendizaje',
    },
    {
      referencia:
        'MINISTERIO DE EDUCACIÓN NACIONAL. (2016). Derechos Básicos de Aprendizaje.',
      link:
        'https://wccopre.s3.amazonaws.com/Derechos_Basicos_de_Aprendizaje_Transicion.pdf',
    },
    {
      referencia:
        'Gardner, H. (1983). Frames of mind: The theory of multiple intelligences. Basic Books.',
      link:
        'https://www.scirp.org/reference/referencespapers?referenceid=2633225',
    },
    {
      referencia:
        'Cucinotta, C. (Coord.), Molina Hernández, C. (Coord.) & Sáenz De Santa María Gómez-Mampaso, B. (Coord.). (2023). Educando en valores y normas: innovación docente y transferencia de conocimiento en cuestiones de equidad y derecho: (1 ed.). Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/250395',
    },
    {
      referencia:
        'Paniagua, K. L., & Vega, M. U. (2008). La teoría de las inteligencias múltiples en la práctica docente en educación preescolar. Revista Electrónica Educare, 12(1), 135-149.',
      link:
        'https://www.researchgate.net/publication/335468457_La_teoria_de_las_inteligencias_multiples_en_la_practica_docente_en_educacion_preescolar',
    },
    {
      referencia:
        'Osorio Villegas, M. & Herrera Púa, M. (2013). Educación Preescolar en Colombia: estructura del currículo y modelo pedagógico-didáctico: (1 ed.). Universidad del Norte.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69915',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2019). Estándares de aprendizaje en educación inicial. Ministerio de Educación Nacional de Colombia.',
      link:
        'https://www.mineducacion.gov.co/portal/Preescolar-basica-y-media/Referentes-de-calidad/340021:Estandares-Basicos-de-competencia',
    },
    {
      referencia:
        'Parra, J., Gomariz, M.-Á., Hernández-Prados, M.-Á., & García-Sanz, M.-P. (2017). La participación de las familias en Educación Infantil. RELIEVE - Revista Electrónica de Investigación y Evaluación Educativa, 23(1).',
      link: 'https://doi.org/10.7203/relieve.23.1.9258',
    },
    {
      referencia:
        'Howard, S. (2010). El juego: El desarrollo del niño y la educación preescolar Waldorf: (1 ed.). Editorial Antroposófica.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/269414',
    },
    {
      referencia:
        'Ley 115 de 1994. Ley General de Educación. República de Colombia.',
      link:
        'https://www.mineducacion.gov.co/1621/articles-85906_archivo_pdf.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2009). Desarrollo infantil y competencias en la Primera Infancia. MEN.',
      link: '',
    },
    {
      referencia:
        'Magalico. (2021, agosto 14). Estándares Básicos de Competencias: definiciones clave. Magalico.',
      link:
        'https://magalico.com/estandares-basicos-de-competencias-definiciones-clave/',
    },
    {
      referencia:
        'Zabalza Beraza, M. A. (2016). Educación inicial y territorio: el desafío de unas escuelas infantiles integradas en su entorno: (1 ed.). Homo Sapiens Ediciones.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/177081?page=58',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje significativo',
      significado:
        'Proceso de aprendizaje en el que los estudiantes conectan nuevos conocimientos con los previos.',
    },
    {
      termino: 'Coherencia horizontal',
      significado:
        'Integración de contenidos de diferentes áreas dentro del mismo nivel educativo.',
    },
    {
      termino: 'Coherencia vertical',
      significado:
        'Continuidad en los aprendizajes a lo largo de los niveles educativos.',
    },
    {
      termino: 'Competencias socioemocionales',
      significado:
        'Habilidades relacionadas con la regulación emocional y la interacción social',
    },
    {
      termino: 'Competencias',
      significado:
        'Habilidades que los estudiantes deben desarrollar para afrontar desafíos educativos.',
    },
    {
      termino: 'Currículo integrado',
      significado:
        'Enfoque que conecta distintas áreas del conocimiento para un aprendizaje más completo.',
    },
    {
      termino: 'DBA (Estándares Básicos De Aprendizaje)',
      significado:
        'Objetivos de aprendizaje fundamentales para los niños en educación preescolar.',
    },
    {
      termino: 'Desarrollo cognitivo',
      significado:
        'Proceso de crecimiento en las capacidades mentales, como el pensamiento, el lenguaje y la resolución de problemas.',
    },
    {
      termino: 'Desarrollo integral',
      significado:
        'Enfoque educativo que abarca el crecimiento cognitivo, emocional y social de los niños.',
    },
    {
      termino: 'Educación inclusiva',
      significado:
        'Estrategias pedagógicas que promueven la participación de todos los niños, respetando sus diferencias.',
    },
    {
      termino: 'Estándares de competencias',
      significado:
        'Habilidades y conocimientos que deben adquirir los niños en educación preescolar.',
    },
    {
      termino: 'Evaluación formativa',
      significado:
        'Evaluación continua que guía el proceso de aprendizaje y mejora la enseñanza.',
    },
    {
      termino: 'Inteligencias múltiples',
      significado:
        'Teoría que reconoce diversas formas de inteligencia en los estudiantes.',
    },
    {
      termino: 'Lineamientos curriculares',
      significado:
        'Directrices que guían el desarrollo del currículo educativo en preescolar.',
    },
    {
      termino: 'Metodología activa',
      significado:
        'Enfoque pedagógico que fomenta la participación activa de los estudiantes en su proceso de aprendizaje.',
    },
  ],
}
