const Navbar = () => {

    return (<nav className="navbar" data-bs-theme="dark">
        <p className="text">Start Bootstrap</p>
        <div className="ulNav">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li clasNameclassName="nav-item">
                    <a className="nav-link" href="#">Service</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Contact</a>
                </li>
            </ul>
        </div>
    </nav>

    )
}
export default Navbar;