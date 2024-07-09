import { NavLink } from "react-router-dom";
import styled from "styled-components"
import logo from '../assets/logo.svg'
import cart from '../assets/icon-cart.svg'
import avatar from '../assets/image-avatar.png'
import './Navbar.css'

const Navbar = () => {

    const NavbarContainer = styled.nav`
        display: grid;
        grid-template-columns: 60% 30%;
        align-items: center;
        gap: 0 20px;
        padding: 0;
        margin: 0 80px 20px;
        border-bottom: 2px solid whitesmoke;
    `;

    const LinksContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 0 50px;
    `;

    const CartList = styled.ul`
        display: flex;
        flex-direction: row;
        justify-content: right;
        align-items: center;
        width: 100%;
        list-style: none;
        padding: 0 20px;
    `;

    const CartListItem = styled.li`
        margin: 0 20px;
    `;

    const CartImage = styled.img`
        height: 30px;
        width: 30px;
    `;

    const AvatarImage = styled.img`
        height: 60px;
        width: 60px;
        border: 2px solid hsl(26, 100%, 55%);
        border-radius: 50%;
    `;

    const Links = styled(NavLink)`
        text-decoration: none;
        color: gray;
        font-size: 0.85rem;
    `;

    return ( 
        <NavbarContainer>
            <LinksContainer>
                <Links to="/">
                    <img src={logo} alt="logo"/>
                </Links>
                <Links to="/collection">Collection</Links>
                <Links to="/menu">Men</Links>
                <Links to="/women" id="women_section">Women</Links>
                <Links to="/about">About</Links>
                <Links to="/contact">Contact</Links>
            </LinksContainer>
            <CartList>
                <CartListItem>
                    <CartImage src={cart}/>
                </CartListItem>
                <CartListItem>
                    <AvatarImage src={avatar}/>
                </CartListItem>
            </CartList>
        </NavbarContainer>
     );
}
 
export default Navbar;