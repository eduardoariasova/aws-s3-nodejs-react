import { useEffect, useState } from 'react';
import axios from 'axios';


function Home() {

    const [archivo, setArchivo] = useState(null);
    const [avatar, setAvatar] = useState("/imagenes/avatar.jpg");

    


    function controlCambioImagen(event){
        
        const archivoSubido = event.target.files[0]; // imagen

        if(archivoSubido){
            const fileName = archivoSubido.name.toLowerCase();
            
            // Solamente archivos jpg
            if(fileName.endsWith('.jpg') && !fileName.endsWith('.jpeg')){setArchivo(archivoSubido);} // si es jpg, entonces guardamos en archivo.
            else{ console.log("sube un archivo .jpg");}
        }
    }


    async function controlSubida(event){
        event.preventDefault(); 

        if(!archivo){console.log("sube un archivo");}
        else{
            const formData = new FormData();
            formData.append('file', archivo);

            // Enviar la imagen al servidor
            await axios.post("/subida", formData, {
                headers: {'Content-Type': 'multipart/form-data',},
            })
            .then(async function(response){
                console.log(response);

                if(response.status===200){
                    console.log("exito"); 
                    let urlImagen = response.data.urlImagen; 
                    setAvatar(urlImagen);
                }
                else{ console.log("error");  }
            });
        }

    }

    async function controlEliminar(){
        await axios.post("/eliminar")
        .then(async function(response){
            console.log(response);
            if(response===200){
                console.log("imagen eliminada correctamente");
                setAvatar("/imagenes/avatar.jpg");
            }
            else{
                console.log("error");
            }
        })
    
    }

    return(
        <div>

            <div className='container text-center my-5'>
                <h1>AWS S3</h1>
                <p>Selecciona una opción</p>
                <img className='claseAvatar my-5' src={avatar} alt="avatar" />


                <form>
                    <div className="mb-3"> <input className="form-control" accept=".jpg" type="file" id="formFile" onChange={controlCambioImagen} /> </div>
                    <button type="submit" className="btn btn-primary w-100" onClick={controlSubida} >Subir foto</button>
                    <button type="submit" className="btn btn-danger w-100 mt-3" onClick={controlEliminar} >Eliminar foto</button>
                </form>
            </div>

            

        </div>  
    )
}

export default Home;