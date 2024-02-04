import { useEffect } from 'react';



function Home() {


    const avatar = "/imagenes/avatar.jpg";


    function controlCambioImagen(){

    }

    function controlSubida(){

    }

    function controlEliminar(){

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