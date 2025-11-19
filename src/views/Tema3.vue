<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1  Relación actividades del plan y sistema de monitoreo

    .tarjeta.color-acento-contenido-20.rounded-0.overflow-hidden.mb-5(data-aos="fade-right")
      .row.g-0.align-items-stretch
        .col-12.col-lg-5.mb-lg-0.mb-3
          img(src="@/assets/curso/temas/tema_3/img_1.png", class="w-100 h-100", style="object-fit: cover; min-height: 200px;")
        .col-12.col-lg-7
          .p-4.p-lg-5.d-flex.align-items-center.h-100
            div
              p.mb-3 La efectividad de un sistema de monitoreo depende en gran medida de su capacidad para reflejar fielmente las actividades del plan de mercadeo. 
              p.mb-3 Este capítulo aborda cómo mapear dichas actividades frente a los indicadores clave, cómo priorizar componentes según su impacto estratégico y cómo realizar ajustes que aseguren la alineación entre las acciones ejecutadas y el seguimiento realizado, el objetivo es que el aprendiz comprenda cómo construir una lógica de monitoreo coherente, útil y adaptable a los cambios del entorno.
  
    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        #t_3_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 3.1 Mapeo de actividades vs. indicadores
        .mb-3

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12
        #t_3_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 3.2 Priorización de componentes
        .mb-3

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        #t_3_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 3.3 Ajustes
        .mb-3


</template>

<script>
export default {
  name: 'Tema3',
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
