# aws-s3-nodejs-react

Este repositorio guarda el código para subir y eliminar imágenes en S3 con Node.js y React.

Este mismo proyecto es la base de **dos contenidos** de mi canal y blog:

## 📹 Tema 1: Cómo subir y eliminar imágenes en AWS S3 con Node.js y React

Cómo se construyó este proyecto desde cero: configuración de AWS S3, subida de archivos con Multer, redimensión con Sharp y eliminación de objetos desde Node.js y React.

- Blog: [Cómo subir y eliminar imágenes en AWS S3, Node.js y React](https://eduardoarias.co/como-subir-y-eliminar-imagenes-en-aws-s3-nodejs-y-react/)
- YouTube: [https://www.youtube.com/watch?v=czEOHboCr6o](https://www.youtube.com/watch?v=czEOHboCr6o)

## 📹 Tema 2: "Funciona en mi computador"... pero no en producción: 7 razones

Usando este mismo repositorio, lo llevo de local a producción (Heroku) y muestro los 7 errores más comunes por los que una app que funciona en tu computador falla en el servidor: variables de entorno, dependencias no declaradas, versiones de Node, binarios nativos por plataforma (Sharp), rutas y build, el proxy de desarrollo de React, y permisos/dominios de servicios externos como AWS S3.

- Blog: [Local vs producción: 7 razones por las que tu app falla](https://eduardoarias.co/local-vs-produccion-7-razones-por-las-que-tu-app-falla/)
- YouTube: [https://youtu.be/1XQ8AF9PNec](https://youtu.be/1XQ8AF9PNec)

---

## Instalación

1. Instalar paquetes en la carpeta `frontend`:
```
npm i react-router-dom
```

2. Instalar paquetes en la carpeta contenedora del proyecto (raíz):
```
npm i @aws-sdk/client-s3
npm i multer
npm i sharp
```

3. Crear archivo `.env` en la carpeta contenedora del proyecto con las variables:
```
LLAVEACCESO=
LLAVESECRETO=
NOMBREBUCKET=
```

4. Correr en dos terminales: una para el backend (`npm start` en la raíz) y otra para el frontend (`npm start` en `frontend`).

---

## 🌍 Sígueme en redes

👉 [https://eduardoarias.co/links/](https://eduardoarias.co/links/)

[![Instagram](https://img.shields.io/badge/INSTAGRAM-%40eduardoarias.co-e4405f?style=for-the-badge&logo=instagram&logoColor=white)](https://eduardoarias.co/links/)

---

## ⭐ Apoya el proyecto

Si este contenido te ayudó:

- Dale ⭐ al repositorio
- Suscríbete al canal
- Comparte el video

---

## 📩 Contacto

Si necesitas ayuda profesional o quieres integrar pagos en tu proyecto:

👉 [https://eduardoarias.co/links/](https://eduardoarias.co/links/)

---

🔥 Hecho con experiencia real construyendo aplicaciones con pagos en producción.
