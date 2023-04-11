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
import styles from "./navbar.module.css"


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
        <div>
        <nav>
                <ul>
                    <NavLink to="/home" style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}>
                        CHIC
                    </NavLink>
                    <li>
                        <NavLink  to="/" style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}>Inicio</NavLink>
                    </li>
                    <li >
                        <NavLink className="nav-link" to="/about" style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}>Sobre Nosotros</NavLink>
                    </li>
                    <li>
                        <p>
                            Categorias
                        </p>
                        <ul className={styles.dropdown} >
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
        </nav>
        </div>
    );

}

export default NavBar;