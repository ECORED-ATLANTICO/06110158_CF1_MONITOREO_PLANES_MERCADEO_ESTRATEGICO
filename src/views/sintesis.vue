<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
   
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/sintesis/img_1.png", class="img-fluid")
      .col-12.col-lg-9
        p.mb-3(data-aos="fade-left") A lo largo del componente, el aprendiz desarrolla competencias para diseñar sistemas de monitoreo que respondan a las necesidades del plan de mercadeo,  se abordan los fundamentos conceptuales, la estructura operativa y la articulación con modelos estratégicos, permitiendo construir sistemas coherentes, medibles y adaptables, el enfoque está centrado en la utilidad práctica del monitoreo como herramienta de evaluación y ajuste. 
        p.mb-0 El monitoreo se presenta como un proceso dinámico que requiere revisión constante, participación activa y alineación con los objetivos organizacionales,  al finalizar, el aprendiz estará en capacidad de implementar sistemas de seguimiento efectivos, generar información estratégica y contribuir a la toma de decisiones en entornos comerciales diversos.
      
    
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="A lo largo del componente, el aprendiz desarrolla competencias para diseñar sistemas de monitoreo que respondan a las necesidades del plan de mercadeo,  se abordan los fundamentos conceptuales, la estructura operativa y la articulación con modelos estratégicos, permitiendo construir sistemas coherentes, medibles y adaptables, el enfoque está centrado en la utilidad práctica del monitoreo como herramienta de evaluación y ajuste. El monitoreo se presenta como un proceso dinámico que requiere revisión constante, participación activa y alineación con los objetivos organizacionales,  al finalizar, el aprendiz estará en capacidad de implementar sistemas de seguimiento efectivos, generar información estratégica y contribuir a la toma de decisiones en entornos comerciales diversos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
