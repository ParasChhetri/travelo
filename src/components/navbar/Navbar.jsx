import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: 'var(--nav-bg-color-blue)', paddingInline : 'var(--padding-LR)'}}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-white fs-3" to={'/'}>
                        Travelo
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white fs-4" aria-current="page" to={'/'}>
                                    Home 
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white fs-4" to={'/Blog'}>
                                    Blog
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white fs-4" to={'/About'}>
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white fs-4" to={'/Contact'}>
                                    Contact us
                                </NavLink>
                            </li>
                        </ul>
                           <NavLink to={'/Login'} type="button" className="btn btn-lg btn-success">
                                Login
                            </NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
