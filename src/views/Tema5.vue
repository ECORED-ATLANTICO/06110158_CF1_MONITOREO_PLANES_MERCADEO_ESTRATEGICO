<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Herramientas de seguimiento
    
    .bloque-texto-g.bloque-texto-g--inverso.color-terciario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_5/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-3 as herramientas de seguimiento son el soporte técnico y operativo que permite ejecutar el monitoreo de manera eficiente, precisa y contextualizada, estas herramientas facilitan la recolección de datos, la visualización de indicadores, la documentación de actividades y la toma de decisiones basada en evidencia. 
        br
        br
        p.mb-0 En este capítulo se abordan los tipos de herramientas aplicables al monitoreo, las tecnologías disponibles para el seguimiento comercial y los manuales y formatos que permiten su uso operativo. 


    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        #t_5_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 5.1 Tipos
        .mb-3

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        #t_5_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 5.2 Tecnologías
        .mb-3

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        #t_5_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 5.3 Manuales
        .mb-3
    

</template>

<script>
export default {
  name: 'Tema5',
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
