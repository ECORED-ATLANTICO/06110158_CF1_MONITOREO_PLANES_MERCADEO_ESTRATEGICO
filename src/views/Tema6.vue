<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Indicadores de seguimiento

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        #t_6_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 6.1 Concepto
        .mb-3

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12
        #t_6_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 6.2 Características
        .mb-3

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12
        #t_6_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 6.3 Tipos
        .mb-3

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        #t_6_4.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 6.4 Proceso de diseño y aplicación
        .mb-3



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
