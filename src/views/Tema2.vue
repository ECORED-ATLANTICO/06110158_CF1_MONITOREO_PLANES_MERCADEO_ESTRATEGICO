<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Componentes del sistema de monitoreo

    .bloque-texto-g.bloque-texto-g--inverso.color-terciario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-3 Un sistema de monitoreo eficaz se construye sobre componentes claramente definidos que permiten observar, analizar y ajustar el desempeño del plan de mercadeo.
        br
        br
        p.mb-3 Este capítulo profundiza en los elementos clave que conforman dicho sistema: las actividades del plan como base del seguimiento, los indicadores de desempeño (KPIs), las herramientas asociadas y los criterios de frecuencia y responsabilidad.  
        br
        br
        p.mb-0 A través de ejemplos aplicados, se busca que el aprendiz comprenda cómo estos componentes se articulan para garantizar la trazabilidad, pertinencia y utilidad del monitoreo estratégico.

    .bg_img_4.mb-3

      Separador

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-12
          #t_2_1.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 2.1 Actividades del plan de mercadeo.
          .mb-3
    
      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_2/img_2.png", class="img-fluid")
        .col-12.col-lg-9(data-aos="zoom-in-right")
          p.mb-3 Las actividades del plan de mercadeo constituyen el punto de partida del sistema de monitoreo, estas acciones, previamente definidas en la planeación estratégica, deben ser observables, medibles y documentables; por ejemplo, en <em>Postobón</em>, una actividad clave del plan es la activación de marca en eventos deportivos, el monitoreo se enfoca en verificar la ejecución logística, la visibilidad de la marca y la interacción con el público.
          .row.justify-content-center.align-items-center.mb-3
            .col-12.col-lg-9.order-2.order-lg-1.mb-0(data-aos="zoom-in-right")
              .tarjeta.color-secundario-5.p-4.rounded-3.mb-0
                p.mb-3 Algunos criterios para seleccionar actividades monitoreables son:
                ul.list-unstyled.mb-3
                  li.d-flex.align-items-start.mb-0
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
                    span Relevancia estratégica.
                  li.d-flex.align-items-start.mb-0
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
                    span Claridad operativa.
                  li.d-flex.align-items-start.mb-0
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
                    span Posibilidad de medición.
                  li.d-flex.align-items-start.mb-0
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
                    span Impacto esperado.
                p.mb-3 Estos criterios no llevan a las actividades monitoreables, como por ejemplo el lanzamiento de un producto, campañas digitales segmentadas, promociones en punto de venta, alianzas comerciales y activaciones de marcas entre muchas.
            .col-6.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/temas/tema_2/img_3.png', class="img-fluid")

      Separador

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-12
          #t_2_2.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 2.2 Indicadores de desempeño - KPIs
          .mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-12(data-aos="zoom-in-right")
          p.mb-3 Los KPIs (<em>Key Performance Indicators</em>) son métricas que permiten evaluar el grado de cumplimiento de las actividades del plan, deben ser específicos, relevantes y alineados con los objetivos estratégicos, algunos de los tipos en mercadeo estratégico son:

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema_2/img_4.png', class="img-fluid")
      .col-12.col-lg-8.mb-0
        .custom-slider.p-0.p-sm-0(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-12 col-md-12 col-lg-6")
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--5
                .tarjeta--slider__title.mb-3.text-center.fw-bold KPIs de alcance
                .tarjeta--slider__content.text-center Número de personas impactadas, por ejemplo: impresiones, visitas únicas.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--6
                .tarjeta--slider__title.mb-3.text-center.fw-bold KPIs de conversión
                .tarjeta--slider__content.text-center Porcentaje de usuarios que realizan una acción deseada, por ejemplo: tasa de clics, compras.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--7
                .tarjeta--slider__title.mb-3.text-center.fw-bold KPIs de fidelización
                .tarjeta--slider__content.text-center Tasa de recompra, retención de clientes.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--8
                .tarjeta--slider__title.mb-3.text-center.fw-bold KPIs financieros
                .tarjeta--slider__content.text-center Retorno sobre inversión (ROI), margen de contribución.

    Separador

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        #t_2_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.3 Herramientas de seguimiento
        .mb-3
     
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_2/img_9.png", class="img-fluid")
      .col-12.col-lg-7(data-aos="zoom-in-right")
        p.mb-3 Las herramientas de seguimiento permiten recolectar, visualizar y analizar los datos relacionados con las actividades y KPIs, su elección depende del tipo de información, el nivel de automatización y los recursos disponibles, vamos a profundizar en estas, en el capítulo 5 del presente componente formativo, por lo pronto veamos algunos ejemplos no tecnológicos:
    
    TabsB.color-primario.mb-5(data-aos="zoom-in-right")
      .py-4.py-md-5(titulo="Encuestas y formularios: percepción del cliente" :icono="require('@/assets/curso/temas/tema_2/img_10.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-9.order-2.order-lg-1.mb-0
            p.mb-3 Las encuestas y formularios son herramientas de recolección de datos cualitativos y cuantitativos que permiten conocer la percepción del cliente sobre productos, servicios o experiencias, en el monitoreo, se utilizan para evaluar indicadores de satisfacción, fidelización, recomendación y experiencia de compra, pueden aplicarse en línea, en punto de venta o por correo electrónico.
            p.mb-0 <B>Por ejemplo:</B> en <B>Decathlon</B>, se aplican encuestas post-compra para medir la satisfacción del cliente, identificar oportunidades de mejora en atención y ajustar las estrategias de fidelización según los resultados obtenidos.
          .col-6.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_11.png', class="img-fluid")
      .py-4.py-md-5(titulo="Checklists operativos: verificación de ejecución en campo" :icono="require('@/assets/curso/temas/tema_2/img_12.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-9.order-2.order-lg-1.mb-0
            p.mb-3 Los checklists son listas estructuradas de verificación que permiten confirmar el cumplimiento de tareas operativas en campo, son útiles para monitorear activaciones de marca, implementación de promociones, disposición de materiales POP y cumplimiento de protocolos, facilitan la trazabilidad, la estandarización del proceso y la retroalimentación inmediata.
            p.mb-3 <B>Por ejemplo:</B> en <B>Postobón</B>, los promotores utilizan checklists digitales para verificar la correcta ejecución de campañas en puntos de venta, incluyendo presencia de producto, visibilidad de marca y cumplimiento de horarios.
          .col-6.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_13.png', class="img-fluid")
   
    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 3.
      span Herramientas según componente.
    .tabla-a.mb-5(data-aos="zoom-in-right")
      table
        caption 
          p <b>Fuente:</b> SENA, 2025
        thead
          tr
            th.col-2.col-lg-3 Componente
            th.col-2.col-lg-4 Herramientas principales
            th.col-2.col-lg-5 Ejemplos adicionales
        tbody
          tr
            td Actividades operativas.
            td(style="text-align: left;") 
              | <em>Checklists</em> digitales (Google <em>Forms</em>, Jotform). <br>
              | Formularios de verificación (Typeform, KoboToolbox).
            td(style="text-align: left;")
              | <b>Trello:</b> seguimiento de tareas operativas. <br>
              | <b>Asana:</b> gestión de ejecución en campo. <br>
              | <b>Fulcrum:</b> recolección geolocalizada de datos.
          tr
            td KPIs digitales.
            td(style="text-align: left;")
              | Google Analytics. <br>
              | Meta Ads Manager.
            td(style="text-align: left;")
              | <b>Hotjar:</b> mapas de calor y comportamiento del usuario. <br>
              | <b>SEMRush:</b> análisis SEO y tráfico orgánico. <br>
              | <b>Google Tag Manager:</b> seguimiento de eventos personalizados.
          tr
            td KPIs comerciales.
            td(style="text-align: left;")
              | CRM (<em>Salesforce</em>, <em>HubSpot</em>). <br>
              | ERP (SAP, Odoo).
            td(style="text-align: left;")
              | <b>Zoho CRM:</b> gestión de clientes y ventas. <br>
              | <b>Microsoft Dynamics 365:</b> integración comercial y operativa. <br>
              | <b>Pipedrive:</b> seguimiento de oportunidades de venta.
          tr
            td KPIs financieros.
            td(style="text-align: left;")
              | Power BI. <br>
              | Excel avanzado.
            td(style="text-align: left;")
              | <b>Tableau:</b> visualización de datos financieros. <br>
              | <b>QuickBooks:</b> gestión contable y financiera. <br>
              | <b>Google Looker Studio:</b> reportes financieros integrados.

    .bg_img_5.mb-3

      Separador
      
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-12
          #t_2_4.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 2.4 Frecuencia y responsables.
          .mb-3
      
      p.mb-3(data-aos="zoom-in-right") La frecuencia del monitoreo debe responder al tipo de actividad, la criticidad del indicador y la capacidad operativa de la organización. Asimismo, es fundamental definir responsables claros para cada componente.
      p.mb-3(data-aos="zoom-in-right") Tipos de frecuencia:

      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_2/img_19.png", class="img-fluid")
        .col-12.col-lg-7(data-aos="zoom-in-right")
          p.mb-3 Algunos roles responsables podrían ser por ejemplo el coordinador de mercadeo, el analista de inteligencia comercial, el líder de canal o segmento o el equipo de monitoreo estratégico.

          .tarjeta.color-secundario-5.p-4.rounded-3.mb-0
            p.mb-3 <b>Ejemplo empresarial.</b> Una empresa el monitoreo de KPIs de fidelización se realiza mensualmente por el equipo de CRM, mientras que los indicadores financieros se revisan trimestralmente por la gerencia de mercadeo, podrías decir además que la frecuencia y los responsables son:
            ul.list-unstyled.mb-3
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
                span Diaria, coordinador de punto de venta.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
                span Semanal, analista de campañas.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
                span Mensual, líder de canal.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
                span Trimestral, gerente de mercadeo.

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
