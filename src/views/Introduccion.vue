<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-5.mb-lg-0.mb-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/introduccion/img_1.png", class="img-fluid")
      .col-12.col-lg-7
        p.mb-3(data-aos="fade-left") El monitoreo estratégico en mercadeo es mucho más que una práctica operativa; es una herramienta de gestión que permite verificar el progreso de las acciones, evaluar su impacto y tomar decisiones basadas en evidencia.  
        p.mb-0 Este componente formativo invita al aprendiz a comprender cómo se estructura un sistema de monitoreo, qué elementos lo componen y cómo se articula con el ciclo de mercadeo, a través de ejemplos aplicados, se exploran conceptos clave como indicadores de desempeño, herramientas de seguimiento, frecuencia de evaluación y responsables del proceso , además, se profundiza en la relación entre las actividades del plan y los indicadores, el diseño de procedimientos de supervisión, la documentación técnica y la trazabilidad. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-1.mb-lg-0.mb-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/introduccion/img_2.svg", class="img-fluid d-none d-lg-block mb-0")
      .col-12.col-lg-9
        p.mb-3(data-aos="fade-left") El componente también aborda el uso de tecnologías para el seguimiento comercial, la construcción de indicadores pertinentes y la conciliación del sistema con los objetivos estratégicos; el propósito es que el aprendiz pueda diseñar, ajustar y validar sistemas de monitoreo que aporten valor real a la gestión comercial y promuevan la mejora continua.  
        
    
    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/M51PYVE0FmE?si=zAQBPtJt8U7q4D3z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Sistema de monitoreo

</template>

<script>
export default {
  name: 'Introduccion',
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
