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

---

✅ Opción implementada
Se implementó la Opción 1: API GraphQL básica.

La aplicación permite:

Crear libros con title y author

Consultar todos los libros

Consultar un libro por su id

Todo se ejecuta a través de GraphQL usando el enfoque code-first.

🚀 Cómo ejecutar el proyecto
Cloná el repositorio o descargá el código:

bash
Copiar
Editar
git clone https://github.com/tu-usuario/TA1M3.git
cd TA1M3
Instalá las dependencias:

bash
Copiar
Editar
npm install
Ejecutá el proyecto en modo desarrollo:

bash
Copiar
Editar
npm run start:dev
Abrí GraphQL Playground en tu navegador:

bash
Copiar
Editar
http://localhost:3000/graphql
🧪 Ejemplos de uso
Crear un nuevo libro
graphql
Copiar
Editar
mutation {
  createRecursoBook(createRecursoBookInput: {
    title: "El Principito"
    author: "Antoine de Saint-Exupéry"
  }) {
    id
    title
    author
  }
}
Obtener todos los libros
graphql
Copiar
Editar
query {
  recursoBooks {
    id
    title
    author
  }
}
Obtener un libro por ID
graphql
Copiar
Editar
query {
  recursoBook(id: 1) {
    id
    title
    author
  }
}
🧠 Notas
Esta API no usa base de datos real: los libros se almacenan en memoria mientras el servidor está activo.

La app fue generada usando NestJS CLI y Apollo Server para GraphQL
