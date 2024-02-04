function Footer(){
    return(
        <div className="bg-dark">
            <div class="container">
                <footer class="py-3 my-4">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3" style={{color: "white !important"}}>
                        <li class="nav-item"><a href="/" class="nav-link px-2 text-light">Home</a></li>
                        <li class="nav-item"><a target="_blank" rel="noreferrer" href="https://eduardo-arias.com/" class="nav-link px-2 text-light">Blog</a></li>
                        <li class="nav-item"><a target="_blank" rel="noreferrer" href="https://eduardo-arias.com/links" class="nav-link px-2 text-light">Redes</a></li>
                        <li class="nav-item"><a target="_blank" rel="noreferrer" href="https://streamlabs.com/eduardoariascol/tip" class="nav-link px-2 text-light">Donar</a></li>
                    </ul>
                    <p class="text-center text-light">&copy; 2023 Eduardo Arias</p>
                </footer>
            </div>
        </div>
    )
}

export default Footer;