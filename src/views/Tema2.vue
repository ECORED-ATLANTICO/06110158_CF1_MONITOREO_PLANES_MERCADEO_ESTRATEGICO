<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Componentes del sistema de monitoreo

    .bloque-texto-a.bloque-texto-a.color-terciario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__texto.p-4
        p.mb-0 Think about all the possibilities. A good composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Nothing of without working at it. Be impossible to ignore.
          br
          br
          | Stand so tall that they can’t look past you. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect accept possibility of failure. 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_1.png')})`}"
      )

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12
        #t_2_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.1 Actividades del plan de mercadeo.
        .mb-3

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12
        #t_2_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.2 Indicadores de desempeño - KPIs
        .mb-3

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        #t_2_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.3 Herramientas de seguimiento
        .mb-3

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12
        #t_2_4.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.4 Frecuencia y responsables.
        .mb-3


</template>

<script>
export default {
  name: 'Tema2',
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
