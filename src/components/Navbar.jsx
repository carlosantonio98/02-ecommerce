export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">clothingStore.</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Women</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Men</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Kids & Baby</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shoes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Handbags & Accessories</a>
                        </li>
                        <li className="nav-item ms-auto">
                            <a className="btn btn-secondary" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
