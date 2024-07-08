import { NavLink } from "react-router-dom";


const Navbar = () => {
    return ( 
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/women">Women</NavLink>
        </>
     );
}
 
export default Navbar;