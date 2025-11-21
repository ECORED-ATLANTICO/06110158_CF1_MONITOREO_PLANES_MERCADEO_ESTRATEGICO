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
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_1.png')})`}"
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
    
    .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_5/img_2.png", class="img-fluid")
        .col-12.col-lg-7(data-aos="zoom-in-right")
          p.mb-3 Las herramientas de seguimiento pueden clasificarse en cuatro tipos principales según su función: herramientas de recolección, herramientas de visualización, herramientas de análisis y herramientas de documentación (Kotler & Keller, 2016). Cada tipo cumple un rol específico dentro del sistema de monitoreo y se selecciona en función de la actividad a supervisar, el tipo de indicador y el nivel de intervención requerido.
          .row.justify-content-center.align-items-center.mb-3
            .col-12.col-lg-12.order-2.order-lg-1.mb-0(data-aos="zoom-in-right")
              .tarjeta.color-secundario-5.p-4.rounded-3.mb-0
                ul.list-unstyled.mb-3
                  li.d-flex.align-items-start.mb-0
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
                    span Las herramientas de recolección permiten capturar datos en campo o en línea.
                  li.d-flex.align-items-start.mb-0
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
                    span Las de visualización organizan la información en formatos comprensibles.
                  li.d-flex.align-items-start.mb-0
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
                    span Las de análisis procesan los datos para generar hallazgos.
                  li.d-flex.align-items-start.mb-0
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
                    span Las de documentación registran las acciones y decisiones tomadas.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-3
            .row.justify-content-center.align-items-center
              .col-10.col-lg-9
                p.cita-decorada__texto.mb-2.p-3 En <b>Decathlon</b>, por ejemplo, se utilizan formularios digitales para recolectar datos de experiencia del cliente, dashboards para visualizar KPIs de fidelización, herramientas de análisis predictivo para anticipar comportamientos de compra y bitácoras operativas para documentar las acciones realizadas en tienda, esta combinación permite un monitoreo integral, ágil y alineado con los objetivos comerciales.
              .col-2.col-lg-3.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema_5/img_3.png', class="cita-decorada__imagen-flotante-7")

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        #t_5_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 5.2 Tecnologías
        .mb-3

    .row.justify-content-center.align-items-start.mb-5
      .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_5/img_4.png", class="img-fluid")
      .col-12.col-lg-7(data-aos="zoom-in-right")
        p.mb-3 El avance tecnológico ha ampliado significativamente las posibilidades de seguimiento comercial, ofreciendo soluciones digitales que permiten monitorear en tiempo real, automatizar procesos y generar reportes inteligentes, entre las tecnologías más utilizadas se encuentran los sistemas CRM (<em>Customer Relationship Management</em>), los <em>dashboards</em> interactivos (como Power BI o Tableau), las plataformas de analítica web (como Google Analytics), los sistemas ERP (<em>Enterprise Resource Planning</em>) y las aplicaciones móviles de supervisión para la recolección de datos en campo. Estas tecnologías se caracterizan por su capacidad de integración, su escalabilidad y su enfoque en la eficiencia operativa.

    .bg_img_7.mb-5
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-12
          SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-2.mb-0
            .row.justify-content-center.align-items-center
              .col-12.col-lg-5.order-2.order-lg-1.mb-0.p-3
                h5 CRM (<em>Customer Relationship Management</em>)
                p.mb-3 El CRM es una plataforma tecnológica que permite gestionar la relación con los clientes, registrar interacciones, segmentar audiencias y hacer seguimiento al comportamiento de compra. En el contexto del monitoreo comercial, el CRM facilita el análisis de indicadores como tasa de conversión, frecuencia de compra, valor del cliente y efectividad de campañas, Además, permite automatizar procesos de contacto, generar reportes personalizados y tomar decisiones basadas en datos históricos. 
                p.mb-0 <B>Ejemplo:</B> en <b>Bancolombia</b>, el CRM se utiliza para monitorear la respuesta de clientes a campañas de productos financieros, segmentando por perfil y canal de contacto, lo que permite ajustar mensajes y mejorar la tasa de conversión.            
              .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-0
                figure
                  img(src='@/assets/curso/temas/tema_5/img_5.png')
            .row.justify-content-center.align-items-center
              .col-12.col-lg-5.order-2.order-lg-1.mb-0
                h5 Google Analytics
                p.mb-3 Google Analytics es una herramienta gratuita que permite analizar el comportamiento de los usuarios en sitios web y aplicaciones, ofrece métricas como número de visitas, duración de sesión, tasa de rebote, páginas más vistas y conversiones. En el sistema de monitoreo, esta herramienta es clave para evaluar el impacto de campañas digitales, identificar puntos de fuga y optimizar la experiencia del usuario. 
                p.mb-0 <B>Ejemplo:</B> en <b>Falabella</b>, se utiliza Google Analytics para monitorear el tráfico generado por campañas en redes sociales, evaluando qué productos atraen más visitas y qué páginas tienen mayor tasa de abandono, lo que orienta ajustes en diseño y contenido.            
              .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-0
                figure
                  img(src='@/assets/curso/temas/tema_5/img_6.png')
            .row.justify-content-center.align-items-center
              .col-12.col-lg-5.order-2.order-lg-1.mb-0
                h5 <em>Dashboards</em> personalizados 
                p.mb-3 Los <em>dashboards</em> son paneles interactivos que permiten visualizar indicadores clave de desempeño (KPIs) en tiempo real; herramientas como Power BI y Tableau integran datos de múltiples fuentes (CRM, ERP, formularios, redes sociales) y los presentan de forma gráfica, facilitando el análisis comparativo, la detección de tendencias y la toma de decisiones, son especialmente útiles para gerencias y equipos estratégicos. 
                p.mb-0 <B>Ejemplo:</B> en <em>Grupo Nutresa</em>, se utilizan dashboards en Power BI para monitorear el desempeño de campañas por canal, región y segmento, permitiendo identificar rápidamente qué acciones generan mayor retorno y cuáles requieren ajustes.            
              .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-0
                figure
                  img(src='@/assets/curso/temas/tema_5/img_7.png')


    Separador
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10
        #t_5_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 5.3 Manuales

    .row.justify-content-center.align-items-start.mb-5
      .col-12.col-lg-7
        .row.justify-content-center.align-items-start
          .col-10.col-lg-4.mb-lg-0.mb-4(data-aos="zoom-in-right")
            figure
              img(src="@/assets/curso/temas/tema_5/img_8.png", class="img-fluid")
          .col-12.col-lg-8.mb-lg-0.mb-4(data-aos="zoom-in-right")
            p.mb-4 Para que las herramientas de seguimiento sean efectivas, es necesario acompañarlas de manuales y formatos que orienten su uso operativo, los manuales explican paso a paso cómo utilizar cada herramienta, qué datos registrar, cómo interpretar los resultados y cómo reportarlos.
        .row.justify-content-center.align-items-start
          .col-3.col-lg-2.mb-lg-0.mb-3
            figure
              img(src="@/assets/curso/temas/tema_5/img_9.svg", class="img-fluid")
          .col-12.col-lg-10
            p.mb-0 Los formatos, por su parte, estandarizan la recolección de información, facilitando la comparación entre actividades, periodos o regiones, estos recursos deben ser claros, accesibles y adaptables a distintos niveles de experiencia y contexto organizacional.
          
      .col-12.col-lg-5(data-aos="zoom-in-left")
        .bloque-texto-b.color-acento-contenido-5.p-2
          i.fas.fa-quote-right
          .bloque-texto-b__texto
            p.mb-3 <strong>Los manuales y formatos no solo facilitan la operación, sino que fortalecen la cultura de seguimiento y mejora continua.</strong>
            <br><br>
            p.mb-3 (Lambin & Schuiling, 2012).
            <br><br>
          i.fas.fa-square-full(style="text-align: right;")
    
    .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-12 
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
            h5 Tabla 6.
            span Recursos operativos para el uso de herramientas de seguimiento.
          .tabla-a.mb-5(data-aos="zoom-in-right")
            table
              caption 
                p <b>Fuente:</b> SENA, 2025
              thead
                tr
                  th.col-3.col-lg-3 Recurso operativo
                  th.col-4.col-lg-4 Descripción
                  th.col-5.col-lg-5 Importancia en el monitoreo
              tbody
                tr
                  td Manuales de uso por herramienta.
                  td(style="text-align: left; pa") Documentos que explican paso a paso cómo utilizar cada herramienta de seguimiento.
                  td(style="text-align: left;") Garantizan el uso correcto, reducen errores y facilitan la capacitación de nuevos responsables.
                tr
                  td Formatos de recolección de datos.
                  td(style="text-align: left;") Plantillas estructuradas para registrar información en campo o en línea.
                  td(style="text-align: left;") Permiten estandarizar la captura de datos y asegurar la trazabilidad del proceso.
                tr
                  td Guías de interpretación de indicadores.
                  td(style="text-align: left;") Documentos que explican cómo leer, analizar y contextualizar los KPIs.
                  td(style="text-align: left;") Facilitan la toma de decisiones basada en evidencia y evitan interpretaciones erróneas.
                tr
                  td Protocolos de reporte y retroalimentación.
                  td(style="text-align: left;") Procedimientos que definen cómo se comunican los resultados y se generan ajustes.
                  td(style="text-align: left;") Promueven la mejora continua, la transparencia y la articulación entre equipos.
                tr
                  td Plantillas de evaluación de actividades.
                  td(style="text-align: left;") Herramientas para valorar el cumplimiento, calidad y resultados de las acciones.
                  td(style="text-align: left;") Ayudan a identificar desviaciones, validar logros y ajustar estrategias operativas.
                


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
