<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Relación actividades del plan y sistema de monitoreo

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
    
    .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-10.mb-3
          p.mb-3 El mapeo consiste en vincular cada actividad del plan de mercadeo con uno o más indicadores que permitan evaluar su desempeño, este proceso asegura que el monitoreo no se limite a datos aislados, sino que responda directamente a las acciones estratégicas.

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10 
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Figura 3.
          span Ejemplo de mapeo de actividades vs. indicador.
        figure(data-aos="zoom-in-right").mb-3
          img(src='@/assets/curso/temas/tema_3/img_2.svg', class="img-fluid d-none d-lg-block mb-0", alt="La figura muestra cuatro diferentes ejemplos de mapeo de actividades vs. indicador. Texto de la figura: Lanzamiento de producto.  Indicadores asociados: ventas iniciales, awareness, ROI. Activación en eventos. Indicadores asociados: interacciones, leads generados. Campaña en redes sociales.  Indicadores asociados: alcance, engagement, CTR. Promoción en punto de venta. Indicadores asociados: redención, ticket promedio. Alianza comercial. Indicadores asociados: nuevos clientes, cobertura.")
          img(src='@/assets/curso/temas/tema_3/img_3.svg', class="img-fluid d-block d-lg-none mb-0", alt="La figura muestra cuatro diferentes ejemplos de mapeo de actividades vs. indicador. Texto de la figura: Lanzamiento de producto.  Indicadores asociados: ventas iniciales, awareness, ROI. Activación en eventos. Indicadores asociados: interacciones, leads generados. Campaña en redes sociales.  Indicadores asociados: alcance, engagement, CTR. Promoción en punto de venta. Indicadores asociados: redención, ticket promedio. Alianza comercial. Indicadores asociados: nuevos clientes, cobertura.")
        figcaption(data-aos="zoom-in-right") 
          <b>Fuente:</b> SENA, 2025.

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_3/img_4.png", class="img-fluid")
      .col-12.col-lg-6(data-aos="zoom-in-right")
        .tarjeta.color-secundario-5.p-4.rounded-3.mb-0
          p.mb-3 Recomendaciones para el mapeo eficaz:
          ul.list-unstyled.mb-3
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
              span Asegurar que cada actividad tenga al menos un KPI relevante.
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
              span Evitar indicadores genéricos que no reflejen la acción.
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
              span o	Validar que los datos sean accesibles y confiables.      

    Separador

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        #t_3_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 3.2 Priorización de componentes
        .mb-3
    
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12
        p.mb-3 No todas las actividades ni todos los indicadores tienen el mismo peso estratégico, la priorización permite enfocar el monitoreo en los componentes que generan mayor valor, impacto o riesgo.
        p.mb-5 <b>Criterios de priorización:</b>

    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-4
            .row.justify-content-center.align-items-center
              .col-10.col-lg-9
                p.cita-decorada__texto.mb-2.p-3 Por ejemplo en <b>Claro Colombia</b>, se prioriza el monitoreo de campañas de retención de clientes de alto valor, dado su impacto directo en ingresos recurrentes.
              .col-2.col-lg-3.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema_3/img_9.png', class="cita-decorada__imagen-flotante-3")
    
    .row.justify-content-center.align-items-center.mb-3
      .col-2.col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema_3/img_10.png', class="img-fluid")
      .col-12.col-lg-7.mb-lg-0.mb-0
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 4.
          span Matriz de priorización estratégica.
        .tabla-a.mb-5(data-aos="zoom-in-right")
          table
            caption 
              p <b>Fuente:</b> SENA, 2025. 
            thead
              tr
                th.col-2.col-lg-3 Componente
                th.col-3.col-lg-2 Impacto
                th.col-3.col-lg-2 Prioridad
            tbody
              tr
                td Campaña de fidelización.
                td Alto.
                td Alta.
              tr
                td Activación en ferias.
                td Medio.
                td Media.
              tr
                td Publicaciones orgánicas.
                td Bajo.
                td Baja.
              tr
                td Promoción en <em>retail</em>.
                td Alto.
                td Alta.
              tr
                td Encuesta de satisfacción.
                td Medio.
                td Media.
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10
        p.mb-3 Para definir con precisión esta prioridad, se puede usar algunas herramientas como:

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/temas/tema_3/img_11.svg")
            h3.titulo-con-imagen__texto Matriz de impacto vs. esfuerzo 
    
    .bg_img_6.mb-3
    
      .row.justify-content-center.align-items-center.mb-3
        .col-2.col-lg-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/tema_3/img_12.png', class="img-fluid")
        .col-12.col-lg-7.mb-lg-0.mb-0
          p.mb-3 La matriz de impacto vs. esfuerzo es una herramienta visual que permite clasificar acciones, indicadores o componentes según el beneficio que generan y el nivel de esfuerzo requerido para implementarlos. Se organiza en cuatro cuadrantes:
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
            h5 Tabla 5.
            span Matriz de impacto - esfuerzo.
          .tabla-a.mb-5(data-aos="zoom-in-right")
            table
              caption 
                p <b>Fuente:</b> Adaptado de Ferrell & Hartline, 2014.
              thead
                tr
                  th.col-2.col-lg-3 Tipo de esfuerzo
                  th.col-3.col-lg-4 Alto Impacto
                  th.col-3.col-lg-4 Bajo impacto
              tbody
                tr
                  td Bajo esfuerzo.
                  td Acciones rápidas (<em>Quik wins</em>).
                  td Distracciones aceptables.
                tr
                  td Alto esfuerzo.
                  td Proyectos estratégicos.
                  td Actividades para evitar o repensar.
                tr
                  td(colspan="3", style="text-align: left;") <b>Impacto:</b> grado en que la acción contribuye a los objetivos estratégicos.
                tr
                  td(colspan="3", style="text-align: left;") <b>Esfuerzo:</b> recursos, tiempo y complejidad necesarios para ejecutarla.
      
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-10(data-aos="zoom-in-right")
            p.mb-3 Esta matriz es especialmente útil en el monitoreo comercial para decidir qué indicadores deben ser priorizados, qué ajustes son más rentables y qué acciones pueden postergarse. 

        .row.justify-content-center.align-items-center.mb-5
          .col-12.col-lg-10(data-aos="zoom-in-right")
            .cita-decorada
              blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-4
                .row.justify-content-center.align-items-center
                  .col-10.col-lg-9
                    p.cita-decorada__texto.mb-2.p-3 En <b>Rappi</b>, por ejemplo, se utiliza esta matriz para priorizar mejoras en la experiencia del usuario: si una acción tiene alto impacto en la retención y requiere poco esfuerzo técnico, se implementa de inmediato, la herramienta promueve decisiones ágiles y estratégicas, alineadas con los recursos disponibles.
                  .col-2.col-lg-3.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/temas/tema_3/img_13.png', class="cita-decorada__imagen-flotante-4")
        
        .row.justify-content-center.align-items-center.mb-3
          .col-12.col-lg-10
            .titulo-con-imagen.mb-3(data-aos="fade-right")
              .titulo-con-imagen__fondo
                img.titulo-con-imagen__imagen(src="@/assets/curso/temas/tema_3/img_11.svg")
                h3.titulo-con-imagen__texto Análisis de Pareto (80 / 20)
      
      .row.justify-content-center.align-items-start.mb-3
        .col-8.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_3/img_14.png", class="img-fluid")
        .col-12.col-lg-8(data-aos="zoom-in-right")
          p.mb-5 Es una técnica utilizada para identificar y priorizar los factores más significativos que influyen en un resultado. Se basa en el Principio de Pareto o regla del 80/20, propuesto por el economista italiano Vilfredo Pareto, quien observó que aproximadamente el 80 % de los efectos provienen del 20 % de las causas. esta herramienta ayuda a detectar cuáles componentes, variables o problemas tienen mayor incidencia sobre el desempeño de un plan de marketing. Por ejemplo, puede revelar que el 80 % de las quejas de los clientes provienen del 20 % de los productos, o que el 80 % de las ventas se concentra en el 20 % de los clientes o canales de distribución. Las etapas del análisis son las siguientes:
      
    .bg_img_7.mb-5
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-5.mb-5
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Identificación del problema
            p.mb-3 Se define con claridad el fenómeno que se desea analizar. Puede tratarse de quejas de clientes, disminución en ventas, errores en campañas, bajo rendimiento de productos, entre otros. El objetivo es establecer qué se va a medir y por qué, para orientar correctamente la recolección de datos.
            p.mb-0 <B>Ejemplo:</B> determinar las causas principales de la disminución de ventas en el último trimestre.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_15.png')

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10
        .titulo-con-imagen.mb-3(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/temas/tema_3/img_11.svg")
            h3.titulo-con-imagen__texto Árbol de decisiones estratégicas
          
    .row.justify-content-center.align-items-start.mb-3
      .col-8.col-lg-1.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_3/img_22.svg", class="img-fluid")
      .col-12.col-lg-9(data-aos="zoom-in-right")
        p.mb-5 El árbol de decisiones estratégicas es una herramienta que permite visualizar las posibles rutas de acción ante una situación, considerando alternativas, consecuencias y criterios de evaluación, se estructura como un diagrama ramificado que parte de una decisión inicial y se bifurca en opciones, cada una con sus implicaciones, en monitoreo, se utiliza para definir ajustes, validar indicadores o seleccionar herramientas según escenarios.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-4
            .row.justify-content-center.align-items-center
              .col-10.col-lg-9
                p.cita-decorada__texto.mb-2.p-3 En <b>Falabella</b>, por ejemplo, se emplea un árbol de decisiones para determinar si una campaña debe ser ajustada, pausada o escalada, según el comportamiento de los KPIs, se consideran variables como presupuesto, impacto en ventas, percepción del cliente y capacidad operativa. Esta herramienta promueve decisiones informadas, estructuradas y alineadas con los objetivos del plan.
              .col-2.col-lg-3.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema_3/img_23.png', class="cita-decorada__imagen-flotante-4")
    
    .bg_img_8.mb-3

      Separador

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10
          #t_3_3.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 3.3 Ajustes
          .mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_3/img_24.png", class="img-fluid")
        .col-12.col-lg-7(data-aos="zoom-in-right")
          p.mb-3 La alineación implica revisar periódicamente si las acciones ejecutadas están siendo monitoreadas de forma pertinente y suficiente, esto requiere ajustes tanto en los indicadores como en las herramientas y frecuencias.
          p.mb-3 En <b>Sura</b>, se identificó que las acciones de educación financiera no estaban siendo monitoreadas adecuadamente, se ajustaron los KPIs para incluir métricas de participación, satisfacción y retención del contenido.
          .tarjeta.color-secundario-5.p-4.rounded-3.mb-0
            p.mb-3 <b>Tipos de ajustes comunes:</b>
            ul.list-unstyled.mb-3
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
                span Inclusión de nuevos indicadores, por ejemplo, en un <em>webinar</em> educativo, inclusión de KPIs de retención.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
                span Cambio en la frecuencia de seguimiento, por ejemplo, en una campaña de <em>email</em>, cambio de frecuencia a semanal.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
                span Redefinición de responsables, por ejemplo, en la activación en <em>retail</em>, asignación de nuevo responsable.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF926D; font-size: 15px; line-height: 1.5;").mb-0
                span Integración de nuevas herramientas, por ejemplo, en la promoción digital, integración con <em>dashboard</em> automatizado.
            
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-10 
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
            h5 Figura 4.
            span Buenas prácticas.
          figure(data-aos="zoom-in-right").mb-3
            img(src='@/assets/curso/temas/tema_3/img_25.svg', class="img-fluid d-none d-lg-block mb-0", alt="La figura muestra tres buenas prácticas para determinar los posibles ajustes en las revisiones periódicas. Texto de la imagen: Realizar revisiones mensuales del sistema de monitoreo Involucrar a los responsables operativos en los ajustes Documentar los cambios para asegurar trazabilidad.")
            img(src='@/assets/curso/temas/tema_3/img_26.svg', class="img-fluid d-block d-lg-none mb-0", alt="La figura muestra tres buenas prácticas para determinar los posibles ajustes en las revisiones periódicas. Texto de la imagen: Realizar revisiones mensuales del sistema de monitoreo Involucrar a los responsables operativos en los ajustes Documentar los cambios para asegurar trazabilidad.")
          figcaption(data-aos="zoom-in-right") 
            <b>Fuente:</b> SENA, 2025.

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
