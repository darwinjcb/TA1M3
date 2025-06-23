# Actividad: Mini Proyecto Backend con NestJS
## Objetivo:
Construir un pequeño backend usando NestJS que incluya al menos una de estas funcionalidades: una API GraphQL básica, un WebSocket para mensajes en tiempo real, o un microservicio simple que se comunique con otro.

## Instrucciones:
### Opción 1: API GraphQL básica
Crear un esquema simple para manejar una entidad (por ejemplo, Book con campos `id`, `title`, `author`).
Implementar queries para obtener todos los libros y uno por ID.
Implementar una mutación para agregar un nuevo libro.
Probar la API con GraphQL Code playground.

### Opción 2: WebSocket simple
Crear un Gateway WebSocket que permita a los clientes conectarse.
Implementar un evento para enviar y recibir mensajes de chat simples.
Mostrar en consola los mensajes recibidos y reenviarlos a todos los clientes conectados.

### Opción 3: Microservicio básico
Crear dos microservicios NestJS que se comuniquen usando TCP o Redis.
Uno debe enviar un mensaje con un comando (ejemplo: `get_time`) y el otro responder con la hora actual.
Probar la comunicación entre ambos.
