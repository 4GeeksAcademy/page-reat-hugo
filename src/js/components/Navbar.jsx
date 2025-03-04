const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar scroll</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="ulNav">
                    <div className="collapse navbar-collapse" id="navbarScroll">

                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll justify-content-end" style={{ "--bs-scroll-height": "100px" }}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;