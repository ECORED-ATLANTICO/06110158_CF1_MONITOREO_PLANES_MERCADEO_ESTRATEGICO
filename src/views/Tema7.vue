<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Conciliación del sistema de monitoreo
      
    .row.justify-content-center.align-items-center.mb-0
      .col-4.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_7/img_1.png", class="img-fluid")
      .col-12.col-lg-8(data-aos="zoom-in-right")
        p.mb-0 La conciliación y el ajuste del sistema de monitoreo son procesos clave para garantizar que los indicadores, fuentes de información y mecanismos de evaluación estén alineados con los objetivos estratégicos del plan de mercadeo. Este capítulo aborda los criterios para seleccionar componentes coherentes, identificar inconsistencias y oportunidades de mejora, y validar el sistema como herramienta de gestión.  

    Separador

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10
        #t_7_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 7.1 Criterios de selección
        .mb-0
      .col-12.col-lg-10
        p.mb-3 La coherencia entre los componentes del sistema de monitoreo implica que los indicadores, fuentes de datos, responsables y frecuencias estén articulados con los objetivos estratégicos del plan, para lograrlo, se deben aplicar criterios de selección que garanticen pertinencia, complementariedad y trazabilidad. Según Kaplan y Norton (2008), un sistema de monitoreo efectivo debe reflejar la lógica del plan estratégico, conectar los indicadores con los resultados esperados y facilitar la retroalimentación continua.
        p.mb-0 Los principales criterios de selección incluyen:

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema_7/img_2.png', class="img-fluid")
      .col-12.col-lg-8.mb-0
        .custom-slider.p-0.p-sm-0(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-12 col-md-12 col-lg-6")
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--9
                .tarjeta--slider__title.mb-3.text-center.fw-bold Pertinencia estratégica
                .tarjeta--slider__content.text-center El componente debe estar vinculado a un objetivo clave.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--10
                .tarjeta--slider__title.mb-3.text-center.fw-bold Viabilidad operativa
                .tarjeta--slider__content.text-center Debe poder ser implementado con los recursos disponibles.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--11
                .tarjeta--slider__title.mb-3.text-center.fw-bold Complementariedad
                .tarjeta--slider__content.text-center debe aportar información que complemente otros indicadores
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--12
                .tarjeta--slider__title.mb-3.text-center.fw-bold Trazabilidad
                .tarjeta--slider__content.text-center debe permitir seguir el flujo de información desde la fuente hasta la decisión.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-3
            .row.justify-content-center.align-items-center
              .col-10.col-lg-9
                p.cita-decorada__texto.mb-2.p-3 En <b>Grupo Éxito</b>, por ejemplo, se seleccionan indicadores que conectan el comportamiento del consumidor con las metas de rentabilidad, utilizando fuentes como CRM, encuestas y reportes de ventas, esta coherencia permite tomar decisiones informadas y ajustar las tácticas de forma ágil.
              .col-2.col-lg-3.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema_7/img_7.png', class="cita-decorada__imagen-flotante-6")
    
    .bg_img_14.mb-3

      Separador

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-12
          #t_7_2.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 7.2 Inconsistencias-coherencia
          .mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_7/img_8.png", class="img-fluid")
        .col-12.col-lg-9(data-aos="zoom-in-right")
          p.mb-3 Durante la implementación del sistema de monitoreo, es común encontrar inconsistencias entre los indicadores, las fuentes de información o los resultados obtenidos, estas inconsistencias pueden deberse a errores de diseño, falta de datos, duplicidad de métricas o desalineación con los objetivos, identificarlas oportunamente permite realizar ajustes que mejoran la precisión y utilidad del sistema.
          .row.justify-content-center.align-items-center.mb-1
            .col-12.col-lg-8.order-2.order-lg-1.mb-0(data-aos="zoom-in-right")
              .tarjeta.color-secundario-5.p-4.rounded-3.mb-0
                p.mb-3 Las principales inconsistencias incluyen:
                ul.list-unstyled.mb-1
                  li.d-flex.align-items-start.mb-0
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
                    span Indicadores duplicados o contradictorios.
                  li.d-flex.align-items-start.mb-0
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
                    span Fuentes de datos no confiables o desactualizadas.
                  li.d-flex.align-items-start.mb-0
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
                    span Frecuencias de medición incompatibles.
                  li.d-flex.align-items-start.mb-0
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
                    span Desalineación entre resultados y metas.
            .col-6.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/temas/tema_7/img_9.png', class="img-fluid").h-100
    
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10(data-aos="zoom-in-right")
          .cita-decorada
            blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-3
              .row.justify-content-center.align-items-center
                .col-10.col-lg-9
                  p.cita-decorada__texto.mb-2.p-3 En <b>Bancolombia</b>, por ejemplo, se identificó que algunos indicadores de experiencia del cliente no reflejaban el comportamiento real en canales digitales, esto llevó a ajustar las métricas, incorporar nuevas fuentes como analítica web y redefinir los objetivos de satisfacción, el resultado fue un sistema más preciso y útil para la toma de decisiones.
                .col-2.col-lg-3.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/temas/tema_7/img_10.png', class="cita-decorada__imagen-flotante-6")

      .row.justify-content-center.align-items-center.mb-3
        .col-2.col-lg-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/tema_7/img_11.png', class="img-fluid")
        .col-12.col-lg-7.mb-lg-0.mb-0
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
            h5 Tabla 7.
            span Ejemplos de inconsistencias y ajustes en sistemas de monitoreo.
          .tabla-a.mb-3(data-aos="zoom-in-right")
            table
              caption 
                p <b>Fuente:</b> SENA, 2025.
              thead
                tr
                  th.col-2.col-lg-3 Inconsistencias
                  th.col-3.col-lg-4 Ajustes en sistemas de monitoreo
              tbody
                tr
                  td Indicador duplicado.
                  td Se elimina o fusiona con otro indicador.
                tr
                  td Fuente de datos débil.
                  td Se reemplaza por una fuente más confiable.
                tr
                  td Frecuencia no alineada.
                  td Se ajusta la periodicidad de medición.
                tr
                  td Meta desactualizada.
                  td Se redefine según contexto estratégico.

    Separador

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12
        #t_7_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 7.3 Ajustes
        .mb-3

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12(data-aos="zoom-in-right")
        .bloque-texto-g.bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema_7/img_12.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Para ajustar el sistema de monitoreo, se debe realizar su validación, la cual consiste en verificar que todos sus componentes estén alineados con los objetivos estratégicos del plan de mercadeo, este proceso implica revisar la lógica del sistema, contrastar los resultados obtenidos con las metas definidas y asegurar que la información generada sea útil para la toma de decisiones. Según Mintzberg et al. (2005), un sistema validado debe permitir aprender del entorno, ajustar las acciones y anticipar escenarios futuros.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-5
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Figura 10.
          span Pasos para validar el sistema.
        figure(data-aos="zoom-in-right").mb-3
          img(src='@/assets/curso/temas/tema_7/img_13.svg', class="img-fluid d-none d-lg-block mb-0", alt="La figura presenta cuatro pasos para validar un sistema de monitoreo, el cual deben estar alineados con los objetivos estratégicos del plan de mercadeo. Texto de la figura:  Revisión de la alineación estratégica. Evaluación de la utilidad de los indicadores. Análisis de la calidad de los datos. Y retroalimentación de los responsables del monitoreo.")
          img(src='@/assets/curso/temas/tema_7/img_14.svg', class="img-fluid d-block d-lg-none mb-0", alt="La figura presenta cuatro pasos para validar un sistema de monitoreo, el cual deben estar alineados con los objetivos estratégicos del plan de mercadeo. Texto de la figura:  Revisión de la alineación estratégica. Evaluación de la utilidad de los indicadores. Análisis de la calidad de los datos. Y retroalimentación de los responsables del monitoreo.")
        figcaption(data-aos="zoom-in-right") 
          <b>Fuente:</b> SENA, 2025.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-3
            .row.justify-content-center.align-items-center
              .col-10.col-lg-9
                p.cita-decorada__texto.mb-2.p-3 En <b>Alpina</b>, se realiza una validación semestral del sistema de monitoreo, en la que se revisan los indicadores clave, se contrastan con los resultados del mercado y se ajustan según las prioridades estratégicas, este proceso garantiza que el sistema siga siendo relevante y funcional en contextos cambiantes.
              .col-2.col-lg-3.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema_7/img_15.png', class="cita-decorada__imagen-flotante-2")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_7/img_16.png", class="img-fluid")
      .col-12.col-lg-7(data-aos="zoom-in-right")
        .tarjeta.color-secundario-5.p-4.rounded-2.mb-0
          p.mb-3 Para un acorde proceso de validación del sistema de monitoreo se deberían formular preguntas para los temas relevantes:
          ul.list-unstyled.mb-2
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
              span Alineación estratégica: ¿Refleja los objetivos del plan?
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
              span Utilidad de indicadores: ¿Facilita la toma de decisiones?
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
              span Calidad de datos: ¿Son confiables y actualizados? 
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
              span Retroalimentación interna: ¿Los responsables lo consideran útil?
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-8(data-aos="zoom-in-right")
        .bloque-texto-b.color-primario-5.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 Más allá de los indicadores, está el impacto. Más allá del monitoreo, está el propósito. Que cada acción estratégica sea también una expresión de servicio y gratitud.
            i.fas.fa-quote-right

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-8(data-aos="zoom-in-right")
        TarjetaAudio.color-secundario.mb-0.p-4(
          texto="<em>Buyer</em> Persona"
          :audio="require('@/assets/curso/podcast/Podcast Organización y presentación persuasiva de propuestas comerciales.wav')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )


</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
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
