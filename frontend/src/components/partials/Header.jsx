function Header(){

    return(
        <div className="bg-dark">
            <div class="container">
                <header class="d-flex justify-content-center py-3">
                <ul class="nav nav-pills">
                    <li class="nav-item"><a href="/" class="nav-link active" aria-current="page">Home</a></li>
                    <li class="nav-item"><a target="_blank"  rel="noreferrer" href="https://eduardo-arias.com/" class="nav-link">Blog</a></li>
                    <li class="nav-item"><a target="_blank"  rel="noreferrer" href="https://eduardo-arias.com/links/" class="nav-link">Redes</a></li>
                    <li class="nav-item"><a target="_blank"  rel="noreferrer" href="https://streamlabs.com/eduardoariascol/tip" class="nav-link">Donar</a></li>
                </ul>
                </header>
            </div>
        </div>
    )
}

export default Header;