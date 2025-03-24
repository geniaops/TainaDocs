---
sidebar_position: 2
---

# IA para la Ciudadanía: Plan del Sistema

## Sistema de interacción ciudadana basado en IA

El proyecto "IA para la Ciudadanía" consiste en desarrollar un sistema de interacción ciudadana basado en IA que centraliza la recolección y el procesamiento de datos mediante ventanillas inteligentes. Estas ventanillas, diseñadas como "Pop-Ups", funcionan como nodos de comunicación con los ciudadanos, proporcionando asistencia, información y recomendaciones personalizadas a los usuarios. La finalidad principal de este sistema es potenciar la participación ciudadana en el desarrollo del sistema de Gobierno Inteligente "Taína".

Estas ventanillas inteligentes emergen en puntos de alta concurrencia como centros comerciales, en plataformas digitales como Gob.do y la app Carpeta Ciudadana, y a través del Call Center del Estado. Funcionan como sensores en la captura de interacciones ciudadanas, almacenando estos datos para procesarlos posteriormente.

A medida que los usuarios interactúan con el sistema, Taína recolecta estos datos para anticipar necesidades y proporcionar recomendaciones de servicios, respuestas a preguntas frecuentes y notificaciones contextuales de cada solución. En última instancia, el propósito es que los ciudadanos puedan tramitar sus servicios mediante Taína, que integra una red de agentes de IA.

## Plan de Acción

### 1. Recolección y preparación de datos

1. Recopilar todos los datos relevantes del centro de llamadas, incluidos manuales y otros documentos esenciales.

Para República Dominicana, hemos identificado dos fuentes esenciales de datos, las cuales serán proveídas por OGTIC a través de la plataforma en la nube:

- **CRM del Call Center del Estado**: Manuales con información de instituciones públicas, procedimientos establecidos y respuestas oficiales, necesarios para entrenar la IA y garantizar interacciones ciudadanas precisas y alineadas con los protocolos.
- **Transcripciones de llamadas**: Conversaciones convertidas de audio a texto, estructuradas en una base de datos para desarrollar modelos de machine learning que predigan demanda y personalizan los servicios del asistente virtual.
- **GOB.DO**: Portal Único de Servicios del Gobierno Dominicano | www.gob.do

Ejemplo de conversaciones convertidas a Plantilla de Base de Datos para entrenar el modelo:

| ID | Características | Etiqueta/Clase | Descripción | Fuente |
|----|----------------|----------------|-------------|--------|
| 1 | [valor1, valor2, ...] | Clase A | Descripción del caso 1 | Fuente 1 |
| 2 | [valor1, valor2, ...] | Clase B | Descripción del caso 2 | Fuente 2 |
| 3 | [valor1, valor2, ...] | Clase A | Descripción del caso 3 | Fuente 3 |
| 4 | [valor1, valor2, ...] | Clase C | Descripción del caso 4 | Fuente 4 |

Descripción de columnas:
- **ID**: Identificador para cada entrada
- **Características**: Lista de características o atributos del dato, que podrían ser valores numéricos o categóricos.
- **Etiqueta/Clase**: La clase o categoría a la que pertenece el dato (por ejemplo, 'Quejas', 'Sugerencias', 'Información solicitada', 'Comentarios', 'Urgente', 'Consulta general', 'Feedback positivo')
- **Descripción del dato o contexto**: (por ejemplo: Mensaje recibido de una ciudadana reportando el servicio de incentivos X pues carece de recursos debido a Y; solicitando una pronta solución)
- **Fuente**: punto gob, app/web (Plataforma ciudadanIA), correo electrónico, redes sociales, o llamada telefónica al centro de atención.

2. Almacenar los datos de manera segura en el centro de datos de OGTIC, asegurando el cumplimiento con las regulaciones de protección de datos.

El almacenamiento seguro de los datos en el centro de datos de OGTIC es un pilar fundamental del proyecto.
- **Seguridad y cifrado**: se implementarán estándares avanzados como AES para proteger los datos en reposo y en tránsito, junto con técnicas de anonimización y pseudonimización para salvaguardar la privacidad.
- **Controles de acceso**: se establecerán autenticaciones multifactor y biométricas, además de protocolos estrictos para evitar accesos no autorizados.

### 2. Desarrollo del sistema de interacción ciudadana

1. Entrenar un asistente virtual utilizando los datos recopilados, sirviendo como canal de comunicación para facilitar la interacción inicial con los ciudadanos.

Para entrenar el asistente virtual de Taína, identificamos que los datos existentes en el CRM del Call Center del Estado son un excelente punto de partida. Este centro recibe un promedio de 150,000 llamadas mensuales, lo que proporciona un volumen significativo de datos para modelar patrones comunes de interacción y garantizar que Taína responda efectivamente a las necesidades de los ciudadanos.

El gobierno nos ha proporcionado un ejemplo que ilustra las capacidades que se esperan para el sistema de interacción ciudadana inteligente.

Como parte de la implementación, también se planea desplegar ventanillas inteligentes físicas, conocidas como "Pop-Ups #YoSoyFuturo", en ubicaciones estratégicas y de alta concurrencia, como centros comerciales. Estas ventanillas estarán equipadas con sistemas interactivos que aprovechan la IA para atender a los ciudadanos de forma autónoma y en tiempo real.

2. Realizar pruebas con usuarios reales para obtener retroalimentación y evaluar la eficacia del asistente como medio de comunicación.

