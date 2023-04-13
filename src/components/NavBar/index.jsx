import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget";



const NavBar = () => {

    let activeStyle = {
        color: "white",
        backgroundColor: "black",
        borderRadius: "10%",
        textDecoration: "none",
    };

    let noActiveStyle = {
        color: "white",
        textDecoration: "none",
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto d-flex align-items-center  col-10">
                <li className="nav-item ">
                    <NavLink className="mr-4"
                        to="/Home"
                        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
                    >
                        CHIC
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="mr-4"
                        to="/About"
                        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
                    >
                        Sobre Nosotros
                    </NavLink>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle mr-4" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/category/1">Remeras</Link></li>
                            <li><Link className="dropdown-item" to="/category/2">Accesorios</Link></li>
                    </ul>
                </li>
            </ul>
            <ul className="navbar-nav mr-auto col-2 justify-content-end">
                <li>
                    <NavLink
                        to="/cart"
                        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
                    >
                        <CartWidget/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );

}

export default NavBar;