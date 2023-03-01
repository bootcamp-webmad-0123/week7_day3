import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/sobre-mi" className={({ isActive }) => isActive ? "selected" : ""}>Sobre mi</NavLink>
                </li>
                <li>
                    <NavLink to="/proyectos" className={({ isActive }) => isActive ? "selected" : ""}>Proyectos (useEffect)</NavLink>
                </li>
                <li>
                    <NavLink to="/perfil" className={({ isActive }) => isActive ? "selected" : ""}>Mi perfil *</NavLink>
                </li>
                <li>
                    <NavLink to="/vuelos/MAD/BCN/22-02-2023" className={({ isActive }) => isActive ? "selected" : ""}>Params</NavLink>
                </li>
                <li>
                    <NavLink to="/resultados?color=rojo&talla=media" className={({ isActive }) => isActive ? "selected" : ""}>Strings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;