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
                  .tarjeta--5
                .tarjeta--slider__title.mb-3.text-center.fw-bold Pertinencia estratégica
                .tarjeta--slider__content.text-center El componente debe estar vinculado a un objetivo clave.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--6
                .tarjeta--slider__title.mb-3.text-center.fw-bold Viabilidad operativa
                .tarjeta--slider__content.text-center Debe poder ser implementado con los recursos disponibles.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--7
                .tarjeta--slider__title.mb-3.text-center.fw-bold Complementariedad
                .tarjeta--slider__content.text-center debe aportar información que complemente otros indicadores
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--8
                .tarjeta--slider__title.mb-3.text-center.fw-bold Trazabilidad
                .tarjeta--slider__content.text-center debe permitir seguir el flujo de información desde la fuente hasta la decisión.
    
    
    
    .bg_img_6.mb-3

      Separador

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12
        #t_7_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 7.2 Inconsistencias-coherencia
        .mb-3

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12
        #t_7_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 7.3 Ajustes
        .mb-3


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
