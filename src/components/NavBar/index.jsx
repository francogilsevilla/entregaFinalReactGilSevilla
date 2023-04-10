//     return (
//         <nav className={styles.container}>
//             <h1 className={styles.navTitle}>CHIC</h1>
//             <NavLink
//                 to="/Inicio"
//                 style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
//             >
//                 Inicio
//             </NavLink>
//             <NavLink
//                 to="productos"
//                 style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
//             >
//                 Productos
//             </NavLink>
//             <NavLink
//                 to="cart"
//                 style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
//             >
//                 <span>🛒3</span>
//             </NavLink>
//         </nav>
//     );
// };

import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget";


const NavBar = () => {

    let activeStyle = {
        color: "white",
        backgroundColor: "black",
        borderRadius: "10%",
        textDecoration: "none"
    };

    let noActiveStyle = {
        color: "black",
        textDecoration: "none",
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <ul className="navbar-nav float-right">
                    <NavLink className="navbar-brand float-center" to="/home" style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}>
                        CHIC
                    </NavLink>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}>Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}>Sobre Nosotros</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <p className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </p>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><NavLink to="/category/1" style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}>Remeras</NavLink></li>
                            <li><NavLink to="/category/2" style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}>Accsesorios</NavLink></li>
                        </ul>
                    </li>
                    <li>
                    <NavLink
                        to="cart"
                        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
                    >
                        <CartWidget />
                    </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );

}

export default NavBar;