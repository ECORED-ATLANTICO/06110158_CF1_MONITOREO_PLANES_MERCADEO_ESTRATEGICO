export default {
  global: {
    Name: 'Sistema de monitoreo',
    Description:
      'Este componente aborda el diseño de sistemas de monitoreo aplicados al plan de mercadeo, integrando modelos estratégicos, indicadores clave, herramientas de seguimiento y procedimientos de supervisión. El aprendiz desarrollará habilidades para estructurar, ajustar y validar sistemas que garanticen trazabilidad, coherencia y mejora continua en contextos comerciales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },

      // ---------------- TEMA 1 ----------------
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistema de monitoreo',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '1.1', titulo: 'Concepto', hash: 't_1_1' },
          { numero: '1.2', titulo: 'Propósito', hash: 't_1_2' },
          { numero: '1.3', titulo: 'Estructura', hash: 't_1_3' },
          {
            numero: '1.4',
            titulo: 'Relación con el Ciclo de mercadeo',
            hash: 't_1_4',
          },
          { numero: '1.5', titulo: 'Tipos', hash: 't_1_5' },
        ],
      },

      // ---------------- TEMA 2 ----------------
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Componentes del sistema de monitoreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Actividades del plan de mercadeo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Indicadores de desempeño - KPIs',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Herramientas de seguimiento',
            hash: 't_2_3',
          },
          { numero: '2.4', titulo: 'Frecuencia y responsables', hash: 't_2_4' },
        ],
      },

      // ---------------- TEMA 3 ----------------
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Relación actividades del plan y sistema de monitoreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Mapeo de actividades vs. indicadores',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Priorización de componentes',
            hash: 't_3_2',
          },
          { numero: '3.3', titulo: 'Ajustes', hash: 't_3_3' },
        ],
      },

      // ---------------- TEMA 4 ----------------
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Procedimiento de monitoreo',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '4.1', titulo: 'Concepto', hash: 't_4_1' },
          { numero: '4.2', titulo: 'Finalidad', hash: 't_4_2' },
          { numero: '4.3', titulo: 'Etapas', hash: 't_4_3' },
          { numero: '4.4', titulo: 'Documentación', hash: 't_4_4' },
          { numero: '4.5', titulo: 'Trazabilidad', hash: 't_4_5' },
        ],
      },

      // ---------------- TEMA 5 ----------------
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Herramientas de seguimiento',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '5.1', titulo: 'Tipos', hash: 't_5_1' },
          { numero: '5.2', titulo: 'Tecnologías', hash: 't_5_2' },
          { numero: '5.3', titulo: 'Manuales', hash: 't_5_3' },
        ],
      },

      // ---------------- TEMA 6 ----------------
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Indicadores de seguimiento',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '6.1', titulo: 'Concepto', hash: 't_6_1' },
          { numero: '6.2', titulo: 'Características', hash: 't_6_2' },
          { numero: '6.3', titulo: 'Tipos', hash: 't_6_3' },
          {
            numero: '6.4',
            titulo: 'Proceso de diseño y aplicación',
            hash: 't_6_4',
          },
        ],
      },

      // ---------------- TEMA 7 ----------------
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Conciliación del sistema de monitoreo',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '7.1', titulo: 'Criterios de selección', hash: 't_7_1' },
          {
            numero: '7.2',
            titulo: 'Inconsistencias - coherencia',
            hash: 't_7_2',
          },
          { numero: '7.3', titulo: 'Ajustes', hash: 't_7_3' },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Análisis de marketing digital',
      referencia:
        'Brand24. (2024). <em>Las 19 mejores herramientas de análisis de marketing digital.</em>',
      tipo: 'Artículo',
      link:
        'https://brand24.com/blog/es/herramientas-de-analisis-de-marketing/',
    },
    {
      tema: 'Herramientas de marketing',
      referencia:
        'Makosiewicz, M. (2024). <em>12 herramientas de marketing analytics esenciales para 2025. Ahrefs.</em>',
      tipo: 'Artículo',
      link: 'https://ahrefs.com/blog/es/herramientas-marketing-analytics/',
    },
    {
      tema: 'Seguimiento y control del plan de marketing',
      referencia:
        'Mutatio. (2024). <em>Seguimiento y control del plan de marketing: métodos y herramientas.</em>',
      tipo: 'Artículo',
      link:
        'https://mutatio.es/publicaciones/seguimiento-y-control-del-plan-de-marketing-14965/',
    },
  ],
  glosario: [
    {
      termino: 'Actividades del plan',
      significado:
        'Acciones específicas definidas en el plan de mercadeo para alcanzar objetivos.',
    },
    {
      termino: 'Coherencia',
      significado:
        'Relación lógica y estratégica entre los componentes del sistema de monitoreo.',
    },
    {
      termino: 'Frecuencia',
      significado:
        'Periodicidad con la que se realiza el seguimiento de indicadores o actividades.',
    },
    {
      termino: 'Herramientas de seguimiento',
      significado:
        'Instrumentos técnicos que permiten recolectar, visualizar y analizar datos.',
    },
    {
      termino: 'Indicador de desempeño',
      significado:
        'Métrica que evalúa el cumplimiento de una actividad frente a un objetivo.',
    },
    {
      termino: 'KPI',
      significado:
        'Sigla de <em>Key Performance Indicator</em>, indicador clave de rendimiento.',
    },
    {
      termino: 'Mapeo',
      significado:
        'Proceso de vinculación entre actividades del plan y sus indicadores asociados.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'Proceso sistemático de observación y evaluación de acciones comerciales.',
    },
    {
      termino: 'Procedimiento',
      significado:
        'Secuencia organizada de pasos para ejecutar el monitoreo de forma estandarizada.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de seguir el registro de acciones, datos y decisiones en el sistema.',
    },
  ],
  referencias: [
    {
      referencia:
        'ND Marketing Digital. (s.f.). <em>Guía completa para evaluar y monitorear un plan de marketing de manera efectiva.</em>',
      link:
        'https://ndmarketingdigital.com/como-evaluar-y-monitorear-un-plan-de-marketing/',
    },
    {
      referencia:
        'Piano Marketing. (2018). <em>Control y seguimiento de un plan de marketing.</em>',
      link: 'https://www.pianomarketing.es/control-seguimiento-plan-marketing/',
    },
    {
      referencia:
        'Sánchez Noguera, J. (2024). <em>Informe gerencial sobre monitoreo de estrategias de mercadeo. Servicio Nacional de Aprendizaje – SENA.</em>',
      link:
        'https://www.studocu.com/co/document/servicio-nacional-de-aprendizaje/tecnologo-gestion-de-mercados/informe-gerencial-sobre-monitoreo-de-estrategias/105929278',
    },
    {
      referencia:
        'VirtualMailer. (s.f.). <em>Ejemplo de monitoreo y control del plan de marketing.</em>',
      link:
        'https://virtualmailer.com.ar/ejemplo-de-monitoreo-y-control-del-plan-de-marketing/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
