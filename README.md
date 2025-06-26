<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  <b>Mini Proyecto Backend con NestJS</b><br>
  <i>GraphQL API básica construida con NestJS y Apollo Server</i>
</p>

---

## 🎯 Objetivo

Construir un pequeño backend usando NestJS que incluya al menos una de estas funcionalidades:

- ✅ Una **API GraphQL básica**
- 🟨 Un WebSocket para mensajes en tiempo real
- 🟨 Un microservicio simple que se comunique con otro

---

## 📌 Opción implementada

**✔ Se implementó la Opción 1: API GraphQL básica**

Esta API permite:

- Crear libros con `title` y `author`
- Consultar **todos los libros**
- Consultar **un libro por su `id`**

Todo esto a través de **GraphQL (enfoque code-first)**.

---

## 🛠️ Tecnologías utilizadas

- [NestJS](https://nestjs.com/) como framework principal
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) para GraphQL
- TypeScript

---

## 🚀 Cómo ejecutar el proyecto

1. **Cloná el repositorio:**

```bash
git clone https://github.com/darwinjcb/TA1M3.git
cd TA1M3
```

2. **Instalá las dependencias:**

```bash
npm install
```

3. **Ejecutá el proyecto en modo desarrollo:**

```bash
npm run start:dev
```

4. **Abrí GraphQL Playground en tu navegador:**

```
http://localhost:3000/graphql
```

---

## 🧪 Ejemplos de uso

### ➕ Crear un nuevo libro

```graphql
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
```

### 📚 Obtener todos los libros

```graphql
query {
  recursoBooks {
    id
    title
    author
  }
}
```

### 🔎 Obtener un libro por ID

```graphql
query {
  recursoBook(id: 1) {
    id
    title
    author
  }
}
```

---

## 🧠 Notas

- Esta API **no usa base de datos real**. Los libros se almacenan **en memoria** mientras el servidor está activo.
- Fue generada usando `NestJS CLI` y `Apollo Server`.
- Ideal para prácticas básicas de GraphQL.

---

## 📂 Otras opciones del proyecto

### 📡 Opción 2: WebSocket simple _(no implementada)_

- Crear un Gateway WebSocket
- Enviar y recibir mensajes de chat simples
- Reenviar mensajes a todos los clientes conectados

### 🔁 Opción 3: Microservicio básico _(no implementada)_

- Dos microservicios NestJS usando TCP o Redis
- Comunicación con comandos como `get_time`

---

## 📃 Licencia

MIT - Este proyecto fue desarrollado con fines académicos.