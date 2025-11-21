<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Procedimiento de monitoreo

    .bg_img_9.mb-3

      .row.justify-content-center.align-items-start.mb-3
        .col-8.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_4/img_1.png", class="img-fluid")
        .col-12.col-lg-8(data-aos="zoom-in-right")
          p.mb-3 Los procedimientos de monitoreo son el componente operativo que da vida al sistema de seguimiento en mercadeo estratégico, no basta con definir indicadores o herramientas; es necesario establecer cómo se aplican, quién los ejecuta y en qué condiciones.
          p.mb-5 Estos procedimientos permiten que el monitoreo sea sistemático, replicable y útil para la toma de decisiones, en este capítulo se abordan el concepto y la finalidad de los procedimientos, las etapas que conforman el proceso de supervisión, la importancia de la documentación técnica y la trazabilidad, y las buenas prácticas que facilitan su implementación.

      Separador

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10
          #t_4_1.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 4.1 Concepto
          .mb-3
      
      .row.justify-content-center.align-items-start.mb-3
        .col-8.col-lg-1.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_4/img_2.svg", class="img-fluid")
        .col-12.col-lg-9(data-aos="zoom-in-right")
          p.mb-3 Los procedimientos de monitoreo son el conjunto estructurado de métodos, actividades y pautas operativas que permiten observar, registrar, analizar y evaluar de manera sistemática el desarrollo de las estrategias, acciones y resultados establecidos en un plan de mercadeo. Su propósito es verificar el cumplimiento de los objetivos, detectar desviaciones, generar alertas tempranas y proporcionar información confiable para la toma de decisiones correctivas o de mejora.

      Separador

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-12
          #t_4_2.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 4.2 Finalidad
          .mb-3

      .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          figure
            img(src='@/assets/curso/temas/tema_4/img_3.png')
        .bloque-texto-t__texto.col-10.mb-0.p-4
          p.mb-0 Los procedimientos de monitoreo se definen como secuencias organizadas de pasos que permiten supervisar de manera sistemática las actividades del plan de mercadeo (Kotler & Keller, 2016), su finalidad principal es garantizar que el seguimiento se realice de forma estandarizada, objetiva y útil para la toma de decisiones. 

    .row.justify-content-center.align-items-start.mb-3
      .col-8.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_4/img_4.png", class="img-fluid")
      .col-12.col-lg-8(data-aos="zoom-in-right")
        p.mb-5 Entre sus características destacan la claridad operativa, la replicabilidad en distintos contextos, la orientación a resultados y la capacidad de adaptación. En empresas como <b>Alpina</b>, los procedimientos para monitorear activaciones de marca incluyen protocolos detallados que permiten verificar la presencia de materiales promocionales, la interacción con el público y el cumplimiento de horarios. Estos pasos están documentados en manuales operativos que aseguran la homogeneidad del proceso en diferentes regiones. Así, los procedimientos no solo controlan, sino que generan información estratégica para ajustar acciones y mejorar el desempeño comercial.
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10 
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Figura 5.
          span Finalidad de los procedimientos.
        figure(data-aos="zoom-in-right").mb-3
          img(src='@/assets/curso/temas/tema_4/img_5.svg', class="img-fluid d-none d-lg-block mb-0", alt="La Figura describe de manera completa el por que son importantes los procedimientos de monitoreo. Texto de la imagen: Estos procedimientos establecen qué se monitorea, cómo se hace, con qué herramientas y con qué frecuencia,lo que permite mantener la consistencia en la recolección y análisis de datos. Además, facilitan la capacitación de nuevos colaboradores, la auditoría interna y la mejora continua del sistema.")
          img(src='@/assets/curso/temas/tema_4/img_6.svg', class="img-fluid d-block d-lg-none mb-0", alt="La Figura describe de manera completa el por que son importantes los procedimientos de monitoreo. Texto de la imagen: Estos procedimientos establecen qué se monitorea, cómo se hace, con qué herramientas y con qué frecuencia,lo que permite mantener la consistencia en la recolección y análisis de datos. Además, facilitan la capacitación de nuevos colaboradores, la auditoría interna y la mejora continua del sistema.")
        figcaption(data-aos="zoom-in-right") 
          <b>Fuente:</b> SENA, 2025.

    Separador

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12
        #t_4_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 4.3 Etapas
        .mb-3

    .tarjeta.color-acento-contenido-20.rounded-0.overflow-hidden.mb-5(data-aos="fade-right")
      .row.g-0.align-items-stretch
        .col-12.col-lg-5.mb-lg-0.mb-3
          img(src="@/assets/curso/temas/tema_4/img_7.png", class="w-100 h-100", style="object-fit: cover; min-height: 200px;")
        .col-12.col-lg-7
          .p-4.p-lg-5.d-flex.align-items-center.h-100
            div
              p.mb-3 El proceso de supervisión dentro del monitoreo estratégico se compone de cinco etapas fundamentales: planificación, recolección de información, análisis de datos, retroalimentación y ajuste de acciones (Ferrell & Hartline, 2014). Cada etapa cumple una función específica y requiere herramientas, responsables y criterios definidos.
  
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10 
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Figura 6.
          span Etapas del proceso de supervisión.
        figure(data-aos="zoom-in-right").mb-3
          img(src='@/assets/curso/temas/tema_4/img_8.svg', class="img-fluid d-none d-lg-block mb-0", alt="La figura muestra las  diferentes etapas de supervisión, en el proceso de monitoreo. Texto de la figura: Planificación: establece qué se va a monitorear, con qué recursos y en qué momentos. Recolección de información: Implica el uso de formatos, checklists o plataformas digitales. Análisis: transforma los datos en información útil para la toma de decisiones. Retroalimentación: comunica los hallazgos a los equipos involucrados Ajuste de acciones:  permite modificar las acciones según los resultados obtenidos")
          img(src='@/assets/curso/temas/tema_4/img_9.svg', class="img-fluid d-block d-lg-none mb-0", alt="La figura muestra las  diferentes etapas de supervisión, en el proceso de monitoreo. Texto de la figura: Planificación: establece qué se va a monitorear, con qué recursos y en qué momentos. Recolección de información: Implica el uso de formatos, checklists o plataformas digitales. Análisis: transforma los datos en información útil para la toma de decisiones. Retroalimentación: comunica los hallazgos a los equipos involucrados Ajuste de acciones:  permite modificar las acciones según los resultados obtenidos")
        figcaption(data-aos="zoom-in-right") 
          <b>Fuente:</b> SENA, 2025.
    
    .bg_img_10.mb-3

      .row.justify-content-center.align-items-start.mb-3
        .col-8.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_4/img_10.png", class="img-fluid")
        .col-12.col-lg-8(data-aos="zoom-in-right")
          p.mb-5 Estas etapas se caracterizan por su secuencialidad, su enfoque en la mejora continua y su capacidad de adaptación a distintos tipos de actividades. En <b>Grupo Éxito</b>, por ejemplo, el monitoreo de campañas promocionales sigue esta lógica: se planifica el seguimiento, se recolectan datos de ventas y comportamiento del cliente, se analizan los resultados en dashboards, se comparten los hallazgos con los equipos de tienda y se ajustan las estrategias de precios o comunicación, esta estructura permite mantener el control sobre las acciones y mejorar su efectividad en tiempo real.

      Separador

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10
          #t_4_4.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 4.4 Documentación
          .mb-3

      .row.justify-content-center.align-items-start.mb-3
        .col-8.col-lg-1.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_4/img_11.svg", class="img-fluid")
        .col-12.col-lg-9(data-aos="zoom-in-right")
            p.mb-3 La documentación técnica es esencial para asegurar la trazabilidad del sistema de monitoreo, esta documentación incluye fichas técnicas, bitácoras de campo, informes de supervisión, matrices de indicadores y protocolos operativos (Lambin & Schuiling, 2012). 

      .row.justify-content-center.align-items-start.mb-3
        .col-12.col-lg-8(data-aos="zoom-in-right")
          p.mb-3 Su función principal es registrar de manera estructurada las acciones realizadas, los datos recolectados y las decisiones tomadas, permitiendo reconstruir el proceso en cualquier momento. La trazabilidad es clave para la auditoría, la rendición de cuentas y la mejora continua, ya que permite identificar qué se hizo, cuándo, cómo y por qué. 
          p.mb-3 Las características de una buena documentación técnica incluyen precisión, claridad, accesibilidad y actualización constante. 
        .col-8.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_4/img_12.png", class="img-fluid")
    
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10(data-aos="zoom-in-right")
          .cita-decorada
            blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-3
              .row.justify-content-center.align-items-center
                .col-2.col-lg-3.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/temas/tema_4/img_13.png', class="cita-decorada__imagen-flotante-5")
                .col-10.col-lg-9
                  p.cita-decorada__texto.mb-2.p-3 En <b>Davivienda</b>, cada campaña cuenta con una ficha técnica que describe los objetivos, responsables, indicadores, herramientas y procedimientos de monitoreo asociados. Además, se utilizan bitácoras digitales para registrar observaciones en campo, lo que permite comparar la ejecución real con la planeada, esta documentación se almacena en plataformas compartidas que facilitan el acceso y la revisión por parte de diferentes áreas. 

    .row.justify-content-center.align-items-start.mb-3
      .col-12.col-lg-10(data-aos="zoom-in-right")
        p.mb-3 Gracias a esta trazabilidad, la empresa puede identificar patrones, corregir desviaciones y tomar decisiones basadas en evidencia.
 
    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        #t_4_5.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 4.5 Trazabilidad
        .mb-3
    
    .row.justify-content-center.align-items-start.mb-3
      .col-12.col-lg-10
        .tarjeta.color-secundario-5.p-4.rounded-3.mb-0
          .row.justify-content-center.align-items-start.mb-0
            .col-8.col-lg-1.mb-lg-0.mb-3(data-aos="zoom-in-right")
              figure
                img(src="@/assets/curso/temas/tema_4/img_14.svg", class="img-fluid")
            .col-12.col-lg-11(data-aos="zoom-in-right")
              p.mb-1 La implementación de procedimientos de monitoreo requiere no solo claridad técnica, sino también compromiso organizacional y cultura de mejora continua, para una adecuada trazabilidad se requieren de algunas buenas prácticas que incluyen:
      
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10 
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Figura 7.
          span Etapas del proceso de supervisión.
        figure(data-aos="zoom-in-right").mb-3
          img(src='@/assets/curso/temas/tema_4/img_15.svg', class="img-fluid d-none d-lg-block mb-0", alt="La figura muestra las buenas prácticas para realizar trazabilidad en los procesos de monitoreo. Texto de la figura: Capacitar a los responsables en el uso de herramientas y formatos. Validar los procedimientos en campo antes de su adopción formal. Establecer canales de retroalimentación entre supervisores y ejecutores. Revisar periódicamente la pertinencia de los procedimientos. Fomentar la participación activa de los equipos en su ajuste.")
          img(src='@/assets/curso/temas/tema_4/img_16.svg', class="img-fluid d-block d-lg-none mb-0", alt="La figura muestra las buenas prácticas para realizar trazabilidad en los procesos de monitoreo. Texto de la figura: Capacitar a los responsables en el uso de herramientas y formatos. Validar los procedimientos en campo antes de su adopción formal. Establecer canales de retroalimentación entre supervisores y ejecutores. Revisar periódicamente la pertinencia de los procedimientos. Fomentar la participación activa de los equipos en su ajuste.")
        figcaption(data-aos="zoom-in-right") 
          <b>Fuente:</b> Ajustado de Kotler & Keller, 2016.
    
    .row.justify-content-center.align-items-start.mb-3
      .col-12.col-lg-10(data-aos="zoom-in-right")
        p.mb-3 Estas prácticas aseguran que el monitoreo no se convierta en una carga operativa, sino en una herramienta útil y valorada; su implementación exitosa incluye flexibilidad, participación, retroalimentación constante y enfoque en resultados.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-3
            .row.justify-content-center.align-items-center
              .col-10.col-lg-9
                p.cita-decorada__texto.mb-2.p-3 <b>Ejemplo empresarial.</b> En <b>Rappi</b>, los procedimientos de monitoreo para campañas de fidelización se diseñan de forma colaborativa entre los equipos de marketing, tecnología y atención al cliente, antes de su implementación, se realizan pruebas piloto, se ajustan los formatos y se capacita a los responsables,  además, se promueve la retroalimentación continua mediante reuniones semanales y encuestas internas; esta cultura participativa ha permitido mejorar la calidad del monitoreo, aumentar la adherencia a los procedimientos y generar aprendizajes compartidos.
              .col-2.col-lg-3.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema_4/img_17.png', class="cita-decorada__imagen-flotante-6")

</template>

<script>
export default {
  name: 'Tema4',
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
