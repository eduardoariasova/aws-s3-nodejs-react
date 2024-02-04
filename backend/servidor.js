// server/index.js
const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// Hacer que node sirva los archivos de nuestro app React
app.use(express.static(path.resolve(__dirname, '../frontend/build')));



// Todas las peticiones GET que no hayamos manejado en las líneas anteriores retornaran nuestro app React
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});