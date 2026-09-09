import { useState } from 'react';
import axios from 'axios';


function Home() {

    const [archivo, setArchivo] = useState(null);
    const [avatar, setAvatar] = useState("/imagenes/avatar.jpg");
    const [cargando, setCargando] = useState(false);
    const [mensaje, setMensaje] = useState(null); // { tipo: 'success' | 'danger', texto: string }


    function controlCambioImagen(event){

        const archivoSubido = event.target.files[0]; // imagen

        if(archivoSubido){
            const fileName = archivoSubido.name.toLowerCase();

            // Solamente archivos jpg
            if(fileName.endsWith('.jpg') && !fileName.endsWith('.jpeg')){
                setArchivo(archivoSubido);
                setMensaje(null);
            }
            else{
                setArchivo(null);
                setMensaje({ tipo: 'danger', texto: 'Sube un archivo con extensión .jpg' });
            }
        }
    }


    async function controlSubida(event){
        event.preventDefault();

        if(!archivo){
            setMensaje({ tipo: 'danger', texto: 'Primero selecciona una imagen .jpg' });
            return;
        }

        const formData = new FormData();
        formData.append('file', archivo);

        try {
            setCargando(true);
            // Enviar la imagen al servidor
            const response = await axios.post("/subida", formData, {
                headers: {'Content-Type': 'multipart/form-data'},
            });

            if(response.status === 200){
                setAvatar(response.data.urlImagen);
                setMensaje({ tipo: 'success', texto: 'Foto subida correctamente' });
            }
            else{
                setMensaje({ tipo: 'danger', texto: 'No se pudo subir la foto' });
            }
        }
        catch(error){
            console.log(error);
            setMensaje({ tipo: 'danger', texto: 'Ocurrió un error al subir la foto' });
        }
        finally {
            setCargando(false);
        }
    }

    async function controlEliminar(event){
        event.preventDefault();

        try {
            setCargando(true);
            const response = await axios.post("/eliminar");

            if(response.status === 200){
                setAvatar("/imagenes/avatar.jpg");
                setArchivo(null);
                setMensaje({ tipo: 'success', texto: 'Imagen eliminada correctamente' });
            }
            else{
                setMensaje({ tipo: 'danger', texto: 'No se pudo eliminar la imagen' });
            }
        }
        catch(error){
            console.log(error);
            setMensaje({ tipo: 'danger', texto: 'Ocurrió un error al eliminar la imagen' });
        }
        finally {
            setCargando(false);
        }
    }

    return(
        <div className="container py-5">

            <div className="card tarjetaSubida">

                <div className="card-header text-center">
                    <h1 className="h3 mb-1 fw-bold">
                        <i className="bi bi-cloud-arrow-up me-2"></i>AWS S3
                    </h1>
                    <p className="mb-0 small opacity-75">Sube o elimina tu foto de perfil</p>
                </div>

                <div className="card-body text-center p-4">

                    <div className="avatarWrapper my-3">
                        <img className="claseAvatar" src={avatar} alt="avatar" />
                    </div>

                    {mensaje && (
                        <div className={`alert alert-${mensaje.tipo} py-2 my-3`} role="alert">
                            {mensaje.texto}
                        </div>
                    )}

                    <form onSubmit={controlSubida}>
                        <div className="mb-2">
                            <input
                                className="form-control"
                                accept=".jpg"
                                type="file"
                                id="formFile"
                                onChange={controlCambioImagen}
                                disabled={cargando}
                            />
                        </div>

                        {archivo && (
                            <p className="nombreArchivo mb-3">
                                <i className="bi bi-file-earmark-image me-1"></i>{archivo.name}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={cargando || !archivo}
                        >
                            {cargando
                                ? <><span className="spinner-border spinner-border-sm me-2"></span>Procesando...</>
                                : <><i className="bi bi-upload me-2"></i>Subir foto</>
                            }
                        </button>

                        <button
                            type="button"
                            className="btn btn-outline-danger w-100 mt-3"
                            onClick={controlEliminar}
                            disabled={cargando}
                        >
                            <i className="bi bi-trash me-2"></i>Eliminar foto
                        </button>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Home;