Para evaluar la eficacia de Taína como medio de comunicación, llevaremos a cabo pruebas con usuarios reales en colaboración con la Universidad del Caribe (UNICARIBE). Los estudiantes de UNICARIBE serán seleccionados como un grupo representativo para interactuar con el sistema y proporcionar retroalimentación valiosa sobre su experiencia.

### 3. Implementación y despliegue

1. Implementar el sistema en diferentes canales, incluyendo:

- **Ventanillas inteligentes físicas (Pop-Ups)**: Instaladas en centros comerciales y otros lugares de alta concurrencia, estas ventanillas estarán equipadas con pantallas táctiles y sistemas de reconocimiento de voz para facilitar la interacción con los ciudadanos.
- **Plataforma web (Gob.do)**: Integración del asistente virtual en el portal único de servicios del gobierno dominicano, permitiendo a los ciudadanos acceder a la asistencia desde cualquier dispositivo con conexión a internet.
- **Aplicación móvil (Carpeta Ciudadana)**: Incorporación del asistente en la aplicación móvil oficial del gobierno, facilitando el acceso a servicios y asistencia desde dispositivos móviles.
- **Call Center**: Implementación en el sistema de call center existente, permitiendo a los operadores humanos colaborar con Taína para proporcionar un mejor servicio a los ciudadanos.

2. Establecer indicadores clave de rendimiento (KPI) basados en la retroalimentación de los usuarios, como la precisión de las respuestas y el tiempo de respuesta del asistente.

| Satisfacción de los beneficiarios | Eficiencia operativa | Calidad de datos | Adopción y uso |
|-----------------------------------|----------------------|------------------|---------------|
| -Índice de satisfacción del usuario (CSAT). <br/> -Net Promoter Score (NPS). | -Tiempo de respuesta del sistema. <br/> -Tasa de disponibilidad del sistema. | -Precisión de datos. <br/> -Tasa de errores de datos. | -Número de usuarios activos. <br/> -Frecuencia de uso. |

| Impacto financiero | Cumplimiento de objetivos | Seguridad y conformidad | Feedback y mejora continua |
|--------------------|--------------------------|-----------------------|---------------------------|
| -Retorno de la inversión (ROI). <br/> -Costo por transacción. | -Cumplimiento de milestones. <br/> -Alcance de objetivos específicos. | -Número de incidentes de seguridad. <br/> -Cumplimiento normativo. | -Número de sugerencias de mejora. <br/> -Tiempo de implementación de mejoras. |

### 4. Análisis y mejora continua

1. Analizar los datos recopilados para identificar patrones y tendencias en las interacciones ciudadanas.

El análisis de datos es una parte fundamental del proyecto, ya que nos permitirá:
- **Identificar patrones de comportamiento**: Comprender cómo los ciudadanos interactúan con el sistema y qué servicios son más solicitados.
- **Detectar áreas de mejora**: Identificar puntos de fricción en la experiencia del usuario y oportunidades para optimizar el sistema.
- **Personalizar la experiencia**: Adaptar las respuestas y recomendaciones del asistente según las preferencias y necesidades individuales de los ciudadanos.

2. Utilizar los insights obtenidos para mejorar continuamente el sistema y adaptarlo a las necesidades cambiantes de los ciudadanos.

La mejora continua del sistema se basará en:
- **Retroalimentación directa**: Comentarios y sugerencias proporcionados por los usuarios durante sus interacciones con el sistema.
- **Análisis de métricas**: Evaluación de los KPI establecidos para identificar áreas de mejora y medir el impacto de los cambios implementados.
- **Innovación tecnológica**: Incorporación de nuevas tecnologías y enfoques para mejorar la eficacia y eficiencia del sistema.

## Beneficios Esperados

1. **Mejora en la experiencia ciudadana**: Proporcionar un acceso más rápido y eficiente a los servicios gubernamentales, reduciendo los tiempos de espera y simplificando los procesos.
2. **Optimización de recursos**: Reducir la carga de trabajo en los canales tradicionales de atención al ciudadano, permitiendo a los funcionarios enfocarse en tareas más complejas y de mayor valor añadido.
3. **Recolección de datos valiosos**: Obtener información detallada sobre las necesidades y preferencias de los ciudadanos, lo que permitirá mejorar continuamente los servicios ofrecidos.
4. **Inclusión digital**: Facilitar el acceso a servicios gubernamentales a través de múltiples canales, incluyendo opciones digitales y físicas, para llegar a un mayor número de ciudadanos.

## Conclusión

El sistema de interacción ciudadana basado en IA "Taína" representa un avance significativo en la modernización de los servicios gubernamentales en República Dominicana. Al centralizar la recolección y procesamiento de datos a través de ventanillas inteligentes, el sistema no solo mejorará la experiencia de los ciudadanos al interactuar con el gobierno, sino que también proporcionará información valiosa para la toma de decisiones y la mejora continua de los servicios públicos.

Los datos adicionales recopilados mejorarán significativamente la capacidad de Taína para anticipar demandas y necesidades ciudadanas al identificar patrones frecuentes, personalizar servicios según comportamientos y preferencias de los usuarios, y optimizar las respuestas basadas en análisis de contexto enriquecido con datos abiertos. Al integrar datos históricos y en tiempo real, Taína podrá ofrecer asistencia proactiva, sugiriendo soluciones antes de que sean solicitadas, mientras la retroalimentación directa de los usuarios permitirá ajustar continuamente el sistema para hacerlo más eficiente y receptivo.
