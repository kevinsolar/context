import './style.css';
import { NavLink } from "react-router";

const Navbar = () => {
   return (
      <nav>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/sobre">Sobre</NavLink>
         <NavLink to="/contato">Contato</NavLink>
      </nav>
   )
}
export default Navbar;