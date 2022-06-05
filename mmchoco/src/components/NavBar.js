
function NavBar() {


    return (
    
        <nav className="navbar navbar-expand-lg navbar-light" className1="nav1">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                <ul className="navbar-nav">
                    <li className="nav-item"> <a className="nav-link" href="#">Inicio</a> </li>
                    <li className="nav-item"> <a className="nav-link" href="#">Productos</a> </li>
                    <li className="nav-item"> <a className="nav-link" href="#">Nosotros</a> </li>
                    <li className="nav-item"> <a className="nav-link" href="#">Contacto</a> </li>
                    <li className="nav-item"> <a className="nav-link" href="#">Carrito</a></li>
                </ul>
                </div>
            </div>
        </nav>

    );
}


export default NavBar;