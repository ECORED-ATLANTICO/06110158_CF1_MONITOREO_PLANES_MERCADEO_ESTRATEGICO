<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistema de monitoreo
    
    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        figure
          img(src='@/assets/curso/temas/tema_1/img_1.png')
      .bloque-texto-t__texto.col-10.mb-0.p-4
        p.mb-0 El monitoreo en mercadeo estratégico no es solo una práctica operativa, sino una herramienta clave para la toma de decisiones informadas, la mejora continua y la alineación con los objetivos organizacionales, este capítulo introduce los fundamentos del sistema de monitoreo, abordando su concepto, propósito, estructura y relación con el ciclo de mercadeo; a través de ejemplos empresariales y análisis aplicados, se busca que el aprendiz comprenda cómo el monitoreo se convierte en un eje articulador entre la planeación y la ejecución estratégica.
    
    .bg_img_1.mb-3

      Separador 

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10  
          #t_1_1.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 1.1 Concepto
          .mb-0

      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_1/img_2.png", class="img-fluid")
        .col-12.col-lg-7(data-aos="zoom-in-right")
          p.mb-3 El sistema de monitoreo es un conjunto estructurado de procedimientos, herramientas y métricas diseñado para observar, medir y evaluar el desempeño de las estrategias de mercadeo frente a los objetivos establecidos en un plan estratégico. Su función principal es proporcionar información oportuna y confiable que permita identificar desviaciones, analizar tendencias del mercado y ajustar las acciones comerciales en tiempo real. Este sistema integra fuentes internas y externas de información, como indicadores de ventas, participación de mercado, comportamiento del consumidor y efectividad de las campañas, garantizando una toma de decisiones basada en datos y la mejora continua de los resultados organizacionales.

      Separador

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10 
          #t_1_2.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 1.2 Propósito
          .mb-3
      
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
          p.mb-3 El propósito principal es garantizar que las actividades del plan de mercadeo se ejecuten conforme a lo previsto, identificar desviaciones, y facilitar la toma de decisiones correctivas o preventivas.
          p.mb-0 El sistema de monitoreo cumple, entre otros, los siguientes propósitos esenciales:
        .col-12.col-lg-7(data-aos="zoom-in-right")
          .custom-slider.tarjeta--fondo__slider.p-4.mb-5.rounded-3
            SlyderF().tarjeta.tarjeta--blanca.p-4.rounded-3
              .row.justify-content-center.align-items-center
                .col-12.col-lg-10.mb-0
                  h5.mb-3 Grado de avance
                  p.mb-0 Al establecer metas (por ejemplo, volumen de ventas, participación de mercado, tasa de conversión, fidelización), el sistema de monitoreo permite observar si se están logrando o si hay desvíos.
              .row.justify-content-center.align-items-center
                .col-12.col-lg-10.mb-0
                  h5.mb-3 Detección temprana de desviaciones
                  p.mb-0 Cuando una campaña no produce los resultados esperados, o un indicador clave baja, el sistema lo identifica con rapidez, lo cual abre la posibilidad de tomar acciones correctivas.
              .row.justify-content-center.align-items-center
                .col-12.col-lg-10.mb-0
                  h5.mb-3 Retroalimentación y aprendizaje
                  p.mb-0 La organización pueda ajustar tácticamente sus acciones, o incluso rever la estrategia si el entorno lo exige: el monitoreo convierte la ejecución en un proceso dinámico, no lineal.
              .row.justify-content-center.align-items-center
                .col-12.col-lg-10.mb-0
                  h5.mb-3 Datos confiables y oportunos
                  p.mb-0 Que sirvan para la toma de decisiones basada en evidencia, lo que evita decisiones intuitivas sin respaldo.
              .row.justify-content-center.align-items-center
                .col-12.col-lg-10.mb-0
                  h5.mb-3 Eficiencia y eficacia
                  p.mb-0 Al monitorear, se pueden optimizar recursos (por ejemplo, presupuesto, canales, mensajes), eliminando lo que no funcione y potenciando lo que sí.
              .row.justify-content-center.align-items-center
                .col-12.col-lg-10.mb-0
                  h5.mb-3 Rendición de cuentas
                  p.mb-0 La cultura de monitoreo promueve que los responsables de mercadeo deban mostrar resultados, y permite conectar las actividades de mercadeo con los resultados organizacionales (financieros, operativos).

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10(data-aos="zoom-in-right")
          .cita-decorada
            blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-4
              .row.justify-content-center.align-items-center
                .col-10.col-lg-10
                  p.cita-decorada__texto.mb-2.p-3 Por ejemplo, una empresa como <em>Rappi</em> utiliza sistemas de monitoreo para seguir el desempeño de sus campañas promocionales por segmento, ajustando en tiempo real las ofertas según el comportamiento del usuario, esto le permite optimizar recursos y mejorar la experiencia del cliente.
                .col-2.col-lg-2.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/temas/tema_1/img_5.png', class="cita-decorada__imagen-flotante-1")

    Separador

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10 
        #t_1_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 1.3 Estructura
        .mb-3

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10 
        p.mb-3 La estructura de un sistema de monitoreo se compone de varios elementos interrelacionados que permiten su funcionamiento eficaz, según Lambin y Schuiling (2012), los componentes esenciales incluyen:

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10 
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Figura 1.
          span Componentes básicos de un sistema de monitoreo.
        figure(data-aos="zoom-in-right").mb-3
          img(src='@/assets/curso/temas/tema_1/img_6.svg', class="img-fluid d-none d-lg-block mb-0", alt="La figura muestra cuales son los componentes básicos un sistema de monitoreo. Texto de la figura: Sistema de monitoreo. Actividades del plan de mercadeo. Indicadores de desempeño (KPIs). Herramientas de seguimiento. Frecuencia de evaluación. Responsables del monitoreo. Formatos de documentación.")
          img(src='@/assets/curso/temas/tema_1/img_7.svg', class="img-fluid d-block d-lg-none mb-0", alt="La figura muestra cuales son los componentes básicos un sistema de monitoreo. Texto de la figura: Sistema de monitoreo. Actividades del plan de mercadeo. Indicadores de desempeño (KPIs). Herramientas de seguimiento. Frecuencia de evaluación. Responsables del monitoreo. Formatos de documentación.")
        figcaption(data-aos="zoom-in-right") 
          <b>Fuente:</b> Adaptado de Lambin & Schuiling, 2012.

    .row.justify-content-center.align-items-center.mb-0
      .col-4.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema_1/img_8.png', class="img-fluid")
      .col-12.col-lg-9
        p.mb-3 Cada componente cumple una función específica, por ejemplo, los KPIs permiten medir el impacto de las acciones, mientras que las herramientas facilitan la recolección y análisis de datos, la frecuencia define cada cuánto se realiza el seguimiento, y los responsables aseguran la ejecución del proceso.
    
    .bg_img_2.mb-3

      Separador

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10 
          #t_1_4.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 1.4 Relación con el ciclo de mercadeo
          .mb-3
    
      .row.justify-content-center.align-items-center.mb-3
        .col-2.col-lg-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/tema_1/img_9.png', class="img-fluid")
        .col-12.col-lg-7.mb-lg-0.mb-0
          p.mb-3 El sistema de monitoreo está estrechamente vinculado con el ciclo de mercadeo, el cual comprende las etapas de análisis, planeación, ejecución y evaluación; el monitoreo actúa como puente entre la ejecución y la evaluación, permitiendo retroalimentar el proceso y ajustar las estrategias en función de los resultados obtenidos (Ferrell & Hartline, 2014). Esta relación se puede visualizar en la siguiente tabla:
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
            h5 Tabla 1.
            span Relación entre ciclo de mercadeo y monitoreo.
          .tabla-a.mb-5(data-aos="zoom-in-right")
            table
              caption 
                p <b>Fuente:</b> Adaptado de Ferrell & Hartline, 2014.
              thead
                tr
                  th.col-2.col-lg-3 Etapa del ciclo
                  th.col-3.col-lg-4 Rol del monitoreo
              tbody
                tr
                  td Análisis.
                  td Identifica variables clave a seguir.
                tr
                  td Planeación.
                  td Define indicadores y herramientas.
                tr
                  td Ejecución.
                  td Registra el avance de las acciones.
                tr
                  td Evaluación.
                  td Compara resultados vs. objetivos.

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10(data-aos="zoom-in-right")
          .cita-decorada
            blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-4
              .row.justify-content-center.align-items-center
                .col-10.col-lg-10
                  p.cita-decorada__texto.mb-2.p-3 Por ejemplo, en una empresa como <b>Éxito</b>, el monitoreo permite ajustar las estrategias de precios y promociones en función del comportamiento de compra observado en tiempo real, lo que mejora la efectividad de las campañas y la satisfacción del cliente.
                .col-2.col-lg-2.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/temas/tema_1/img_11.png', class="cita-decorada__imagen-flotante-2")

    Separador

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10 
        #t_1_5.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 1.5 Tipos
        .mb-3
    
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10 
        p.mb-3 El monitoreo en mercadeo estratégico no es un proceso único, sino una práctica multifacética que se adapta a las necesidades, objetivos y dinámicas de cada organización, según Kotler y Keller (2016), los tipos de monitoreo más utilizados en mercadeo estratégico son:

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10 
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Figura 2.
          span Tipos de monitoreo y sus características.
        figure(data-aos="zoom-in-right").mb-3
          img(src='@/assets/curso/temas/tema_1/img_12.svg', class="img-fluid d-none d-lg-block mb-0", alt="La figura presenta los tipos de monitoreo mas utilizados en mercadeo y sus diferentes características. Texto de la Figura: Monitoreo operativo: seguimiento diario de acciones tácticas. Foco en ejecución. Monitoreo estratégico: evaluación periódica de objetivos y KPIs. Foco en resultados. Monitoreo participativo: involucra a diferentes actores (clientes, colaboradores). Foco en percepción y experiencia. Monitoreo automatizado: uso de herramientas tecnológicas para seguimiento en tiempo real. Foco en eficiencia y precisión.")
          img(src='@/assets/curso/temas/tema_1/img_13.svg', class="img-fluid d-block d-lg-none mb-0", alt="La figura presenta los tipos de monitoreo mas utilizados en mercadeo y sus diferentes características. Texto de la Figura: Monitoreo operativo: seguimiento diario de acciones tácticas. Foco en ejecución. Monitoreo estratégico: evaluación periódica de objetivos y KPIs. Foco en resultados. Monitoreo participativo: involucra a diferentes actores (clientes, colaboradores). Foco en percepción y experiencia. Monitoreo automatizado: uso de herramientas tecnológicas para seguimiento en tiempo real. Foco en eficiencia y precisión.")
        figcaption(data-aos="zoom-in-right") 
          <b>Fuente:</b> Adaptado de Kotler & Keller (2016)
    
    .bg_img_3.mb-3

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10 
          p.mb-3 Cada tipo de monitoreo tiene aplicaciones específicas según el objetivo del plan de mercadeo, a continuación, se presentan ejemplos empresariales que ilustran su uso:

      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-3.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema_1/img_14.png', class="img-fluid")
        .col-12.col-lg-7.mb-0
          .custom-slider.p-0.p-sm-0(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-12 col-md-12 col-lg-6")
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--1
                  .tarjeta--slider__title.mb-3.text-center.fw-bold Monitoreo operativo
                  .tarjeta--slider__content.text-center En <b>Juan Valdez</b>, se realiza seguimiento diario a la ejecución de promociones en puntos de venta, verificando cumplimiento de horarios, materiales POP y atención al cliente.
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--2
                  .tarjeta--slider__title.mb-3.text-center.fw-bold Monitoreo estratégico
                  .tarjeta--slider__content.text-center En <b>Bancolombia</b>, se evalúan trimestralmente los KPIs de adquisición de clientes digitales, comparando resultados con metas proyectadas y ajustando el plan de medios.
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--3
                  .tarjeta--slider__title.mb-3.text-center.fw-bold Monitoreo participativo
                  .tarjeta--slider__content.text-center En <b>Decathlon</b>, se aplican encuestas a clientes y colaboradores para evaluar la experiencia de compra y la efectividad de las campañas de fidelización.
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--4
                  .tarjeta--slider__title.mb-3.text-center.fw-bold Monitoreo automatizado
                  .tarjeta--slider__content.text-center En <b>Mercado Libre</b>, se utilizan <em>dashboards</em> en tiempo real para monitorear el comportamiento de los usuarios, permitiendo ajustes inmediatos en la estrategia de precios y posicionamiento.
                  
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10 
          p.mb-3 La elección del tipo de monitoreo depende de factores como el objetivo del plan, el nivel de intervención requerido, la disponibilidad tecnológica y el tipo de información que se desea obtener.

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10 
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
            h5 Tabla 2.
            span Comparación de tipos de monitoreo.
          .tabla-a.mb-5(data-aos="zoom-in-right")
            table
              caption 
                p <b>Fuente:</b> SENA, 2025
              thead
                tr
                  th.col-2.col-lg-2 Criterio
                  th.col-2.col-lg-2 Operativo
                  th.col-2.col-lg-2 Estratégico
                  th.col-2.col-lg-2 Participativo
                  th.col-2.col-lg-2 Automatizado
              tbody
                tr
                  td Frecuencia.
                  td Diaria.
                  td Trimestral.
                  td Variable.
                  td Continua.
                tr
                  td Nivel de análisis.
                  td Táctico.
                  td Estratégico.
                  td Perceptual.
                  td Predictivo.
                tr
                  td Recursos requeridos.
                  td Humanos.
                  td Analíticos.
                  td Sociales.
                  td Tecnológicos.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
