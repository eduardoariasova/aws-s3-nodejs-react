// server/index.jscle
const path = require("path");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require("express");
const app = express();
// Hacer que node sirva los archivos de nuestro app React
app.use(express.static(path.resolve(__dirname, '../frontend/build')));
const { S3Client, DeleteObjectCommand, PutObjectCommand} = require('@aws-sdk/client-s3'); // REQUIRE aws
const multer = require('multer');
const sharp = require('sharp');





// AWS S3 ///////////////////////////////////////////////////
// CONFIGURAR S3
const miRegion = 'us-east-2';
let s3 = new S3Client({
  region: miRegion,
  credentials: {
    accessKeyId: process.env.LLAVEACCESO,
    secretAccessKey: process.env.LLAVESECRETO,
  }
});



app.post("/subida", function(req, res){
  let bucket = "bucket-avatar";
  let carpetaInternaBucket = "imagenes/miavatar.jpg";
  let urlImagen = "https://" + bucket + ".s3." + miRegion + ".amazonaws.com/" + carpetaInternaBucket; // ruta de imagen
  // Multer
  const storage = multer.memoryStorage(); // multer almacena el archivo de forma temporal.
  const upload = multer({storage: storage});

  //FUNCIÓN DE SUBIDA S3
  upload.single('file')(req, res, async(err) => {
    if(err) console.log("error desde upload: ", err);
    else{
      // Redimensionamos la imagen antes de subirla a s3
      const redimensionBuffer = await sharp(req.file.buffer)
      .resize({width: 600, height: 600, fit: 'cover'})
      .toBuffer();

      const params = {
        Bucket: bucket,
        Key: carpetaInternaBucket,
        Body: redimensionBuffer,
        ContentType: 'image/jpeg',
      }

      // SUBIR LA IMAGEN
      const command = new PutObjectCommand(params);
      await s3.send(command)
      .then(response => {
        return res.status(200).json({urlImagen: urlImagen, mensaje: "archivo subido correctamente"});
      })
      .catch((error) =>{
        console.log("error al ejecutar send, ", error);
        return res.status(400).json({mensaje: "error al ejecutar comando, por favor intentar nuevamente"});
      });
    }
  });
});


app.post("/eliminar", function(req, res){
  let bucket = "bucket-avatar";
  let carpetaInternaBucket = "imagenes/miavatar.jpg";
  

  let paramsBorrar = {
    Bucket: bucket,
    Key: carpetaInternaBucket
  }

  const commandoBorrar = new DeleteObjectCommand(paramsBorrar);

  s3.send(commandoBorrar)
  .then(response =>{
    console.log(response);
    return res.status(200).json({mensaje: "archivo borrado correctamente"});
  })

});






// AWS S3 ///////////////////////////////////////////////////





























// Todas las peticiones GET que no hayamos manejado en las líneas anteriores retornaran nuestro app React
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

// Listen /////////////////////////////////////
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
// Listen /////////////////////////////////////