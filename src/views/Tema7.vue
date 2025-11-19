<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Conciliación del sistema de monitoreo

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        #t_7_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 7.1 Criterios de selección
        .mb-3

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
