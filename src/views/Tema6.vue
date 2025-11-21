<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Indicadores de seguimiento
    
    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        figure
          img(src='@/assets/curso/temas/tema_6/img_1.png')
      .bloque-texto-t__texto.col-10.mb-0.p-4
        p.mb-0 Los indicadores de seguimiento son el instrumento clave para evaluar el progreso de las acciones de mercadeo, permiten transformar datos en información útil, visibilizar resultados, identificar desviaciones y tomar decisiones estratégicas. 
        
    .bg_img_6.mb-3

      .row.justify-content-center.align-items-center.mb-0
        .col-4.col-lg-1.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_6/img_3.svg", class="img-fluid")
        .col-12.col-lg-8(data-aos="zoom-in-right")
          p.mb-0 Este capítulo aborda el concepto y las características de los indicadores de seguimiento, los tipos más utilizados en el monitoreo comercial y el proceso para diseñarlos, validarlos y aplicarlos de forma efectiva. A través de ejemplos empresariales y recursos prácticos, se busca que el aprendiz comprenda cómo construir indicadores pertinentes, medibles y alineados con los objetivos del plan de mercadeo.

      Separador

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10
          #t_6_1.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 6.1 Concepto
          .mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-4.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_6/img_4.png", class="img-fluid")
        .col-12.col-lg-8(data-aos="zoom-in-right")
          p.mb-3 Los indicadores de seguimiento son medidas cuantitativas o cualitativas que permiten evaluar de manera continua el progreso, desempeño y efectividad de las acciones establecidas en un plan de mercadeo estratégico. Su función principal es traducir los objetivos del plan en variables observables y medibles, proporcionando información objetiva para el monitoreo y la toma de decisiones.
          p.mb-0 En el ámbito del marketing, los indicadores de seguimiento pueden enfocarse en diferentes dimensiones del desempeño, tales como:

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1.mb-3
          .custom-slider.p-0.p-sm-0(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-12 col-md-12 col-lg-6")
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--5
                  .tarjeta--slider__title.mb-3.text-center.fw-bold Indicadores comerciales
                  .tarjeta--slider__content.text-center Volumen de ventas, participación de mercado, rentabilidad, rotación de inventarios.
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--6
                  .tarjeta--slider__title.mb-3.text-center.fw-bold Indicadores de cliente
                  .tarjeta--slider__content.text-center Nivel de satisfacción, retención, fidelización, valor del cliente (CLV).
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--7
                  .tarjeta--slider__title.mb-3.text-center.fw-bold Indicadores de comunicación y promoción
                  .tarjeta--slider__content.text-center Alcance de campañas, tasa de conversión, costo por adquisición, retorno sobre la inversión publicitaria (ROAS).
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--8
                  .tarjeta--slider__title.mb-3.text-center.fw-bold Indicadores digitales
                  .tarjeta--slider__content.text-center Tráfico web, interacciones, engagement, crecimiento en redes sociales, leads generados.
        .col-8.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema_6/img_9.png', class="img-fluid")

    Separador

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12
        #t_6_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 6.2 Características
        .mb-3
    
    .tarjeta.color-acento-contenido-20.rounded-0.overflow-hidden.mb-5(data-aos="fade-right")
      .row.g-0.align-items-stretch
        .col-12.col-lg-5.mb-lg-0.mb-3
          img(src="@/assets/curso/temas/tema_6/img_10.png", class="w-100 h-100", style="object-fit: cover; min-height: 200px;")
        .col-12.col-lg-7
          .p-4.p-lg-5.d-flex.align-items-center.h-100
            div
              p.mb-0 Los indicadores de seguimiento se definen como métricas específicas que permiten observar, medir y evaluar el comportamiento de una acción o proceso en relación con un objetivo establecido (Kotler & Keller, 2016). En el contexto del monitoreo de planes de mercadeo, estos indicadores permiten verificar si las actividades se están ejecutando correctamente, si están generando los resultados esperados y si requieren ajustes, su función es convertir la información operativa en evidencia estratégica para la toma de decisiones.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10 
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Figura 8.
          span Principales características de un buen indicador de seguimiento.
        figure(data-aos="zoom-in-right").mb-3
          img(src='@/assets/curso/temas/tema_6/img_11.svg', class="img-fluid d-none d-lg-block mb-0", alt="La figura muestra las buenas prácticas para realizar trazabilidad en los procesos de monitoreo. Texto de la figura: Capacitar a los responsables en el uso de herramientas y formatos. Validar los procedimientos en campo antes de su adopción formal. Establecer canales de retroalimentación entre supervisores y ejecutores. Revisar periódicamente la pertinencia de los procedimientos. Fomentar la participación activa de los equipos en su ajuste.")
          img(src='@/assets/curso/temas/tema_6/img_12.svg', class="img-fluid d-block d-lg-none mb-0", alt="La figura muestra las buenas prácticas para realizar trazabilidad en los procesos de monitoreo. Texto de la figura: Capacitar a los responsables en el uso de herramientas y formatos. Validar los procedimientos en campo antes de su adopción formal. Establecer canales de retroalimentación entre supervisores y ejecutores. Revisar periódicamente la pertinencia de los procedimientos. Fomentar la participación activa de los equipos en su ajuste.")
        figcaption(data-aos="zoom-in-right") 
          <b>Fuente:</b> Ajustado de Kotler & Keller, 2016.
    
    Separador

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12
        #t_6_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 6.3 Tipos
        .mb-3
        
    .row.justify-content-center.align-items-center.mb-5
      .col-4.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_6/img_13.png", class="img-fluid")
      .col-12.col-lg-8(data-aos="zoom-in-right")
        p.mb-3 Los indicadores de seguimiento pueden clasificarse en distintos tipos según el aspecto que evalúan, de acuerdo con Ferrell y Hartline (2014), los más comunes en mercadeo estratégico son:
        p.mb-0 Tipos de indicadores de seguimiento y su aplicación
    
    .bg_img_6.mb-3

      Separador

      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-10
          #t_6_4.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 6.4 Proceso de diseño y aplicación
          .mb-3
        .col-12.col-lg-10
          p.mb-3 Diseñar indicadores de seguimiento requiere un proceso estructurado que garantice su pertinencia, utilidad y coherencia con los objetivos del plan, este proceso incluye tres fases: diseño, validación y aplicación. 

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10.mb-5
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
            h5 Figura 9.
            span Fases diseño de indicadores.
          figure(data-aos="zoom-in-right").mb-3
            img(src='@/assets/curso/temas/tema_6/img_21.svg', class="img-fluid d-none d-lg-block mb-0", alt="La figura muestra las buenas prácticas para realizar trazabilidad en los procesos de monitoreo. Texto de la figura: Capacitar a los responsables en el uso de herramientas y formatos. Validar los procedimientos en campo antes de su adopción formal. Establecer canales de retroalimentación entre supervisores y ejecutores. Revisar periódicamente la pertinencia de los procedimientos. Fomentar la participación activa de los equipos en su ajuste.")
            img(src='@/assets/curso/temas/tema_6/img_22.svg', class="img-fluid d-block d-lg-none mb-0", alt="La figura muestra las buenas prácticas para realizar trazabilidad en los procesos de monitoreo. Texto de la figura: Capacitar a los responsables en el uso de herramientas y formatos. Validar los procedimientos en campo antes de su adopción formal. Establecer canales de retroalimentación entre supervisores y ejecutores. Revisar periódicamente la pertinencia de los procedimientos. Fomentar la participación activa de los equipos en su ajuste.")
          figcaption(data-aos="zoom-in-right") 
            <b>Fuente:</b> SENA, 2025.
        .col-12.col-lg-10.mb-0(data-aos="fade-left")
          .cajon.color-secundario.p-4.mb-0
            p.mb-0 Las características de un buen proceso de diseño incluyen participación de los equipos involucrados, revisión técnica de las fórmulas, prueba piloto en campo y ajuste según retroalimentación. En Sura, por ejemplo, el diseño de indicadores para campañas de educación financiera incluyó talleres con los equipos de mercadeo, pruebas de medición en plataformas digitales y ajustes según los resultados obtenidos, este enfoque colaborativo permitió construir indicadores más precisos y útiles para el seguimiento.

</template>

<script>
export default {
  name: 'Tema6',
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
